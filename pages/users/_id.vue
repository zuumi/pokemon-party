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
  head() {
    return {
      title: 'ユーザーページ',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'これはユーザページ',
        },
      ],
    }
  },
  computed: {
    user() {
      return this.users.find((user) => user.id === Number(this.id))
    },
  },
}
</script>
