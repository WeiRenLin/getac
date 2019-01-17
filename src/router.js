import Vue from 'vue'
import Router from 'vue-router'
import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue);
Vue.use(Router)

let pages = {
    "/registerpart1": () =>
    import("@/views/register/registerpart1"),
    "/registerpart2": () =>
    import("@/views/register/registerpart2"),
    "/about": () =>
    import("@/views/about/about"),
    "/partner": () =>
    import("@/views/partner/partner"),
    "/advantage": () =>
    import("@/views/partner/advantage"),
    "/resetpd": () =>
    import("@/views/login/resetpd"),
};

let routes = [{
  path: "",
  component: () =>
    import("@/views/shared/layout"),
  children: [{
    name: "/",
    path: "/",
    component: () =>
      import("@/views/home")
  },
  ...Object.keys(pages).map(b => {
      return {
        name: b,
        path: b,
        component: pages[b],
      };
  })
  ]
}];


export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
    path: '/login',
    component: () =>
      import('@/views/login/login'),
    meta: {
      allowAnonymous: true
    }
  }, ...routes, {
    path: "",
    component: () =>
      import("@/views/shared/layout"),
    children: [{
      name: '404',
      path: "*",
      component: () =>
        import("@/views/404")
    }]
  }]
})
