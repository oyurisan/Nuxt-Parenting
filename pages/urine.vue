<template>
  <div class="urine-main">
    <div class="urine-title">おしっこ管理</div>

    <div class="urine-container">
      <div>💧urine💧</div>
      <div>
        日時 : <input v-model="urinedate" type="datetime-local" name="Date" />
      </div>
      <textarea
        v-model="urinememo"
        class="textarea"
        cols="30"
        rows="5"
        name="Memo"
        placeholder="タップしてテキストを入力"
        maxlength="500"
      />
      <p>{{ urinememo.length }}/500 文字</p>
      <div>
              <div class="container">
        </div>
        <div class="m-3">
    <button class="px-2 py-1 bg-red-900 text-xl text-white font-semibold rounded hover:bg-red-900 w-56" @click="addurine">
      <div class="button">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="30px" height="30px">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
</svg>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
保存</div></button></div>
        <div class="m-3">
    <button class="px-2 py-1 bg-blue-900 text-xl text-white font-semibold rounded hover:bg-blue-900 w-56" @click="back">
      <div class="button">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="30px" height="30px">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
</svg>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
戻る</div></button></div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
// import Memo from '../components/addMemo'
// import DateTime from '../components/addDateTime'

export default {
  components: {
    // Memo,
    // DateTime,
  },
  data() {
    return {
      urinememo: '',
      urinedate: '',
    }
  },
  head: {
    title: 'おしっこ',
  },

  methods: {
    saveUrine () {
      this.$router.push({ name: 'index' })
    },
    back() {
      this.$router.push({ name: 'index' })
    },
    addurine() {
      alert(`この内容で登録してもよろしいでしょうか`)
      const urines = {
        urinememo: this.urinememo,
        urinedate: this.urinedate,
      }
      this.urineupdate(urines)
      this.$router.push({ name: 'index' })
      this.urines=""
    },
    ...mapActions(['urineupdate']),
  },
}
</script>

<style lang="scss">
.urine-title {
  text-align: center;
  font-size: 200%;
  margin-top: 10%;
}
.urine-container {
  text-align: center;
  margin: 5%;
}
.container{
  display: flex;
  flex-wrap: wrap;
  display:inline-block
}
.button{
  display: flex;
}
</style>
