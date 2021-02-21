/* eslint-disable no-unused-vars */
import { localeChanged } from 'vee-validate';
import BoardService from '~/service/board';

export const state = () => ({
	storeBoardList: [],
  	storeBoardInfo: [],
	storeSearchList: [],
	storeBoardDetail: [],
	storeBoardGroup: []
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
	},
	BOARDGROUP: function(state, boardGroup) {
		state.storeBoardGroup = boardGroup;
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
	async getBoardList({ commit }, { boardNo, pagePerRow, currentPage }) {
		const data = await BoardService.getBoardList(boardNo, pagePerRow, currentPage);
		if (data.status != 200) {
			throw new Error(data.message);
		}
		if(boardNo === 1) {
			data.data.list.forEach((item) => {
				item.title = item.title.replace(/(\n)/g, '<br />');
				item.content = item.content.replace(/(\n)/g, '<br />');
			});
		}
		
		commit('BOARDLIST', data.data);
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

	async showBoardDetail({commit}, {boardContentNo}) {
		const data = await BoardService.showBoardDetail({boardContentNo});
		if (data.status != 200) {
			throw new Error(data.message);
		}
		commit('BOARDDETAIL', data.data.info);
	},

	async updateBoardContent({commit}, {boardContentNo, title, content}) {
		const data = await BoardService.updateBoardContent({boardContentNo, title, content});
		console.log(data);
		if (data.status != 200) {
			throw new Error(data.message);
		}
	},

	async createBoardContent({commit}, {boardNo, title, content, secYn, orgBoardContentNo}) {
		const data = await BoardService.createBoardContent({boardNo, title, content, secYn, orgBoardContentNo});
		console.log(data);
		if (data.status != 200) {
			throw new Error(data.message);
		}
	},

	async showBoardGroup({commit}, {boardContentNo}) {
		const data = await BoardService.showBoardGroup({boardContentNo});
		if (data.status != 200) {
			throw new Error(data.message);
		}
		commit('BOARDGROUP', data.data.info);
	}
};

export const getters = {
	getSportsBoardList(state) {
		const { storeBoardList } = state;
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
	},
	getBoardGroup(state) {
		const { storeBoardGroup } = state;
		return storeBoardGroup;
	}
};
