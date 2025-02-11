<template>
  <div>
    <button @click="mainpage">confirm</button>
    <router-link to="/teams">Teams</router-link>
    <ul>
      <user-item
        v-for="user in users"
        :key="user.id"
        :name="user.fullName"
        :role="user.role"
      ></user-item>
    </ul>
  </div>
</template>

<script setup>
import UserItem from "./UserItem.vue";
import { inject } from "vue";
import { useRouter } from "vue-router";

const users = inject("users");
const router = useRouter();
const mainpage = () => {
  router.push("/teams");
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>
