<template>
  <section>
    <h2>My friends</h2>
    <ul>
      <li>
        <friend-contact></friend-contact>
        <friend-contact></friend-contact>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      friends: [
        {
          id: "Manuel",
          name: "Manuel Lorenz",
          phone: "01234 5678 991",
          email: "manuel@localhost.com",
        },
        {
          id: "Julie",
          name: "Julie Jones",
          phone: "09877 543 221",
          email: "julie@localhost.com",
        },
      ],
    };
  },
  methods: {},
  computed: {},
};
</script>
