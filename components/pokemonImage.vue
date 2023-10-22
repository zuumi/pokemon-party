<template>
  <div class="container">
    <img
      v-if="pokemon.sprites && pokemon.sprites.front_default"
      class="c-pokemon -image"
      :src="pokemon.sprites.front_default"
      alt="pokemon image"
    />
    タイプ:&nbsp;&nbsp;
    <div v-for="pokemonType in pokemon.types" :key="pokemonType.slot">
      {{ pokemonType.type.name }}&nbsp;&nbsp;
    </div>
  </div>
</template>

<script>
export default {
  props: ['numbering'],
  data() {
    return {
      pokemon: {},
    }
  },
  watch: {
    numbering: {
      immediate: true,
      handler(newNumbering) {
        this.fetchPokemon(newNumbering)
      },
    },
  },
  methods: {
    fetchPokemon(numbering) {
      fetch('https://pokeapi.co/api/v2/pokemon/' + Number(numbering))
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok')
          }
          return response.json()
        })
        .then((data) => {
          this.pokemon = data
        })
        .catch((error) => {
          console.error(
            'There has been a problem with your fetch operation:',
            error
          )
        })
    },
  },
}
</script>
<style lang="scss">
.c-pokemon {
  &.-image {
    width: 200px;
  }
}
.container {
  display: flex;
}
</style>
