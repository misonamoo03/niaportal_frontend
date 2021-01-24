import CommonService from '~/service/common'

export const state = () => ({
  commonCodeList:[]
})

export const mutations = {
  COMMONCODE: function (state, codeList) {
    state.commonCodeList = codeList
  },

}

export const actions = {

  // nuxtServerInit는 모든 페이지를 서버 렌더링하기 전에 Nuxt.js에 의해 호출
  async nuxtServerInit({ commit }, { req }) {
    console.log(req.session)
    if (req.session && req.session.authUser) {
      //commit('SET_USER', req.session.authUser)
    }
  },
  //commonCode 조회
  async getCodeList({ commit }, { prtCode,codeType}) {
   console.log("-----------------",prtCode);
    const data = await CommonService.getCodeList(
      prtCode,codeType
    )
    
    if (data.status != 200) {
      throw new Error(data.message)
    }
    commit('COMMONCODE', data.data.list)
  },
}

export const getters = {
   getCommonCodeList (state) {
    
    const { commonCodeList } = state;
    console.log("---000",commonCodeList);

    return commonCodeList
    
  }
}