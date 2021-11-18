<template>
  <div class="unchi-main">

    <div><nuxt-link to="/">🔙</nuxt-link></div>
    <div class="unchi-title">うんち管理</div>

    <div class="unchi-container">
      <div>💩unchi💩</div>

      <Memo />
    </div>

  </div>
</template>
<script>
import Memo from '../components/addMemo'

export default {
  components: {
    Memo,
  },
}
</script>

<style>
.unchi-title {
  text-align: center;
  font-size: 200%;
  margin-top: 10%;
}
.unchi-container {
  text-align: center;
  margin: 5%;
}
</style>