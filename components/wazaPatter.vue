<template>
  <div>
    <div class="p-waza">
      <table>
        <thead>
          <tr>
            <th class="p-waza -name">わざ名</th>
            <th class="p-waza -type">タイプ</th>
            <th class="p-waza -damage">威力</th>
            <th class="p-waza -ene">Ene</th>
            <th class="p-waza -tern">ターン数</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th class="p-waza -name">{{ selectedItem1.わざ }}</th>
            <th class="p-waza -type">{{ selectedItem1.タイプ }}</th>
            <th class="p-waza -damage">{{ selectedItem1.威力 }}</th>
            <th class="p-waza -ene">{{ selectedItem1.PvPエネルギー充填 }}</th>
            <th class="p-waza -tern">{{ selectedItem1.ターン数 }}</th>
          </tr>
        </tbody>
      </table>
      <table>
        <thead>
          <tr>
            <th class="p-waza -name">わざ名</th>
            <th class="p-waza -type">タイプ</th>
            <th class="p-waza -damage">威力</th>
            <th class="p-waza -ene">Ene</th>
            <th class="p-waza -tern">発動周期</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th class="p-waza -name">{{ selectedItemA.わざ }}</th>
            <th class="p-waza -type">{{ selectedItemA.タイプ }}</th>
            <th class="p-waza -damage">{{ selectedItemA.威力 }}</th>
            <th class="p-waza -ene">{{ selectedItemA.PvPエネルギー充填 }}</th>
            <th class="p-waza -tern">{{ enecycleA }}</th>
          </tr>
        </tbody>
      </table>
      <table>
        <thead>
          <tr>
            <th class="p-waza -name">わざ名</th>
            <th class="p-waza -type">タイプ</th>
            <th class="p-waza -damage">威力</th>
            <th class="p-waza -ene">Ene</th>
            <th class="p-waza -tern">発動周期</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th class="p-waza -name">{{ selectedItemB.わざ }}</th>
            <th class="p-waza -type">{{ selectedItemB.タイプ }}</th>
            <th class="p-waza -damage">{{ selectedItemB.威力 }}</th>
            <th class="p-waza -ene">{{ selectedItemB.PvPエネルギー充填 }}</th>
            <th class="p-waza -tern">{{ enecycleB }}</th>
          </tr>
        </tbody>
      </table>
    </div>
    <dl>
      <dt>
        <label for="">ノーマル</label>
      </dt>
      <dd>
        <select
          v-model="selected1"
          class="select__waza"
          style="color: cornsilk"
          @change="setWaza1"
        >
          <option
            v-for="waza1 in selected_1"
            :key="waza1"
            class="c-text"
            :value="waza1"
          >
            {{ waza1 }}
          </option>
        </select>
      </dd>
      <dt>
        <label for="">スペシャルA</label>
      </dt>
      <dd>
        <select
          v-model="selectedA"
          class="select__waza"
          style="color: cornsilk"
          @change="setWazaA"
        >
          <option
            v-for="wazaA in selected_A"
            :key="wazaA"
            class="c-text"
            :value="wazaA"
          >
            {{ wazaA }}
          </option>
        </select>
      </dd>
      <dt>
        <label for="">スペシャルB</label>
      </dt>
      <dd>
        <select
          v-model="selectedB"
          class="select__waza"
          style="color: cornsilk"
          @change="setWazaB"
        >
          <option
            v-for="wazaB in selected_B"
            :key="wazaB"
            class="c-text"
            :value="wazaB"
          >
            {{ wazaB }}
          </option>
        </select>
      </dd>
    </dl>
  </div>
</template>

<script>
import waza1s from '@/assets/json/pokemon_data_waza_1.json'
import wazaABs from '@/assets/json/pokemon_data_waza_3.json'

export default {
  props: ['selected_1', 'selected_A', 'selected_B'],
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
      enecycleA: '',
      enecycleB: '',
    }
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
      this.enecycleA =
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
    },
    setWazaB() {
      const selecteditemB = this.wazaABs.find(
        (wazaB) => wazaB.わざ === this.selectedB
      )
      this.selectedItemB = selecteditemB
      this.enecycleB =
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
    },
  },
}
</script>
<style lang="scss">
.p-waza {
  margin-top: 2px;
  margin-bottom: 2px;
}
.p-waza {
  &.-name {
    width: 37%;
  }
  &.-type {
    width: 23%;
  }
  &.-damage {
    width: 10%;
  }
  &.-ene {
    width: 10%;
  }
  &.-tern {
    width: 20%;
  }
}
table {
  border: 1px black;
  // border-collapse:  collapse; /* セルの線を重ねる */
  margin: 1px 1px 1px 1px;
  width: 98%;
}
thead tr th {
  background-color: #dadada;
  border-right: 1px black;
}
tbody tr th {
  background-color: #ebe9e9;
  border-left: 1px balck;
}
td {
  padding: 5px 5px; /* 余白指定 */
}
.c-text {
  color: black;
}
.select__waza {
  color: black;
  border: 1px solid #dadada;
}
div {
  text-align: left;
  @media screen and (max-width: 480px) {
    background-size: cover;
  }
}
select {
  width: 200px;
  margin-top: 6px;
}
label {
  width: 200px;
}
table {
  width: 100%;
}
tr {
  height: 32px;
}
</style>
