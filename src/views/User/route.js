const route = [
  {
    path: "/user",
    meta: "user",
    component: () => import("./User.vue")
  }
];
export default route;
