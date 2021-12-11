<template>
  <div>
    <div class="home-title">Home</div>

    <Calender />
  </div>
</template>

<script>
import { mapGetters } from "vuex"
export default {
  computed: {
    user() {
      return this.$store.getters.user
    },
    ...mapGetters(['getAllData']),
  },
  created() {
    this.$store.dispatch('fetchAllData')
 this.$store.dispatch('fetchUser')
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
