<template>
  <div>
    <div class="graph-title">
      成長曲線
      <div>(身長・体重)</div>
    </div>

    <div class="hw-button-frame">
      <button class="hw-button" @click="active1">~ 1歳</button>
      <button class="hw-button" @click="active2">1歳 ~ 2歳</button>
      <button class="hw-button" @click="active3">2歳 ~ 3歳</button>
    </div>

    <div class="chart">
    <div v-if="isActive" ><Chart /></div>
    <div v-if="isActive2" ><Chart2 /></div>
    <div v-if="isActive3" ><Chart3 /></div>
    </div>

    <div class="backHome">
      <nuxt-link to="/">Home</nuxt-link>
    </div>
  </div>
</template>

<script>
import Chart from '~/components/Chart.vue'
import Chart2 from '~/components/Chart2.vue'
import Chart3 from '~/components/Chart3.vue'

export default {
  components: {
    Chart,
    Chart2,
    Chart3,
  },

  data() {
    return {
      isActive: false,
      isActive2: false,
      isActive3: false,
    }
  },

  methods: {
    active1() {
      this.isActive = !this.isActive
    },
    active2() {
      this.isActive2 = !this.isActive2
    },
    active3() {
      this.isActive3 = !this.isActive3
    },
  },
}
</script>

<style lang="scss">
.graph-title {
  text-align: center;
  margin: 10% 0 5% 0;
  font-size: 36px;
}
.backHome {
  text-align: center;
  margin: 5% auto 10% auto;
  background-color: darksalmon;
  width: 10%;
}
.hw-button-frame {
  margin: 5% auto 5% auto;
  text-align: center;
}
.hw-button {
  background-color: rgb(209, 124, 149);
  color: rgb(255, 253, 253);
  width: 15%;
  padding: 2.5% auto 2.5% auto;
  text-align: center;
  margin-left: 2%;
  border-radius: 7%;
  &:hover {
    opacity: 0.8;
  }
}
.chart  {
  width: 80%;
  margin: 5% auto 5% auto;
}
</style>