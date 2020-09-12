<template>
  <div>
    <button @click="harvest">Forage</button><br />
    <p>{{seeds}} seeds found</p>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      seeds: 0
    }
  },
  methods: {
    harvest () {
      this.seeds = this.seeds + 1
    }
  }
}
</script>
