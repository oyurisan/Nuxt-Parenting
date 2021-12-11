<template>
  <div>
    <div class="home-title">
      HOME
    </div>

    <div>
      <Calender />
    </div>
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
  },
  methods: {
    data() {
      console.log(new Date())
    },
  },
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Gluten:wght@700&display=swap');
.sample {
  color: rgb(65, 40, 40);
}

.home-title {
  text-align: center;
  font-size: 200%;
  margin-top: 5%;
  font-family: 'Gluten', cursive;
  color: rgb(133, 110, 110);
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
