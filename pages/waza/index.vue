<template>
  <div>
    <select v-model="selectedItem" style="color: cornsilk">
      <option v-for="waza in wazas" :key="waza.No" :value="waza">
        {{ waza.わざ }}
      </option>
    </select>
    <table>
      <thead>
        <tr>
          <th>わざ名</th>
          <th>タイプ</th>
          <th>充填エネルギー</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>{{ selectedItem.わざ }}</th>
          <th>{{ selectedItem.タイプ }}</th>
          <th>{{ selectedItem.PvPエネルギー充填 }}</th>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import wazas from '@/assets/json/PokemonGO-waza-1.json'

export default {
  data() {
    return {
      wazas,
      selectedItem: 1,
    }
  },
}
</script>
