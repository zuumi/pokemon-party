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
                      v-model="selectedItemA"
                      class="select__waza"
                      style="color: cornsilk"
                    >
                      <option
                        v-for="wazaA in wazaAs"
                        :key="wazaA.No"
                        :value="wazaA"
                      >
                        {{ wazaA.わざ }}
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
                    <th>{{ selectedItemA.わざ }}</th>
                    <th>{{ selectedItemA.タイプ }}</th>
                    <th>{{ selectedItemA.威力 }}</th>
                    <th>{{ selectedItemA.PvPエネルギー充填 }}</th>
                    <th>{{ selectedItemA.ターン数 }}</th>
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
                      v-model="selectedItemB"
                      class="select__waza"
                      style="color: cornsilk"
                    >
                      <option
                        v-for="wazaB in wazaBs"
                        :key="wazaB.No"
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
                      v-model="selectedItemC"
                      class="select__waza"
                      style="color: cornsilk"
                    >
                      <option
                        v-for="wazaB in wazaBs"
                        :key="wazaB.No"
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
                    <th>{{ selectedItemC.わざ }}</th>
                    <th>{{ selectedItemC.タイプ }}</th>
                    <th>{{ selectedItemC.威力 }}</th>
                    <th>{{ selectedItemC.PvPエネルギー充填 }}</th>
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
import wazaAs from '@/assets/json/pokemon_data_waza_1.json'
import wazaBs from '@/assets/json/pokemon_data_waza_3.json'

export default {
  components: {
    draggable,
  },
  data() {
    return {
      wazaAs,
      wazaBs,
      selectedItemA: '　',
      selectedItemB: '　',
      selectedItemC: '　',
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
  methods: {
    touchstart: function (e) {
      console.log('touch start:%d,%d', e.offsetX, e.offsetY)
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
