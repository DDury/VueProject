<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="loadExp">Load Submitted Experiences</base-button>
      </div>
      <p v-if="isLoading">Loading...</p>
      <p v-else-if="!isLoading && (!results || results.length === 0)">
        No Data
      </p>
      <ul v-else-if="!isLoading && results && results.length > 0">
        <survey-result
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        ></survey-result>
      </ul>
    </base-card>
  </section>
</template>

<script setup>
import SurveyResult from "./SurveyResult.vue";
import axios from "axios";

import { ref, onMounted } from "vue";
const results = ref([]);
const isLoading = ref(false);

const loadExp = async () => {
  isLoading.value = true;
  const { data } = await axios.get(
    "https://vue3-http-demo-fe1c0-default-rtdb.asia-southeast1.firebasedatabase.app/surveys.json"
  );
  isLoading.value = false;
  results.value = Object.entries(data).map(([id, value]) => ({
    id: id,
    name: value.userName,
    rating: value.rating,
  }));
};
onMounted(loadExp);
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
