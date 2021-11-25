<template>
  <div>
    <div class="graph-title">成長曲線 (身長・体重)</div>
    <Chart />

    <div class="backHome">
      <nuxt-link to="/">Home</nuxt-link>
    </div>
  </div>
</template>

<script>
import Chart from '~/components/Chart.vue'

export default {
  components: {
    Chart,
  },
}
</script>

<style lang="scss">
.graph-title {
    text-align: center;
    margin: 10% 0 5% 0;
}
.backHome {
    text-align: center;
    margin: 5% auto 10% auto;
    background-color: darksalmon;
    width: 10%;
}
</style>