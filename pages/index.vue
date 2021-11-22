<template>
  <div>
    <h3>育児アプリ（未満児）</h3>
    <nuxt-link to="/SignUp">ここ</nuxt-link>

    <div class="home-title">Home</div>

    <div class="link"> 
      <nuxt-link to="graph">成長曲線</nuxt-link>
    </div>

    <div class="link">
      <nuxt-link to="unchi">💩</nuxt-link>
      <nuxt-link to="urine">💧</nuxt-link>
      <nuxt-link to="food">🍼</nuxt-link>
    </div>
  </div>
</template>
</template>

<script>
// import Vue from 'vue'

export default {}
</script>

<style>
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
</style>
