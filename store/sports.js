/* eslint-disable no-unused-vars */
import SportsService from '~/service/sports';

export const state = () => ({
	storeSportsList: [],
});

export const mutations = {
	SPORTSLIST: function(state, sportsList) {
		state.storeSportsList = sportsList;
	},
};

export const actions = {
	// nuxtServerInit는 모든 페이지를 서버 렌더링하기 전에 Nuxt.js에 의해 호출
	// async nuxtServerInit({ commit }, { req }) {
	// 	if (req.session && req.session.authUser) {
	// 		//commit('SET_USER', req.session.authUser)
	// 	}
	// },
	//commonCode 조회
	async getSportsList({ commit }, { code }) {
		const data = await SportsService.getSportsList(code);
		if (data.status != 200) {
			throw new Error(data.message);
		}
		commit('SPORTSLIST', data.data.list);
	},
};

export const getters = {
	getSportsItemList(state) {
		const { storeSportsList } = state;
		storeSportsList.map(no => {
		});
		return storeSportsList;
	},
};
