<template>
  <li>
    <h2>{{ name }}{{ addfavor }}</h2>
    <button @click="toggleDetails">
      {{ detailsVisible ? "Hide " : "Show " }}Detail
    </button>
    <button @click="$emit('addFavor', this.id)">favor-add</button>
    <button @click="$emit('del-user', this.id)">Delete</button>
    <ul v-if="detailsVisible">
      <li><strong>Phone:</strong>{{ phone }}</li>
      <li><strong>Email:</strong>{{ email }}</li>
    </ul>
  </li>
</template>

<script>
export default {
  props: ["id", "name", "phone", "email", "favor"],
  emits: ["addfavor", "del-user"],

  data() {
    return {
      detailsVisible: false,
      //   favorFriend: this.favor,
    };
  },
  methods: {
    toggleDetails() {
      this.detailsVisible = !this.detailsVisible;
    },
    // favorAdd() {
    //   this.$emit("addFavor", this.id);
    // },
    // delUser() {
    //   this.$emit("del-user", this.id);
    // },
  },
  computed: {
    addfavor() {
      if (this.favor) {
        return "  <added>";
      } else return "...";
    },
  },
};
</script>
