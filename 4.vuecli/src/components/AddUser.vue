<template>
  <form
    @submit.prevent="
      this.$emit('create-user', this.id, this.name, this.phone, this.email)
    "
  >
    <div><label for="">Name</label><input type="text" v-model="name" /></div>
    <div><label for="">NickName</label><input type="text" v-model="id" /></div>
    <div><label for="">Phone</label><input type="text" v-model="phone" /></div>
    <div><label for="">E-mail</label><input type="text" v-model="email" /></div>
    <button>Submit</button>
  </form>
</template>

<script>
export default {
  data() {
    return { name: "", id: "", phone: "", email: "" };
  },
  methods: {
    // createUser() {
    //   this.$emit("create-user", this.id, this.name, this.phone, this.email);
    // },
  },
};
</script>
