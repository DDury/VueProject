<template>
  <dash-box>
    <the-btn @click="changeAdd" :mode="changeMode.mode1">Add Resource</the-btn>
    <the-btn @click="changeStored" :mode="changeMode.mode2"
      >Learning Resources</the-btn
    >
  </dash-box>
  <keep-alive>
    <component :is="selectTab"></component>
  </keep-alive>
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
  provide() {
    return {
      AddConts: this.AddContents,
      StoredRcs: this.storeResources,
      DelConts: this.DelContents,
    };
  },

  methods: {
    AddContents(a, b, c) {
      const NewInput = {
        id: new Date().toISOString(),
        title: a,
        description: b,
        link: c,
      };
      this.storeResources.push(NewInput);
      this.selectTab = 'store-resources';
    },
    DelContents(title) {
      const idx = this.storeResources.findIndex((idx) => idx.title == title);
      this.storeResources.splice(idx, 1);
    },
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
