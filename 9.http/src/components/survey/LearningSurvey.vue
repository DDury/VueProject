<template>
  <section>
    <base-card>
      <h2>How was you learning experience?</h2>
      <form @submit.prevent="submitSurvey">
        <div class="form-control">
          <label for="name">Your Name</label>
          <input type="text" id="name" name="name" v-model.trim="enteredName" />
        </div>
        <h3>My learning experience was ...</h3>
        <div class="form-control">
          <input
            type="radio"
            id="rating-poor"
            value="poor"
            name="rating"
            v-model="chosenRating"
          />
          <label for="rating-poor">Poor</label>
        </div>
        <div class="form-control">
          <input
            type="radio"
            id="rating-average"
            value="average"
            name="rating"
            v-model="chosenRating"
          />
          <label for="rating-average">Average</label>
        </div>
        <div class="form-control">
          <input
            type="radio"
            id="rating-great"
            value="great"
            name="rating"
            v-model="chosenRating"
          />
          <label for="rating-great">Great</label>
        </div>
        <p v-if="invalidInput">
          One or more input fields are invalid. Please check your provided data.
        </p>
        <div>
          <base-button>Submit</base-button>
        </div>
      </form>
    </base-card>
  </section>
</template>

<script setup>
import { ref, computed } from "vue";
import axios from "axios";

// 반응형 변수 선언
const enteredName = ref("");
const chosenRating = ref(null);
const invalidInput = ref(false);

const submitSurvey = async () => {
  if (enteredName.value === "" || !chosenRating.value) {
    invalidInput.value = true;
    return;
  }
  invalidInput.value = false;

  // this.$emit("survey-submit", {
  //   userName: this.enteredName,
  //   rating: this.chosenRating,
  // });
  await axios.post(
    "https://vue3-http-demo-fe1c0-default-rtdb.asia-southeast1.firebasedatabase.app/surveys.json",
    {
      userName: enteredName.value,
      rating: chosenRating.value,
    }
  );
  enteredName.value = "";
  chosenRating.value = null;
};
</script>

<style scoped>
.form-control {
  margin: 0.5rem 0;
}

input[type="text"] {
  display: block;
  width: 20rem;
  margin-top: 0.5rem;
}
</style>
