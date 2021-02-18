/* eslint-disable no-unused-vars */
import { localeChanged } from 'vee-validate';
import BoardService from '~/service/board';

export const state = () => ({
	storeBoardList: [],
  	storeBoardInfo: [],
	storeSearchList: [],
	storeBoardDetail: []
});

export const mutations = {
	BOARDLIST: function(state, boardList) {
		state.storeBoardList = boardList;
	},
	BOARDINFO: function(state, boardInfo) {
		state.storeBoardInfo = boardInfo;
	},	
	SEARCHLIST: function(state, searchList) {
		state.storeSearchList = searchList;
	},
	BOARDDETAIL: function(state, boardDetail) {
		state.storeBoardDetail = boardDetail;
	}
};

export const actions = {
	// nuxtServerInit는 모든 페이지를 서버 렌더링하기 전에 Nuxt.js에 의해 호출
	async nuxtServerInit({ commit }, { req }) {
		//if (req.session && req.session.authUser) {
			//commit('SET_USER', req.session.authUser)
		//}
	},
	//commonCode 조회
	async getBoardList({ commit }, { boardNo, pagePerRow }) {
		const data = await BoardService.getBoardList(boardNo, pagePerRow);
		if (data.status != 200) {
			throw new Error(data.message);
		}
		data.data.list.forEach((item) => {
			item.title = item.title.replace(/(\n)/g, '<br />') + '<span class="arrow"></span>';
		       item.content = item.content.replace(/(\n)/g, '<br />');
		});
		
		commit('BOARDLIST', data.data.list);
	},

	async getBoardInfo({ commit }, { boardContentNo }) {
		const data = await BoardService.getBoardInfo(boardContentNo);
		console.log(data.data);
		console.log(data.status);
		if (data.status != 200) {
		throw new Error(data.message);
		}
		commit('BOARDINFO', data.data.info);
	},
 
	async search({ commit }, { query, type, currentPage}) {
		const data = await BoardService.search({query, type, currentPage});
		if (data.status != 200) {
			throw new Error(data.message);
		}
		commit('SEARCHLIST', data.data);
	},

	async createFaq({commit}, {boardNo, title, content}) {
		const data = await BoardService.createFaq({boardNo, title, content});
		console.log(data);
		if (data.status != 200) {
			throw new Error(data.message);
		}
	},

	async showBoardDetail({commit}, {boardContentNo}) {
		const data = await BoardService.showBoardDetail({boardContentNo});
		if (data.status != 200) {
			throw new Error(data.message);
		}
		commit('BOARDDETAIL', data.data.info);
	},

	async updateFaq({commit}, {boardContentNo, title, content}) {
		const data = await BoardService.updateFaq({boardContentNo, title, content});
		console.log(data);
		if (data.status != 200) {
			throw new Error(data.message);
		}
	}
};

export const getters = {
	getSportsBoardList(state) {
		const { storeBoardList } = state;
		storeBoardList.map(no => {
		});
		return storeBoardList;
	},
	getGetterBoardInfo(state) {
		const { storeBoardInfo } = state;
		return storeBoardInfo;
	},
	getSearchList(state) {
		const { storeSearchList } = state;
		return storeSearchList;
	},
	getBoardDetail(state) {
		const { storeBoardDetail } = state;
		return storeBoardDetail;
	}
};
