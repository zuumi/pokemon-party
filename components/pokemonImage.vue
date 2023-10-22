<template>
  <div>
    <div class="container">
      <img
        v-if="pokemon.sprites && pokemon.sprites.front_default"
        class="c-pokemon -image"
        :src="pokemon.sprites.front_default"
        alt="pokemon image"
      />
      <div class="c-pokemon -meta">
        タイプ:&nbsp;
        <div
          v-for="pokemonType in pokemon.types"
          :key="pokemonType.slot"
          class="c-pokemon -type"
        >
          {{ pokemonType.type.name }}&nbsp;
        </div>
        <dr />
        <div v-if="pokemondesc[0]" class="c-pokemon -desc">
          {{ pokemondesc[0]['flavor_text'] }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['numbering'],
  data() {
    return {
      pokemon: {},
      pokemondesc: {},
    }
  },
  watch: {
    numbering: {
      immediate: true,
      handler(newNumbering) {
        this.fetchPokemon(newNumbering)
        this.fetchPokemonDesc(newNumbering)
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
    fetchPokemonDesc(numbering) {
      fetch('https://pokeapi.co/api/v2/pokemon-species/' + Number(numbering))
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok')
          }
          return response.json()
        })
        .then((data) => {
          this.pokemondesc = data.flavor_text_entries.filter(function (v) {
            return v.language.name === 'ja' && v.version.name === 'sword'
          })
          if (this.pokemondesc.length === 0) {
            this.pokemondesc = data.flavor_text_entries.filter(function (v) {
              return v.language.name === 'ja' && v.version.name === 'y'
            })
          }
          if (this.pokemondesc.length === 0) {
            this.pokemondesc = data.flavor_text_entries.filter(function (v) {
              return v.language.name === 'ja' && v.version.name === 'sun'
            })
          }
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
    width: 600px;
  }
  &.-type {
    font-size: 16px;
    display: inline;
  }
  &.-desc {
    margin-top: 16px;
    font-size: 16px;
  }
}
.container {
  display: flex;
}
</style>
