import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Location from "@/views/Location";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/okolica",
    name: "Location",
    component: Location,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
