<template>
  <div class="food-main">
    <div class="food-title">ごはん管理</div>

    <div class="food-container">
      <div>🍽food🍴</div>
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
    title: 'ごはん'
  },

  methods: {
    back() {
      this.$router.push ({name:'index'})
    }
  }
}
</script>

<style>
.food-title {
  text-align: center;
  font-size: 200%;
  margin-top: 10%;
}
.food-container {
  text-align: center;
  margin: 5%;
}
</style>