export { default as Banner } from '../..\\components\\banner.vue'
export { default as Footer } from '../..\\components\\footer.vue'
export { default as Header } from '../..\\components\\header.vue'
export { default as Logo } from '../..\\components\\Logo.vue'
export { default as MainIntro } from '../..\\components\\mainIntro.vue'
export { default as FaqList } from '../..\\components\\board\\faqList.vue'
export { default as QnaList } from '../..\\components\\board\\qnaList.vue'
export { default as MemberContent } from '../..\\components\\member\\memberContent.vue'
export { default as TabMenu } from '../..\\components\\member\\tabMenu.vue'
export { default as SportsList } from '../..\\components\\sports\\sportsList.vue'

export const LazyBanner = import('../..\\components\\banner.vue' /* webpackChunkName: "components_banner" */).then(c => c.default || c)
export const LazyFooter = import('../..\\components\\footer.vue' /* webpackChunkName: "components_footer" */).then(c => c.default || c)
export const LazyHeader = import('../..\\components\\header.vue' /* webpackChunkName: "components_header" */).then(c => c.default || c)
export const LazyLogo = import('../..\\components\\Logo.vue' /* webpackChunkName: "components_Logo" */).then(c => c.default || c)
export const LazyMainIntro = import('../..\\components\\mainIntro.vue' /* webpackChunkName: "components_mainIntro" */).then(c => c.default || c)
export const LazyFaqList = import('../..\\components\\board\\faqList.vue' /* webpackChunkName: "components_board/faqList" */).then(c => c.default || c)
export const LazyQnaList = import('../..\\components\\board\\qnaList.vue' /* webpackChunkName: "components_board/qnaList" */).then(c => c.default || c)
export const LazyMemberContent = import('../..\\components\\member\\memberContent.vue' /* webpackChunkName: "components_member/memberContent" */).then(c => c.default || c)
export const LazyTabMenu = import('../..\\components\\member\\tabMenu.vue' /* webpackChunkName: "components_member/tabMenu" */).then(c => c.default || c)
export const LazySportsList = import('../..\\components\\sports\\sportsList.vue' /* webpackChunkName: "components_sports/sportsList" */).then(c => c.default || c)
