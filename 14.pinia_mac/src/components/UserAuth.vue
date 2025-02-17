<script setup>
import { userAuthen } from '@/stores/userauth'
import { storeToRefs } from 'pinia'

const userAuth = userAuthen()
const { isAuth } = storeToRefs(userAuth)
</script>

<template>
  <div>
    <button @click="userAuth.login">log-in</button>
    <button @click="userAuth.logout">log-out</button>
    <h3>{{ isAuth }}</h3>
  </div>
</template>
