<template>
  <div class="urine-main">
    <div class="urine-title">URINE PAGE</div>

    <div class="urine-container">
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
    <button class="px-2 py-1 bg-dark-red text-xl text-white font-semibold rounded hover:bg-light-red w-56" @click="addurine">
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

export default {
  components: {

  },
  data() {
    return {
      urinememo: '',
      urinedate: '',
    }
  },
  head: {
    title: 'おしっこ管理',
  },
created(){
 console.log(this.$store.state)
 console.log(this.$store.state.UserInfo)
},
  methods: {
    saveUrine () {
      this.$router.push({ name: 'index' })
    },
    back() {
      this.$router.push({ name: 'index' })
    },
    addurine() {
      if(this.$store.state.UserInfo){
      alert(`この内容で登録してもよろしいでしょうか`)
      const urines = {
        urinememo: this.urinememo,
        urinedate: this.urinedate,
        UserInfo:this.$store.state.UserInfo
      }
      this.urineupdate(urines)
      this.$router.push({ name: 'index' })
      this.urinememo=""
      this.urinedate=""
      }else{
        alert(`ログインしてください`)
        console.log(`ログインしていません`)
      }
    },
    ...mapActions(['urineupdate']),
  },
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Gluten:wght@700&display=swap');

.urine-title {
  text-align: center;
  font-size: 200%;
  margin-top: 2%;
  font-family: 'Gluten', cursive;
}
.urine-container {
  text-align: center;
  margin: 2%;
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
