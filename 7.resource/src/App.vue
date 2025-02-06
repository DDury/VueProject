<template>
  <TheHeader></TheHeader>
  <ul>
<storeResources></storeResources>
  </ul>
</template>

<script>
import TheHeader from './components/learning-resource/TheHeader.vue';
import StoreResources from './components/learning-resource/StoreResources.vue';
export default {
  components: {
    StoreResources,TheHeader
  },
  
};
</script>

<style>
ul {
  list-style: none;
}</style>