<template>
  <div class="parent">
    <waza-patter :selected1="waza1"></waza-patter>
    <waza-patter :selected1="waza2"></waza-patter>
    <waza-patter :selected1="waza3"></waza-patter>
  </div>
</template>

<script>
import Vue from 'vue'
import wazaPatter from '~/components/wazaPatter.vue'

export default Vue.extend({
  components: {
    wazaPatter,
  },
  data() {
    return {
      waza1: { waza: ['カウンター', 'あくび'] },
      waza2: 'カウンター',
      waza3: 'カウンター',
    }
  },
})
</script>
