<template>
  <dash-box>
    <the-btn @click="changeAdd" :mode="changeMode.mode1">Add Resource</the-btn>
    <the-btn @click="changeStored" :mode="changeMode.mode2"
      >Learning Resources</the-btn
    >
  </dash-box>

  <component :is="selectTab"></component>
</template>

<script>
import StoreResources from './StoreResources.vue';
import AddResources from './AddResources.vue';

export default {
  components: {
    StoreResources,
    AddResources,
  },
  data() {
    return {
      selectTab: 'Store-resources',
      mode1: 'flat',
      mode2: 'flat',
    };
  },
  methods: {
    changeStored() {
      this.selectTab = 'store-resources';
    },
    changeAdd() {
      this.selectTab = 'add-resources';
    },
  },
  computed: {
    changeMode() {
      return {
        mode1: this.selectTab === 'add-resources' ? '' : 'flat', // 선택된 버튼은 기본 스타일 ('flat' 제거)
        mode2: this.selectTab === 'store-resources' ? '' : 'flat',
      };
    },
  },
};
</script>
