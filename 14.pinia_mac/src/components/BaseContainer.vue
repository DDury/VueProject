<template>
  <section>
    <h2>{{ title }}</h2>
    <h3>{{ count }}</h3>
    <button @click="counter.increment(5)">[+]</button>
    <button @click="counter.decrement(5)">[-]</button>
    <button @click="counter.plus5">[+5]</button>
    <h3>{{ doubleCount }}</h3>
    <h3>{{ ddbleCount }}</h3>
    <slot></slot>
  </section>
</template>

<script setup>
import { defineProps } from 'vue'
import { useCounterStore } from '@/stores/counter'
import { storeToRefs } from 'pinia'

defineProps(['title'])
const counter = useCounterStore()
const { count, doubleCount, ddbleCount } = storeToRefs(counter)
</script>

<style scoped>
section {
  max-width: 30rem;
  margin: 2rem auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
}

h2 {
  text-align: center;
}
</style>
