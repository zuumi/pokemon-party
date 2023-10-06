<template>
  <div>
    <select
      v-model="selectedPokemon"
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

    <div v-if="selectedPokemon" class="select__pokemon">
      <h2>{{ selectedPokemon.name }}</h2>
      <p><label>技１: </label> {{ selectedPokemon.waza[0][0] }}</p>
      <p><label>技２: </label> {{ selectedPokemon.waza[1][0] }}</p>
      <p><label>技３: </label> {{ selectedPokemon.waza[1][1] }}</p>
    </div>
  </div>
</template>

<script>
import pokemonData from '@/assets/json/pokemon_data.json'

export default {
  data() {
    return {
      pokemonList: Object.values(pokemonData['pokemon_data.json']),
      selectedPokemon: null,
    }
  },
  methods: {
    updateMoves() {
      const selectedPokemon = this.pokemonList.find(
        (pokemon) => pokemon.name === this.selectedPokemon
      )
      this.selectedPokemon = selectedPokemon
    },
  },
}
</script>
<style lang="scss">
.select__pokemon {
  border: 2px solid #ee7917;
}
div {
  text-align: left;
}
</style>
