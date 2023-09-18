<template>
  <div>
    <h1>{{ $route.params.article }}</h1>
    <h2>カテゴリー</h2>
    <h3>count: {{ $store.state.count.count }}</h3>
    <button @click="addCount">ADD</button>
  </div>
</template>
<script>
export default {
  methods: {
    addCount() {
      this.$store.dispatch('count/increment')
    },
  },
}
</script>
