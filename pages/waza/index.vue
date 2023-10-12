<template>
  <div class="parent">
    <waza-patter :selected="waza1"></waza-patter>
    <waza-patter :selected="waza1"></waza-patter>
    <waza-patter :selected="waza1"></waza-patter>
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
      waza1: { waza1: ['カウンター', 'あくび'], wazaA: ['ドラゴンクロー'] },
      waza2: 'カウンター',
      waza3: 'カウンター',
    }
  },
})
</script>
