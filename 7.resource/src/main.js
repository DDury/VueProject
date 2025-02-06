import { createApp } from 'vue';

import App from './App.vue';
import DashBox from './components/UI/DashBox.vue';
import TheBtn from './components/UI/TheBtn.vue';
const app = createApp(App);

app.component('dash-box', DashBox);
app.component('the-btn', TheBtn);
app.mount('#app');
