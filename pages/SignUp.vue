<template>
  <div class="signup">
    <h3>新規登録画面</h3>

    <div class="profileImg">
      <upload v-model="picture" />
    </div>

    <p>赤ちゃんのニックネーム</p>
    <input v-model="babyname" type="text" />
    <br />
    <label id="女">
      <input
        id="女"
        v-model="gender"
        type="radio"
        name="gender"
        value="女"
      />女の子
    </label>
    <label id="男">
      <input
        id="男"
        v-model="gender"
        type="radio"
        name="gender"
        value="男"
      />男の子
    </label>
    <label id="なし">
      <input
        id="なし"
        v-model="gender"
        type="radio"
        name="gender"
        value="なし"
      />設定なし
    </label>
    <br />
    <div>生年月日</div>
    <input v-model="birthday" type="date">  
    <br />
     <div class="m-3">
    <button class="px-2 py-1 bg-red-900 text-xl text-white font-semibold rounded hover:bg-red-900 w-56" @click="addinfo">
      <div class="button">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="30px" height="30px">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
</svg>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
登録</div></button></div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Upload from '../components/imgUpLoad'

export default {
  components: {
    Upload,
  },
  data() {
    return {
      picture: null,
      babyname: '',
      gender: '',
      birthday: '',
      customerinfo: '',
    }
  },
  created() {
    this.$store.dispatch('fetchAllData')
    this.$store.dispatch('fetchUser')
   console.log(this.$store.state.UserInfo)
  },
  methods: {
    addinfo() {
       const users={
        babyname: this.babyname,
        birthday: this.birthday,
        gender: this.gender,
        // picture:this.picture
       }
      this.updateuser(users)
      this.$router.push({ name: 'index' })
    },
  },
  ...mapActions(['userupdate']),
}
</script>

<style lang="scss">
.signup {
  width: 400px;
  margin: auto;
}
.touroku {
  border: 2px solid #000;
  border-radius: 0;
  background: #fff;
  &:hover {
    color: #fff;
    background: #000;
  }
}
.reset {
  border: 2px solid #000;
  border-radius: 0;
  background: #fff;
  &:hover {
    color: #fff;
    background: #000;
  }
}
.profileImg {
  width: 50%;
  margin: 5% auto 10% auto;
}
.button{
  display: flex;
}
</style>
