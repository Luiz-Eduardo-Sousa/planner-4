import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _3f15454c = () => interopDefault(import('..\\pages\\a-empresa.vue' /* webpackChunkName: "pages/a-empresa" */))
const _73b89f18 = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _5e510a32 = () => interopDefault(import('..\\pages\\produtos\\index.vue' /* webpackChunkName: "pages/produtos/index" */))
const _3571f596 = () => interopDefault(import('..\\pages\\servicos.vue' /* webpackChunkName: "pages/servicos" */))
const _52ac0ca6 = () => interopDefault(import('..\\pages\\servicos\\index.vue' /* webpackChunkName: "pages/servicos/index" */))
const _56194f36 = () => interopDefault(import('..\\pages\\servicos\\_slug.vue' /* webpackChunkName: "pages/servicos/_slug" */))
const _24a270a2 = () => interopDefault(import('..\\pages\\produtos\\produto-a.vue' /* webpackChunkName: "pages/produtos/produto-a" */))
const _24b08823 = () => interopDefault(import('..\\pages\\produtos\\produto-b.vue' /* webpackChunkName: "pages/produtos/produto-b" */))
const _abde07fe = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/a-empresa",
    component: _3f15454c,
    name: "a-empresa"
  }, {
    path: "/login",
    component: _73b89f18,
    name: "login"
  }, {
    path: "/produtos",
    component: _5e510a32,
    name: "produtos"
  }, {
    path: "/servicos",
    component: _3571f596,
    children: [{
      path: "",
      component: _52ac0ca6,
      name: "servicos"
    }, {
      path: ":slug",
      component: _56194f36,
      name: "servicos-slug"
    }]
  }, {
    path: "/produtos/produto-a",
    component: _24a270a2,
    name: "produtos-produto-a"
  }, {
    path: "/produtos/produto-b",
    component: _24b08823,
    name: "produtos-produto-b"
  }, {
    path: "/",
    component: _abde07fe,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
