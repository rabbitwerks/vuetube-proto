<template>
  <div class="navbar--outer flexbox flex-align-center">
    <div class="navbar--brand">
      {{ brand }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      brand: 'Vuetube',
    }
  }
}
</script>

<style scoped>
.navbar--outer {
  min-height: 3.5rem;
  height: 3.5rem;
  background-color: #000;
}
.navbar--brand {
  margin-left: 1rem;
  color: #eee;
  font-size: 2rem;
}
</style>
