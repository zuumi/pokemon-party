<template>
  <div>
    <h1>{{ pokemon.name }}</h1>
    <img
      v-if="pokemon.sprites && pokemon.sprites.front_default"
      :src="pokemon.sprites.front_default"
      alt="pokemon image"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      pokemon: {},
    }
  },
  created() {
    fetch('https://pokeapi.co/api/v2/pokemon/1000')
      .then((response) => response.json())
      .then((data) => {
        this.pokemon = data
      })
  },
}
</script>
