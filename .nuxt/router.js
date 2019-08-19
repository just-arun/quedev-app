import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _041be5ac = () => interopDefault(import('../pages/catagories/index.vue' /* webpackChunkName: "pages/catagories/index" */))
const _047ddb8e = () => interopDefault(import('../pages/create/index.vue' /* webpackChunkName: "pages/create/index" */))
const _0d815b9b = () => interopDefault(import('../pages/inspire.vue' /* webpackChunkName: "pages/inspire" */))
const _3329c7f2 = () => interopDefault(import('../pages/post/index.vue' /* webpackChunkName: "pages/post/index" */))
const _2c67d732 = () => interopDefault(import('../pages/settings.vue' /* webpackChunkName: "pages/settings" */))
const _7b6f6eb7 = () => interopDefault(import('../pages/trending/index.vue' /* webpackChunkName: "pages/trending/index" */))
const _ea9bf718 = () => interopDefault(import('../pages/user/login.vue' /* webpackChunkName: "pages/user/login" */))
const _e158d838 = () => interopDefault(import('../pages/user/regester.vue' /* webpackChunkName: "pages/user/regester" */))
const _95e07cc2 = () => interopDefault(import('../pages/user/profile/_id.vue' /* webpackChunkName: "pages/user/profile/_id" */))
const _301aeee9 = () => interopDefault(import('../pages/post/_title.vue' /* webpackChunkName: "pages/post/_title" */))
const _792de85a = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

Vue.use(Router)

if (process.client) {
  if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual'

    // reset scrollRestoration to auto when leaving page, allowing page reload
    // and back-navigation from other pages to use the browser to restore the
    // scrolling position.
    window.addEventListener('beforeunload', () => {
      window.history.scrollRestoration = 'auto'
    })

    // Setting scrollRestoration to manual again when returning to this page.
    window.addEventListener('load', () => {
      window.history.scrollRestoration = 'manual'
    })
  }
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected and scrollToTop is not explicitly disabled
  if (
    to.matched.length < 2 &&
    to.matched.every(r => r.components.default.options.scrollToTop !== false)
  ) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some(r => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise((resolve) => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}

export function createRouter() {
  return new Router({
    mode: 'history',
    base: decodeURI('/'),
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,

    routes: [{
      path: "/catagories",
      component: _041be5ac,
      name: "catagories"
    }, {
      path: "/create",
      component: _047ddb8e,
      name: "create"
    }, {
      path: "/inspire",
      component: _0d815b9b,
      name: "inspire"
    }, {
      path: "/post",
      component: _3329c7f2,
      name: "post"
    }, {
      path: "/settings",
      component: _2c67d732,
      name: "settings"
    }, {
      path: "/trending",
      component: _7b6f6eb7,
      name: "trending"
    }, {
      path: "/user/login",
      component: _ea9bf718,
      name: "user-login"
    }, {
      path: "/user/regester",
      component: _e158d838,
      name: "user-regester"
    }, {
      path: "/user/profile/:id?",
      component: _95e07cc2,
      name: "user-profile-id"
    }, {
      path: "/post/:title",
      component: _301aeee9,
      name: "post-title"
    }, {
      path: "/",
      component: _792de85a,
      name: "index"
    }],

    fallback: false
  })
}
