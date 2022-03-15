import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Location from "@/views/Location";
import contact from "@/views/contact";
import AdminPanel from "@/views/AdminPanel";

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
  {
    path: "/admin",
    name: "AdminPanel",
    component: AdminPanel,
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

export default router;
