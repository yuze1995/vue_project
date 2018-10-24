<template>
  <div>
    <h3>It's a Counter.</h3>
    <p>
      Count: {{ $store.state.counterModule.count  }}
    </p>
    <button @click="addCount"> + </button>
    <button @click="minusCount"> - </button>
    <button @click="showCount"> Show Count </button>
    <p>
      {{ $store.state.counterModule.errorMsg }}</p>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions([
      'addCount', 'minusCount'
    ]),
    showCount: function () {
      alert('count is ' + this.$store.state.counterModule.count)
    }
  }
}
</script>

<style>
</style>
