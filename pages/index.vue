<template>
  <div>
    <div class="home-title">Home</div>

    <Calender />

  </div>
</template>

<script>
export default {

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
