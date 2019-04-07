<template>
  <div class="home">
    <div class="table-wrapper">
    <table>
      <thead>
        <td>ID</td>
        <td>Created</td>
        <td>Modified</td>
        <td>Host</td>
        <td>Port</td>
        <td>Country</td>
        <td>Alive</td>
        <td>Last check time</td>
        <td>Busy until</td>
        <td>Proxy type</td>
        <td>Port response type</td>
        <td>Chargeable</td>
        <td>Use counter</td>
        <td>Protocol</td>
        <td>Source of proxy</td>
      </thead>
      <tbody>
        <tr v-for="proxy in proxies" :key="proxy.id">
          <td>{{ proxy.id }}</td>
          <td>{{ proxy.created | moment('LLL') }}</td>
          <td>{{ proxy.modified | moment('LLL') }}</td>
          <td>{{ proxy.host }}</td>
          <td>{{ proxy.port }}</td>
          <td>{{ proxy.country }}</td>
          <td>{{ proxy.alive }}</td>
          <td>{{ proxy.last_check_time | moment('LLL')  }}</td>
          <td>{{ proxy.busy_until | moment('LLL') }}</td>
          <td>{{ proxy.proxy_type }}</td>
          <td>{{ proxy.port_response_time }}</td>
          <td>{{ proxy.chargeable }}</td>
          <td>{{ proxy.use_counter }}</td>
          <td>{{ proxy.protocol }}</td>
          <td>{{ proxy.source_of_proxy }}</td>
        </tr>
      </tbody>
    </table>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters, mapActions, mapMutations } from 'vuex'
export default {
  name: 'ProxiesList',
  created () {
    this.getProxies()
  },
  destroyed () {
    this.SET_TO_ZERO_PROXIES()
  },
  computed: {
    ...mapGetters(['proxies'])
  },
  methods: {
    ...mapActions(['getProxies']),
    ...mapMutations(['SET_TO_ZERO_PROXIES'])
  }
}
</script>

<style lang="sass" scoped>
.table-wrapper
  overflow-x: scroll
td
  border: 1px solid #ccc
</style>
