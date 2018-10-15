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
  data () {
    return {
      count: 0,
      errorMsg: ''
    }
  },
  methods: {
    ...mapActions([
      'addCount', 'minusCount'
    ]),
    showCount: function () {
      alert(this.$store.state.counterModule.count)
    }
  }
}
</script>

<style>
</style>
