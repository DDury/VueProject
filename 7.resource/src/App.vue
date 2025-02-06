<template>
  <TheHeader>Study Remember</TheHeader>

  <dash-box>
    <the-btn @click="changeAdd" :mode="changeMode.mode1">Add Resource</the-btn>
  <the-btn @click="changeStored" :mode="changeMode.mode2">Learning Resources</the-btn>
  </dash-box>
  
<component :is="selectTab"></component>
</template>

<script>
import TheHeader from './components/learning-resource/TheHeader.vue';
import StoreResources from './components/learning-resource/StoreResources.vue';
import AddResources from './components/learning-resource/AddResources.vue';

export default {
  components: {
    StoreResources,TheHeader, AddResources
  },
  data(){
    return{
      selectTab : 'Store-resources',
      mode1 : 'flat',
      mode2 : ''
    }
  }, methods : {
    changeStored(){
 this.selectTab='store-resources'
    },changeAdd(){
   this.selectTab = 'add-resources'
    }
  },computed :{
    changeMode (){
      if(this.selectTab==='store-resources') {
        return {mode1 : 'flat',mode2 :''}
        
      }
      else return {mode1:'', mode2:'flat'}
    }
  }
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