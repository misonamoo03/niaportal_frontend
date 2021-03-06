/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import MemberService from '~/service/member';

export const state = () => ({
  sidebar: false,
  authUser: null,
  info: '',
  findPwData: ''
})

export const mutations = {
  toggleSidebar: function (state) {
    state.sidebar = !state.sidebar
  },
  LOGIN: function (state, user) {
    state.authUser = user
  },
  LOGOUT: function () {
    state.authUser = null
  },
  SET_USER: function (state, user) {
    state.authUser = user
  },
  SET_MENU: function (state, data) {
    state.topMenu = data.topMenu
    state.aside = data.aside
  },
  USER_INFO: function (state, data) {
    state.info = data
  },
  FINDPW: function(state, data) {
    state.findPwData = data
  }
}

export const actions = {
  // nuxtServerInit는 모든 페이지를 서버 렌더링하기 전에 Nuxt.js에 의해 호출
  async nuxtServerInit({ commit }, { req }) {
    //if (req.session && req.session.authUser) {
    //  commit('SET_USER', req.session.authUser)
    //}
  },
  async signUp({ commit }, { userInfo }) {

    const data = await MemberService.signUp({
      userInfo
    })

    if (data.status != 200) {
      throw new Error(data.message)
    }
    //commit('LOGIN', data.id)
  },
  async signIn({ commit }, { email, password }) {
    const data = await MemberService.signIn({
      email, password
    })

    if (data.status != 200) {
      throw new Error(data.message)
    }
    commit('LOGIN', data)
  },
  async findPass({commit}, {email} ) {
    const data = await MemberService.findPass({
      email
    })

    if (data.status != 200) {
      throw new Error(data.message)
    }
    commit('FINDPW', data.data);
  },
  async logout({ commit }) {
    await axios.post('/apis/logout').then(() => commit('LOGOUT'))
  },
  async verify({commit}, {userNo, secCode}) {
    const data = await MemberService.verify({
      userNo, secCode
    })

    if (data.status != 200) {
      throw new Error(data.message)
    }
  },
  async changePwd({commit}, {userNo, password, rePassword}) {
    const data = await MemberService.changePwd({
      userNo, password, rePassword
    })

    if (data.status != 200) {
      throw new Error(data.message)
    }
    commit('SET_USER', data)
  },
  async memberInquiry({commit}, {email}) {
    const data = await MemberService.memberInquiry({
      email
    });

    if (data.status != 200) {
      throw new Error(data.message)
    }
    commit('USER_INFO', data.data.memberInfo)
  },
  async memberUpdate({commit}, {userInfo}) {
    const data = await MemberService.memberUpdate({
      userInfo
    })

    if (data.status != 200) {
      throw new Error(data.message)
    }
  }
}

export const getters = {
  getInfo(state) {

    const { info } = state;

    return info
  },

  getFindPwData(state) {
    const { findPwData } = state;
    return findPwData
  }
}
