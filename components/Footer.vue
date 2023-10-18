<template>
  <v-footer :absolute="!fixed" app>
    <span>&copy; {{ new Date().getFullYear() }}</span>
  </v-footer>
</template>
<style lang="scss">
.v-footer--absolute:not(.v-footer--inset) {
  width: 120%;
}
</style>
