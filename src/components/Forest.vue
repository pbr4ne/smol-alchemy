<template>
  <div>
      A spoopy forest.
      <br /><br />
      <CollectButton />
  </div>
</template>

<script>
import CollectButton from './CollectButton.vue'

export default {
  name: 'Forest',
  components: {
    CollectButton
  },
  data: function () {
    return {
    }
  },
  methods: {
  }
}
</script>
