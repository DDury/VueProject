<template>
  <div>
    <ul>
      <li>
        <button type="button" @click="active('great')">Great</button>
      </li>
      <li>
        <button type="button" @click="active('normal')">Normal</button>
      </li>
      <li><button type="button" @click="active('bad')">Bad</button></li>
    </ul>
    <h1>{{ modelValue }}</h1>
  </div>
</template>

<script>
export default {
  props: ["modelValue"],
  emits: ["update:modelValue"],

  methods: {
    active(opt) {
      this.$emit("update:modelValue", opt);
      console.log("children : " + this.modelValue);
    },
  },
  //   watch: {
  //     modelValue(newValue) {
  //       console.log(newValue);
  //     },
  //   },
};
</script>

<style scoped></style>
