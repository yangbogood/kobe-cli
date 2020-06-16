const route = [
  {
    path: "/",
    name: "home",
    redirect: { path: "/home" }
  },
  {
    path: "/home",
    meta: "home",
    component: () => import("./Home.vue")
  }
];

export default route;
