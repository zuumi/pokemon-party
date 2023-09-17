<template>
  <h1>ユーザID： {{ user.name }}</h1>
</template>
<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      users: [
        {
          id: 1,
          name: 'John Doe',
        },
        {
          id: 2,
          name: 'Yoshiki Kawazumi',
        },
        {
          id: 3,
          name: 'Hitomi Kawazumi',
        },
      ],
    }
  },
  computed: {
    user() {
      return this.users.find((user) => user.id === this.id)
    },
  },
  created() {
    console.log(this.$route)
  },
}
</script>
