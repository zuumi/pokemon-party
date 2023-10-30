<template>
  <div class="box">
    <div class="box-space">
      <div>
        <div class="pokeimg-border">
          <div v-if="selectedPokemon" class="pokeimg">
            <h2>{{ selectedPokemon.name }}</h2>
            <pokemon-image
              :numbering="selectedPokemon.numbering"
            ></pokemon-image>
          </div>
        </div>
        <div>
          <waza-patter
            v-if="selectedPokemon"
            :selected_1="selectedPokemon.waza[0]"
            :selected_A="selectedPokemon.waza[1]"
            :selected_B="selectedPokemon.waza[1]"
          ></waza-patter>
        </div>
      </div>
    </div>
    <dl>
      <dt>
        <label>ポケモン</label>
      </dt>
      <dd>
        <input
          v-model="filteredPokemon"
          class="select__pokemon"
          type="text"
          placeholder="ポケモンの名前を入力してください"
          @change="filter"
        />
      </dd>
    </dl>
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
      filteredPokemon: null,
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
    filter() {
      const searchedPokemon = this.pokemonList
        .map((poke) => {
          return poke.name === this.filteredPokemon ? poke : undefined
        })
        .filter((poke) => typeof poke !== 'undefined')
      this.selectedPokemon = searchedPokemon[0]
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
.box {
  border: 1px solid black;
  width: 400px;
  height: 610px;
  color: #2e2b21;
  background-color: #fff5f5;
}
.box-space {
  height: 570px;
  background-color: #fff5f5;
}
.select__pokemon {
  border: 1px solid black;
  color: black;
  width: 200px;
  color: #2e2b21;
}
div {
  text-align: left;
  color: #2e2b21;
}
.pokeimg {
  background-color: #378e37;
  &-border {
    padding: 10px 10px 10px 10px;
    background-color: #2e2b21;
  }
}

label {
  text-align: center;
}
dl {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}
dt {
  width: 30%;
  padding-bottom: 5px;
  background-color: #dadada;
}
dd {
  width: 70%;
  padding-bottom: 5px;
  background-color: #f3f3f3;
}
</style>
