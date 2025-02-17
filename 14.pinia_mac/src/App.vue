<template>
  <base-container title="Vuex" v-if="isAuth"> </base-container>
  <userAuth></userAuth>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import BaseContainer from './components/BaseContainer.vue'
import userAuth from './components/userAuth.vue'
import { userAuthen } from './stores/index.js'

const userinfo = userAuthen()
const { isAuth } = storeToRefs(userinfo)
</script>

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
