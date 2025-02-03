<template>
  <form @submit.prevent="$emit('submit')">
    <div><label>Name</label><input type="text" v-model="user.name" /></div>
    <div><label>NickName</label><input type="text" v-model="user.id" /></div>
    <div><label>Phone</label><input type="text" v-model="user.phone" /></div>
    <div><label>E-mail</label><input type="text" v-model="user.email" /></div>
    <button type="submit">Submit</button>
  </form>
</template>

<script>
export default {
  props: {
    modelValue: Object,
  },
  computed: {
    user: {
      get() {
        return this.modelValue;
      },
      set(value) {
        this.$emit("update:modelValue", value);
      },
    },
  },
};
</script>
