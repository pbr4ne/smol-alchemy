<template>
  <div id="app">
    <vue-tabs active-tab-color="#2c3e50" active-text-color="white">
        <v-tab title="Cottage">
          <Cottage />
        </v-tab>
        <v-tab title="Garden">
          <Garden />
        </v-tab>
        <v-tab title="Forest">
          <Forest />
        </v-tab>
    </vue-tabs>
</div>
</template>

<script>
import { VueTabs, VTab } from 'vue-nav-tabs'
import 'vue-nav-tabs/themes/vue-tabs.css'
import Cottage from './components/Cottage.vue'
import Garden from './components/Garden.vue'
import Forest from './components/Forest.vue'

export default {
  name: 'App',
  components: {
    VueTabs,
    VTab,
    Cottage,
    Garden,
    Forest
  }
}
</script>

<style>
body {
  background-color: #222831;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: white;
}
.tab-content {
  padding: 15px;
}
</style>
