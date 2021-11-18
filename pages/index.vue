<template>
  <div>
    <div class="home-title">Home</div>

    <div class="link">
      <nuxt-link to="unchi">💩</nuxt-link>
      <nuxt-link to="urine">💧</nuxt-link>
    </div>

  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
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
</style>
