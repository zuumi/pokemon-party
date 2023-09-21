<template>
  <div>
    <table border="3">
      <thead></thead>
      <tbody>
        <th>
          <tr>
            <label for="">ノーマル：</label>
            <select
              v-model="selectedItemA"
              class="select__waza"
              style="color: cornsilk"
            >
              <option v-for="wazaA in wazaAs" :key="wazaA.No" :value="wazaA">
                {{ wazaA.わざ }}
              </option>
            </select>
            <table border="1">
              <thead>
                <tr>
                  <th>わざ名</th>
                  <th>タイプ</th>
                  <th>充填エネルギー</th>
                  <th>ターン数</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>{{ selectedItemA.わざ }}</th>
                  <th>{{ selectedItemA.タイプ }}</th>
                  <th>{{ selectedItemA.PvPエネルギー充填 }}</th>
                  <th>{{ selectedItemA.ターン数 }}</th>
                </tr>
              </tbody>
            </table>
          </tr>
          <tr>
            <label for="">スペシャルA：</label>
            <select
              v-model="selectedItemB"
              class="select__waza"
              style="color: cornsilk"
            >
              <option v-for="wazaB in wazaBs" :key="wazaB.No" :value="wazaB">
                {{ wazaB.わざ }}
              </option>
            </select>
            <table border="2">
              <thead>
                <tr>
                  <th>わざ名</th>
                  <th>タイプ</th>
                  <th>必要エネルギー</th>
                  <th>発動周期</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>{{ selectedItemB.わざ }}</th>
                  <th>{{ selectedItemB.タイプ }}</th>
                  <th>{{ selectedItemB.PvPエネルギー充填 }}</th>
                  <th>{{ enecycleA }}</th>
                </tr>
              </tbody>
            </table>
          </tr>
          <tr>
            <label for="">スペシャルB：</label>
            <select
              v-model="selectedItemC"
              class="select__waza"
              style="color: cornsilk"
            >
              <option v-for="wazaB in wazaBs" :key="wazaB.No" :value="wazaB">
                {{ wazaB.わざ }}
              </option>
            </select>
            <table border="2">
              <thead>
                <tr>
                  <th>わざ名</th>
                  <th>タイプ</th>
                  <th>必要エネルギー</th>
                  <th>発動周期</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>{{ selectedItemC.わざ }}</th>
                  <th>{{ selectedItemC.タイプ }}</th>
                  <th>{{ selectedItemC.PvPエネルギー充填 }}</th>
                  <th>{{ enecycleB }}</th>
                </tr>
              </tbody>
            </table>
          </tr>
        </th>
      </tbody>
    </table>
  </div>
</template>

<script>
import wazaAs from '@/assets/json/PokemonGO-waza-1.json'
import wazaBs from '@/assets/json/PokemonGO-waza-3.json'

export default {
  data() {
    return {
      wazaAs,
      wazaBs,
      selectedItemA: '',
      selectedItemB: '',
      selectedItemC: '',
    }
  },
  computed: {
    enecycleA: function () {
      return (
        Math.ceil(
          this.selectedItemB.PvPエネルギー充填 /
            this.selectedItemA.PvPエネルギー充填
        ) +
        '-' +
        Math.ceil(
          (this.selectedItemB.PvPエネルギー充填 -
            (this.selectedItemB.PvPエネルギー充填 %
              this.selectedItemA.PvPエネルギー充填)) /
            this.selectedItemA.PvPエネルギー充填
        ) +
        '-' +
        Math.ceil(
          (this.selectedItemB.PvPエネルギー充填 -
            ((this.selectedItemB.PvPエネルギー充填 -
              (this.selectedItemB.PvPエネルギー充填 %
                this.selectedItemA.PvPエネルギー充填)) %
              this.selectedItemA.PvPエネルギー充填)) /
            this.selectedItemA.PvPエネルギー充填
        )
      )
    },
    enecycleB: function () {
      return (
        Math.ceil(
          this.selectedItemC.PvPエネルギー充填 /
            this.selectedItemA.PvPエネルギー充填
        ) +
        '-' +
        Math.ceil(
          (this.selectedItemC.PvPエネルギー充填 -
            (this.selectedItemC.PvPエネルギー充填 %
              this.selectedItemA.PvPエネルギー充填)) /
            this.selectedItemA.PvPエネルギー充填
        ) +
        '-' +
        Math.ceil(
          (this.selectedItemC.PvPエネルギー充填 -
            ((this.selectedItemC.PvPエネルギー充填 -
              (this.selectedItemC.PvPエネルギー充填 %
                this.selectedItemA.PvPエネルギー充填)) %
              this.selectedItemA.PvPエネルギー充填)) /
            this.selectedItemA.PvPエネルギー充填
        )
      )
    },
  },
}
</script>
<style lang="scss">
.select__waza {
  border: 2px solid #ee7917;
}
div {
  text-align: left;
}
</style>
