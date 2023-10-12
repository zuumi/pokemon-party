<template>
  <div class="parent">
    <waza-patter
      :selected_1="waza1"
      :selected_A="wazaA"
      :selected_B="wazaB"
    ></waza-patter>
    <waza-patter
      :selected_1="waza1"
      :selected_A="wazaA"
      :selected_B="wazaB"
    ></waza-patter>
    <waza-patter
      :selected_1="waza1"
      :selected_A="wazaA"
      :selected_B="wazaB"
    ></waza-patter>
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
      waza1: ['カウンター'],
      wazaA: ['ドラゴンクロー'],
      wazaB: ['ブラストバーン'],
    }
  },
})
</script>
