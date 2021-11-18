<template>
  <div class="urine-main">
    <div class="urine-title">おしっこ管理</div>

    <div class="urine-container">
      <div>💧urine💧</div>
      <DateTime />
      <Memo />

      <div>
        <button>保存</button>
        <button @click="back">戻る</button>
      </div>
    </div>
  </div>
</template>

<script>
import Memo from '../components/addMemo'
import DateTime from '../components/addDateTime'

export default {
  components: {
    Memo,
    DateTime,
  },

  head: {
    title: 'おしっこ'
  },

  methods: {
    back() {
      this.$router.push ({name:'index'})
    }
  }
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