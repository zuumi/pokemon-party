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
