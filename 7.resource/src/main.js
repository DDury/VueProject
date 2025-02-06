import { createApp } from 'vue';

import App from './App.vue';
import DashBox from './components/UI/DashBox.vue';
const app = createApp(App)

app.component('dash-box' , DashBox)
app.mount('#app');
