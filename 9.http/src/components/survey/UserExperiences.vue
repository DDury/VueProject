<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="loadExp">Load Submitted Experiences</base-button>
      </div>
      <ul>
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

import { ref } from "vue";
const results = ref([]);

const loadExp = async () => {
  const { data: rowData } = await axios.get(
    "https://vue3-http-demo-fe1c0-default-rtdb.asia-southeast1.firebasedatabase.app/surveys.json"
  );
  const loadedResults = [];
  for (const id in rowData) {
    loadedResults.push({
      id: id,
      name: rowData[id].userName,
      rating: rowData[id].rating,
    });
  }
  results.value = loadedResults;
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
