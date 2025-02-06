<template>
  <TheHeader>Study Remember</TheHeader>
  
<storeResources></storeResources>
  
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
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}
</style>