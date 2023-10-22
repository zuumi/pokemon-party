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
    <div v-if="selectedPokemon">
      <h2>{{ selectedPokemon.name }}</h2>
      <div class="pokeimg">
        <pokemon-image :numbering="selectedPokemon.numbering"></pokemon-image>
      </div>
      <waza-patter
        :selected_1="selectedPokemon.waza[0]"
        :selected_A="selectedPokemon.waza[1]"
        :selected_B="selectedPokemon.waza[1]"
      ></waza-patter>
    </div>
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
      pokemon: {},
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
  border: 2px solid black;
  width: 400px;
  height: 670px;
  background-color: #fefbe5;
  color: #2e2b21;
}
.select__pokemon {
  border: 2px solid black;
  color: black;
  width: 250px;
  color: #2e2b21;
}
div {
  text-align: left;
  color: #2e2b21;
}
.pokeimg {
  margin: auto;
}
</style>
