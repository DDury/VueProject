import { createApp } from "vue";
import App from "./app.vue";
import FriendContact from "./components/FriendContact.vue";
import AddUser3 from "./components/AddUser3.vue";

const app = createApp(App);

app.component("friend-contact", FriendContact);
app.component("add-user", AddUser3);
app.mount("#app");
