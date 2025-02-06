<template>

<dash-box>
    <label for="">TITLE</label><input type="text" v-model="title">
<label for="">DESCRIPTION</label><input type="text">
<label for="">LINK</label><input type="text">
<the-btn>submit</the-btn>
<p>{{ title }}</p>
</dash-box>

</template>
<script>
export default {
data () {
    return {
title:''    }
}
}
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