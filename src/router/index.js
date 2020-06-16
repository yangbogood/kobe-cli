import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
let routes = [];
const routerContext = require.context("../views", true, /route\.js$/);
routerContext.keys().forEach(url => {
  const routeModule = routerContext(url);
  routes = routes.concat(routeModule.default || routeModule);
});
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
