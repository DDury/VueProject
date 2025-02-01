<template>
  <li>
    <h2>{{ name }}{{ favor === 1 ? "|Good" : "|Great" }}</h2>
    <button @click="toggleDetails">
      {{ detailsVisible ? "Hide " : "Show " }}Detail
    </button>
    <ul v-if="detailsVisible">
      <li><strong>Phone:</strong>{{ phone }}</li>
      <li><strong>Email:</strong>{{ email }}</li>
    </ul>
  </li>
</template>

<script>
export default {
  props: ["name", "phone", "email", "favor"],

  data() {
    return {
      detailsVisible: false,
      favorFriend: this.favor,
    };
  },
  methods: {
    toggleDetails() {
      this.detailsVisible = !this.detailsVisible;
    },
  },
};
</script>
