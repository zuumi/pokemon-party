<template>
  <div>
    <nav>
      <nuxt-link to="/">Home</nuxt-link>
      <nuxt-link :to="{ name: 'waza' }">PokemonGO 技シミュレータ</nuxt-link>
      <nuxt-link :to="{ name: 'pokemon' }">ポケモンリスト</nuxt-link>
    </nav>
  </div>
</template>
