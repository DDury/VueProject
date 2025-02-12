<template>
  <div>
    <the-navigation></the-navigation>
    <main>
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </main>
    <footer><router-view name="footer" /></footer>
  </div>
</template>

<script setup>
// import TeamsList from "./components/teams/TeamsList.vue";
// import UsersList from "./components/users/UsersList.vue";
import TheNavigation from "./components/nav/TheNavigation.vue";

import { ref, provide } from "vue";

// const activePage = ref("teams-list");
const teams = ref([
  { id: "t1", name: "Frontend Engineers", members: ["u1", "u2"] },
  { id: "t2", name: "Backend Engineers", members: ["u1", "u2", "u3"] },
  { id: "t3", name: "Client Consulting", members: ["u4", "u5"] },
]);
const users = ref([
  { id: "u1", fullName: "Max Schwarz", role: "Engineer" },
  { id: "u2", fullName: "Praveen Kumar", role: "Engineer" },
  { id: "u3", fullName: "Julie Jones", role: "Engineer" },
  { id: "u4", fullName: "Alex Blackfield", role: "Consultant" },
  { id: "u5", fullName: "Marie Smith", role: "Consultant" },
]);

provide("teams", teams);
provide("users", users);

// const setActivePage = (page) => {
//   activePage.value = page;
// };
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease-in-out;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
}
.slide-enter-from {
  transform: translateX(100%);
  opacity: 0;
}
.slide-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}
.blur-enter-active,
.blur-leave-active {
  transition: filter 0.3s ease-in-out, opacity 0.3s ease-in-out;
}
.blur-enter-from {
  filter: blur(10px);
  opacity: 0;
}
.blur-leave-to {
  filter: blur(10px);
  opacity: 0;
}
.scale-enter-active,
.scale-leave-active {
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
}
.scale-enter-from {
  transform: scale(0.8);
  opacity: 0;
}
.scale-leave-to {
  transform: scale(1.2);
  opacity: 0;
}
</style>
