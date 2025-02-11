import { createRouter, createWebHistory } from "vue-router";
import TeamsList from "../components/teams/TeamsList.vue";
import UsersList from "../components/users/UsersList.vue";
import TeamMembers from "../components/teams/TeamMembers.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/teams", component: TeamsList },
    { path: "/users", component: UsersList },
    { path: "/teams/:teamId", component: TeamMembers },
  ],
  linkActiveClass: "active",
});

// export default router;
export { router };
