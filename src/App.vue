<template>
  <div id="app">
    <vue-tabs active-tab-color="#141c2a" active-text-color="#df1233">
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
  background-color: #2b292c;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #df1233;
}
.tab-content {
  padding: 15px;
}
.vue-tabs .nav-tabs li a{
  color: #742433;
}
</style>
