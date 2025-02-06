<template>
  <ul>
    <learning-resource
      v-for="res in storeResources"
      :key="res.id"
      :title="res.title"
      :description="res.description"
      :link="res.link"
    >
    </learning-resource>
  </ul>
</template>

<script>
import LearningResource from './LearningResource.vue';
export default {
  components: {
    LearningResource,
  },

  data() {
    return {
      storeResources: [
        {
          id: 'official-guide',
          title: 'official guide',
          description: 'The official Vue.js doc',
          link: 'https://vuejs.org',
        },
        {
          id: 'google',
          title: 'Google',
          description: 'Learn to google',
          link: 'https://google.com',
        },
      ],
    };
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin: auto;
  max-width: 40rem;
}
</style>
