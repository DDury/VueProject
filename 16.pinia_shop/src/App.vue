<script setup>
import { RouterView } from 'vue-router'
import TheHeader from './components/nav/TheHeader.vue'
import { useAuthenStore } from './stores'
import { storeToRefs } from 'pinia'

const authenStore = useAuthenStore()
const { isLoggedIn } = storeToRefs(authenStore)
</script>

<template>
  <the-header></the-header>
  <RouterView v-if="isLoggedIn" />
</template>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
