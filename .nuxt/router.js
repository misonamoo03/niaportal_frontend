import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from '@nuxt/ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _409ab910 = () => interopDefault(import('..\\pages\\search.vue' /* webpackChunkName: "pages/search" */))
const _19c70540 = () => interopDefault(import('..\\pages\\board\\faq\\_boardNo.vue' /* webpackChunkName: "pages/board/faq/_boardNo" */))
const _411aa7ae = () => interopDefault(import('..\\pages\\board\\qna\\_boardNo.vue' /* webpackChunkName: "pages/board/qna/_boardNo" */))
const _0cc81050 = () => interopDefault(import('..\\pages\\member\\_name.vue' /* webpackChunkName: "pages/member/_name" */))
const _7f464796 = () => interopDefault(import('..\\pages\\sports\\_code.vue' /* webpackChunkName: "pages/sports/_code" */))
const _ac12d8cc = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/search",
    component: _409ab910,
    name: "search"
  }, {
    path: "/board/faq/:boardNo?",
    component: _19c70540,
    name: "board-faq-boardNo"
  }, {
    path: "/board/qna/:boardNo?",
    component: _411aa7ae,
    name: "board-qna-boardNo"
  }, {
    path: "/member/:name?",
    component: _0cc81050,
    name: "member-name"
  }, {
    path: "/sports/:code?",
    component: _7f464796,
    name: "sports-code"
  }, {
    path: "/",
    component: _ac12d8cc,
    name: "index"
  }],

  fallback: false
}

function decodeObj(obj) {
  for (const key in obj) {
    if (typeof obj[key] === 'string') {
      obj[key] = decode(obj[key])
    }
  }
}

export function createRouter () {
  const router = new Router(routerOptions)

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    const r = resolve(to, current, append)
    if (r && r.resolved && r.resolved.query) {
      decodeObj(r.resolved.query)
    }
    return r
  }

  return router
}
