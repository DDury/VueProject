<template><DashBox>
  <li>
    <div>
      <header>
        <h3>{{ title }}</h3>
        <button>Delete</button>
      </header>
    </div>
    <p>{{ description }}</p>
    <nav>
      <a :href="link">View Resource</a>
    </nav>
  </li></DashBox>
</template>

<script>
import DashBox from './DashBox.vue';
export default {
  props: ['title', 'description', 'link'],
};
</script>

<style scoped></style>