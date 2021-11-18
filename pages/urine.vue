<template>
  <div class="urine-main">
    <div><nuxt-link to="/">🔙</nuxt-link></div>
    <div class="urine-title">おしっこ管理</div>

    <div class="urine-container">
      <div>💧urine💧</div>

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
.urine-title {
  text-align: center;
  font-size: 200%;
  margin-top: 10%;
}
.urine-container {
  text-align: center;
  margin: 5%;
}
</style>