<template>
  <div id="app">
    <div class="container">
      <ProxiesFilters />
      <ProxiesList/>
    </div>
  </div>
</template>

<script>
import ProxiesList from '@/components/ProxiesList'
import ProxiesFilters from '@/components/ProxiesFilters'
export default {
  components: { ProxiesList, ProxiesFilters }
}
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.container {
  display: flex;
}
@media screen and (max-width: 1200px) {
  .container {
    flex-direction: column;
  }
}
</style>
