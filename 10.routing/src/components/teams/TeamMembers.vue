<template>
  <section>
    <h2>{{ teamName }}</h2>
    <ul>
      <user-item
        v-for="member in members"
        :key="member.id"
        :name="member.fullName"
        :role="member.role"
      ></user-item>
    </ul>
    <router-link to="/teams/t2">Team2</router-link>
  </section>
</template>

<script setup>
import UserItem from "../users/UserItem.vue";
import { ref, inject, watchEffect, defineProps } from "vue";
// import { useRoute } from "vue-router";

// const route = useRoute();

const props = defineProps(["teamId"]);
const teams = inject("teams");
const users = inject("users");

const teamName = ref("");
const members = ref([]);

watchEffect(() => {
  const selectedTeam = teams.value.find((team) => team.id === props.teamId);
  members.value = users.value.filter((user) =>
    selectedTeam.members.includes(user.id)
  );
  teamName.value = selectedTeam.name;
});
// onMounted(()=>{findMenbers(props.teamId)});

// watch(() => props.teamId, findMenbers);
</script>

<style scoped>
section {
  margin: 2rem auto;
  max-width: 40rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  border-radius: 12px;
}

h2 {
  margin: 0.5rem 0;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
  color: white;
  display: inline-block;
  padding: 0.5rem 1.5rem;
  background-color: #11005c;
}

a:hover,
a:active {
  background-color: #220a8d;
}
</style>
