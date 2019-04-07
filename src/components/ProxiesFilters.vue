<template>
  <div>
    <div class="filters">
      <div class="filter">
        <label for="alive" class="filter__label">Alive</label>
        <select v-model="alive" id="alive" class="filter__select">
          <option value="">All</option>
          <option value="true">True</option>
          <option value="false">False</option>
        </select>
      </div>
      <div class="filter">
        <label for="proxy-type" class="filter__label">Proxy type</label>
        <select v-model="proxyType" id="proxy-type" class="filter__select">
          <option value="">All</option>
          <option value="0">Transparent</option>
          <option value="1">Anonymous</option>
          <option value="2">Elite</option>
        </select>
      </div>
      <div class="filter">
        <label for="country" class="filter__label">Country</label>
        <select v-model="country" id="country" class="filter__select">
          <option value="">All</option>
          <option value="CL">CL</option>
          <option value="EU">EU</option>
          <option value="ID">ID</option>
          <option value="RU">RU</option>
          <option value="TH">TH</option>
          <option value="VN">VN</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'
export default {
  computed: {
    ...mapGetters(['filters']),
    alive: {
      get () {
        return this.filters.find(f => f.filterBy === 'alive').filterValue
      },
      set (value) {
        this.SET_FILTER({ filterBy: 'alive', filterValue: value })
        this.getProxies()
      }
    },
    proxyType: {
      get () {
        return this.filters.find(f => f.filterBy === 'proxy_type').filterValue
      },
      set (value) {
        this.SET_FILTER({ filterBy: 'proxy_type', filterValue: value })
        this.getProxies()
      }
    },
    country: {
      get () {
        return this.filters.find(f => f.filterBy === 'country').filterValue
      },
      set (value) {
        this.SET_FILTER({ filterBy: 'country', filterValue: value })
        this.getProxies()
      }
    }
  },
  methods: {
    ...mapActions(['getProxies']),
    ...mapMutations(['SET_FILTER'])
  }
}
</script>

<style lang="scss">
@media screen and (max-width: 1200px) {
  .filters {
    display: flex;
  }
}

.filter {
  padding: 15px;
  &__label {
    display: block;
    margin-bottom: 10px;
  }
}
</style>
