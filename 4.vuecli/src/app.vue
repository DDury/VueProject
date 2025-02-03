<template>
  <header>
    <h2>My friends</h2>
  </header>
  <add-user v-model="newUser" @submit="addUser"></add-user>
  <section>
    <ul>
      <friend-contact
        v-for="friend in friends"
        :id="friend.id"
        :key="friend.id"
        :name="friend.name"
        :phone="friend.phone"
        :email="friend.email"
        :favor="friend.favor"
        @addFavor="addfavor"
        @del-user="delUser"
      ></friend-contact>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      newUser: {
        id: "",
        name: "",
        phone: "",
        email: "",
      },
      friends: [
        {
          id: "Manuel",
          name: "Manuel Lorenz",
          phone: "01234 5678 991",
          email: "manuel@localhost.com",
          favor: true,
        },
        {
          id: "Julie",
          name: "Julie Jones",
          phone: "09877 543 221",
          email: "julie@localhost.com",
          favor: false,
        },
      ],
    };
  },
  methods: {
    addfavor(id) {
      const zzim = this.friends.find((friend) => friend.id === id);
      zzim.favor = !zzim.favor;
    },
    // addUser(id, name, phone, email) {
    //   const newvi = {
    //     id: id,
    //     name: name,
    //     phone: phone,
    //     email: email,
    //     favor: false,
    //   };
    //   this.friends.push(newvi);
    // },
    addUser() {
      if (!this.newUser.name) {
        return;
      }
      const newvi = { ...this.newUser, favor: false };
      this.friends.push(newvi);
      this.newUser = { id: "", name: "", phone: "", email: "" };
    },
    delUser(id) {
      this.friends = this.friends.filter((friend) => friend.id !== id);
    },
  },
  computed: {},
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: "Jost", sans-serif;
}

body {
  margin: 0;
}

header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  background-color: #58004d;
  color: white;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app header h2 {
  color: white;
}

#app ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

#app li,
#app form {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app h2 {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  color: #58004d;
  margin: 0 0 1rem 0;
}

#app button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #ff0077;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}

#app button:hover,
#app button:active {
  background-color: #ec3169;
  border-color: #ec3169;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}
#app input {
  font: inherit;
  padding: 0.15rem;
}
#app label {
  font-weight: bold;
  margin-right: 1rem;
  width: 7rem;
  display: inline-block;
}
#app form div {
  margin: 1rem 0;
}
</style>
