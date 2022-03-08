import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Location from "@/views/Location";
import contact from "@/views/contact";

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
  {
    path: "/kontakt",
    name: "Kontakt",
    component: contact,
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

export default router;
