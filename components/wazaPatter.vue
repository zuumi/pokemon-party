<template>
  <div>
    <table border="3">
      <thead></thead>
      <tbody>
        <th>
          <tr>
            <draggable>
              <table border="1">
                <thead>
                  <tr>
                    <label for=""> ノーマル：</label>
                    <select
                      v-model="selected1"
                      class="select__waza"
                      style="color: cornsilk"
                      @change="setWaza1"
                    >
                      <option
                        v-for="waza1 in selected.waza1"
                        :key="waza1"
                        :value="waza1"
                      >
                        {{ waza1 }}
                      </option>
                    </select>
                  </tr>
                  <tr>
                    <th>わざ名</th>
                    <th>タイプ</th>
                    <th>威力</th>
                    <th>充填エネルギー</th>
                    <th>ターン数</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>{{ selectedItem1.わざ }}</th>
                    <th>{{ selectedItem1.タイプ }}</th>
                    <th>{{ selectedItem1.威力 }}</th>
                    <th>{{ selectedItem1.PvPエネルギー充填 }}</th>
                    <th>{{ selectedItem1.ターン数 }}</th>
                  </tr>
                </tbody>
              </table>
            </draggable>
          </tr>
          <tr>
            <draggable>
              <table border="2">
                <thead>
                  <tr>
                    <label for="">スペシャルA：</label>
                    <select
                      v-model="selectedA"
                      class="select__waza"
                      style="color: cornsilk"
                      @change="setWazaA"
                    >
                      <option
                        v-for="wazaA in selected.wazaA"
                        :key="wazaA"
                        :value="wazaA"
                      >
                        {{ wazaA }}
                      </option>
                    </select>
                  </tr>
                  <tr>
                    <th>わざ名</th>
                    <th>タイプ</th>
                    <th>威力</th>
                    <th>必要エネルギー</th>
                    <th>発動周期</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>{{ selectedItemA.わざ }}</th>
                    <th>{{ selectedItemA.タイプ }}</th>
                    <th>{{ selectedItemA.威力 }}</th>
                    <th>{{ selectedItemA.PvPエネルギー充填 }}</th>
                    <th>{{ enecycleA }}</th>
                  </tr>
                </tbody>
              </table>
            </draggable>
          </tr>
          <tr>
            <draggable>
              <table border="2">
                <thead>
                  <tr>
                    <label for="">スペシャルB：</label>
                    <select
                      v-model="selectedItemB"
                      class="select__waza"
                      style="color: cornsilk"
                    >
                      <option
                        v-for="wazaB in wazaABs"
                        :key="wazaB"
                        :value="wazaB"
                      >
                        {{ wazaB.わざ }}
                      </option>
                    </select>
                  </tr>
                  <tr>
                    <th>わざ名</th>
                    <th>タイプ</th>
                    <th>威力</th>
                    <th>必要エネルギー</th>
                    <th>発動周期</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>{{ selectedItemB.わざ }}</th>
                    <th>{{ selectedItemB.タイプ }}</th>
                    <th>{{ selectedItemB.威力 }}</th>
                    <th>{{ selectedItemB.PvPエネルギー充填 }}</th>
                    <th>{{ enecycleB }}</th>
                  </tr>
                </tbody>
              </table>
            </draggable>
          </tr>
        </th>
      </tbody>
    </table>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
import waza1s from '@/assets/json/pokemon_data_waza_1.json'
import wazaABs from '@/assets/json/pokemon_data_waza_3.json'

export default {
  components: {
    draggable,
  },
  props: ['selected'],
  data() {
    return {
      waza1s,
      wazaABs,
      selectedItem1: '　',
      selectedItemA: '　',
      selectedItemB: '　',
      selected1: '　',
      selectedA: '　',
      selectedB: '　',
    }
  },
  computed: {
    enecycleA: function () {
      return (
        Math.ceil(
          this.selectedItemA.PvPエネルギー充填 /
            this.selectedItem1.PvPエネルギー充填
        ) +
        '-' +
        (Math.ceil(
          (this.selectedItemA.PvPエネルギー充填 * 2) /
            this.selectedItem1.PvPエネルギー充填
        ) -
          Math.ceil(
            this.selectedItemA.PvPエネルギー充填 /
              this.selectedItem1.PvPエネルギー充填
          )) +
        '-' +
        (Math.ceil(
          (this.selectedItemA.PvPエネルギー充填 * 3) /
            this.selectedItem1.PvPエネルギー充填
        ) -
          Math.ceil(
            (this.selectedItemA.PvPエネルギー充填 * 2) /
              this.selectedItem1.PvPエネルギー充填
          ))
      )
    },
    enecycleB: function () {
      return (
        Math.ceil(
          this.selectedItemB.PvPエネルギー充填 /
            this.selectedItem1.PvPエネルギー充填
        ) +
        '-' +
        (Math.ceil(
          (this.selectedItemB.PvPエネルギー充填 * 2) /
            this.selectedItem1.PvPエネルギー充填
        ) -
          Math.ceil(
            this.selectedItemB.PvPエネルギー充填 /
              this.selectedItem1.PvPエネルギー充填
          )) +
        '-' +
        (Math.ceil(
          (this.selectedItemB.PvPエネルギー充填 * 3) /
            this.selectedItem1.PvPエネルギー充填
        ) -
          Math.ceil(
            (this.selectedItemB.PvPエネルギー充填 * 2) /
              this.selectedItem1.PvPエネルギー充填
          ))
      )
    },
  },
  methods: {
    touchstart: function (e) {
      console.log('touch start:%d,%d', e.offsetX, e.offsetY)
    },
    setWaza1() {
      const selecteditem1 = this.waza1s.find(
        (waza1) => waza1.わざ === this.selected1
      )
      this.selectedItem1 = selecteditem1
    },
    setWazaA() {
      const selecteditemA = this.wazaABs.find(
        (wazaA) => wazaA.わざ === this.selectedA
      )
      this.selectedItemA = selecteditemA
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
