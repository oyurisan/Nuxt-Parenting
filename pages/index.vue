<template>
  <div>
    <div class="home-title">Home</div>

    <Calender />

    <div v-for="unchiItem in getAllData.unchi" :key="unchiItem.id">
      unchi : {{ unchiItem.unchidate }}
    </div>

    <div v-for="foodItem in getAllData.food" :key="foodItem.id">
      food : {{ foodItem.kinds }}
    </div>

    <div v-for="urineItem in getAllData.urine" :key="urineItem.id">
      urine : {{ urineItem.urinememo }}
    </div>

    <div v-for="heightItem in getAllData.height" :key="heightItem.id">
      height : {{ heightItem.height }}
    </div>

    <div v-for="wightItem in getAllData.weight" :key="wightItem.id">
      weight : {{ wightItem.weight }}
    </div>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    user() {
      return this.$store.getters.user
    },
    ...mapGetters(['getAllData']),
  },
  created() {
    this.$store.dispatch('fetchAllData')
  },
  methods: {
    data() {
      console.log(new Date())
    },
  },
}
</script>

<style lang="scss">
.home-title {
  text-align: center;
  font-size: 200%;
  margin-top: 5%;
}
.link {
  text-align: center;
  margin-top: 5%;
  margin-bottom: 10%;
}
.memo-container {
  text-align: center;
  margin: 5%;
}
.icon-img {
  width: 20%;
}
</style>
