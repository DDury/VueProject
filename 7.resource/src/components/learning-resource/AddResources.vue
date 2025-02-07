<template>
  <dash-box>
    <label for="title">TITLE</label
    ><input name="title" type="text" v-model="title" />
    <label for="description">DESCRIPTION</label
    ><textarea
      name="description"
      type="text"
      rows="3"
      v-model="description"
    ></textarea>
    <label for="link">LINK</label
    ><input name="link" type="text" v-model="link" />
    <the-btn @click="TheContents">submit</the-btn>
    <p>{{ title }}</p>
  </dash-box>
</template>
<script>
export default {
  inject: ['AddConts'],
  data() {
    return {
      title: '',
      description: '',
      link: '',
    };
  },
  methods: {
    TheContents() {
      this.AddConts(this.title, this.description, this.link);
    },
  },
};
</script>
<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
  padding: 0.2rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.3rem;
  margin-bottom: 0.5rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>
