<template>
  <div class="select">
    <p>
      <label>ポケモン：</label>
      <select
        v-model="selectedPokemon"
        placeholder="ポケモンの名前を入力してください"
        class="select__pokemon"
        @change="updateMoves"
      >
        <option
          v-for="pokemon in pokemonList"
          :key="pokemon.name"
          :value="pokemon.name"
        >
          {{ pokemon.name }}
        </option>
      </select>
    </p>
    <div>
      <input
        v-model="searchTerm"
        class="select__pokemon"
        type="text"
        placeholder="ポケモンの名前を入力してください"
      />
      <ul v-if="searchResults.length > 0">
        <li v-for="(pokemon, index) in searchResults" :key="index">
          {{ pokemon.name }}
        </li>
      </ul>
      <p v-else>該当するポケモンは見つかりませんでした。</p>
    </div>
    <table>
      <thead>
        <tr>
          <th>わざ選択</th>
          <th>周期</th>
        </tr>
      </thead>
      <tr>
        <th>
          <div v-if="selectedPokemon">
            <h2>{{ selectedPokemon.name }}</h2>
            <p>
              <label>技1: </label>
              <select
                v-model="selectedWaza1"
                class="select__pokemon"
                @change="setWaza1"
              >
                <option
                  v-for="waza in selectedPokemon.waza[0]"
                  :key="waza"
                  :value="waza"
                >
                  {{ waza }}
                </option>
              </select>
            </p>
            <h2 v-if="selectedWaza1">{{ selectedWaza1.わざ }}</h2>
          </div>
        </th>
        <th>
          <div></div>
        </th>
      </tr>
      <tr>
        <th>
          <div v-if="selectedPokemon">
            <p>
              <label>技A: </label>
              <select
                v-model="selectedWazaA"
                class="select__pokemon"
                @change="setWazaA"
              >
                <option
                  v-for="wazaA in selectedPokemon.waza[1]"
                  :key="wazaA"
                  :value="wazaA"
                >
                  {{ wazaA }}
                </option>
              </select>
            </p>
            <h2 v-if="selectedWazaA">{{ selectedWazaA.わざ }}</h2>
          </div>
        </th>
        <th>
          <div>{{ cycleA }}</div>
        </th>
      </tr>
      <tr>
        <th>
          <div v-if="selectedPokemon">
            <p>
              <label>技B: </label>
              <select
                v-model="selectedWazaB"
                class="select__pokemon"
                @change="setWazaB"
              >
                <option
                  v-for="wazaB in selectedPokemon.waza[1]"
                  :key="wazaB"
                  :value="wazaB"
                >
                  {{ wazaB }}
                </option>
              </select>
            </p>
            <h2 v-if="selectedWazaB">{{ selectedWazaB.わざ }}</h2>
          </div>
        </th>
      </tr>
    </table>
  </div>
</template>

<script>
import pokemonData from '@/assets/json/pokemon_data.json'
import waza1Data from '@/assets/json/pokemon_data_waza_1.json'
import wazaABData from '@/assets/json/pokemon_data_waza_3.json'

export default {
  data() {
    return {
      searchTerm: '',
      pokemonList: Object.entries(pokemonData['pokemon_data.json']).map(
        ([, value]) => value
      ),
      waza1List: Object.values(waza1Data),
      wazaABList: Object.values(wazaABData),
      selectedPokemon: null,
      selectedWaza1: null,
      selectedWazaA: null,
      selectedWazaB: null,
    }
  },
  computed: {
    searchResults() {
      if (this.searchTerm === '') {
        return []
      }
      const searchTermLower = this.searchTerm.toLowerCase()
      return this.pokemonList.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(searchTermLower)
      )
    },
  },
  methods: {
    updateMoves() {
      const selectedPokemon = this.pokemonList.find(
        (pokemon) => pokemon.name === this.selectedPokemon
      )
      this.selectedPokemon = selectedPokemon
    },
    setWaza1() {
      const selectedWaza1 = this.waza1List.find(
        (waza1) => waza1.わざ === this.selectedWaza1
      )
      this.selectedWaza1 = selectedWaza1
    },
    setWazaA() {
      const selectedWazaA = this.wazaABList.find(
        (wazaA) => wazaA.わざ === this.selectedWazaA
      )
      this.selectedWazaA = selectedWazaA
    },
    setWazaB() {
      const selectedWazaB = this.wazaABList.find(
        (wazaB) => wazaB.わざ === this.selectedWazaB
      )
      this.selectedWazaB = selectedWazaB
    },
  },
}
</script>
<style lang="scss">
.select {
  border: 2px solid #ee7917;
}
.select__pokemon {
  border: 2px solid #ee7917;
  color: white;
  background-color: #333;
  width: 250px;
}
div {
  text-align: left;
}
</style>
