<template>
  <div class="parent">
    <waza-patter></waza-patter>
    <waza-patter></waza-patter>
    <waza-patter></waza-patter>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import wazaPatter from '~/components/wazaPatter.vue'

export default Vue.extend({
  components: {
    wazaPatter,
  },
})
</script>
