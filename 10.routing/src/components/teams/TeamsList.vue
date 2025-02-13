<template>
  <div>
    <router-view></router-view>
    <ul>
      <teams-item
        v-for="team in teams"
        :key="team.id"
        :id="team.id"
        :name="team.name"
        :member-count="team.members.length"
      ></teams-item>
    </ul>
    <button @click="saveData">save data</button>
  </div>
</template>

<script setup>
import TeamsItem from "./TeamsItem.vue";
import { ref, inject } from "vue";
import { onBeforeRouteLeave } from "vue-router";

const saved = ref(false);
const teams = inject("teams");
const saveData = () => {
  saved.value = true;
};
onBeforeRouteLeave(() => {
  if (!saved.value && !window.confirm("sure to leave? data not saved!"))
    return false;
});
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 40rem;
  padding: 0;
}
</style>
