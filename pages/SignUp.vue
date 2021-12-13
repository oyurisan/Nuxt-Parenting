<template>
  <div class="signup">
    <div class="signup-title">SIGN UP</div>
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
    console.log(this.$store.state.UserInfo)
   console.log(this.$store.state.UserInfo)
  },
  methods: {
    addinfo() {
      console.log(this.$store.state.UserInfo)
      if(this.$store.state.UserInfo){
        console.log(this.$store.state.UserInfo)
       const users={
        babyname: this.babyname,
        birthday: this.birthday,
        gender: this.gender,
        picture:this.picture,
        UserInfo:this.$store.state.UserInfo
       }
      this.userupdate(users)
       console.log(this.$store.state.UserInfo)
      this.$router.push({ name: 'index' })
      }else{
        alert(`ログインをしてください`)
        console.log(`ログインしてください`)
      }
    }
  },
 ...mapActions(['userupdate']),
}
</script>

<style lang="scss">
.signup {
  margin: auto;
  text-align: center;
}
.signup-title {
  text-align: center;
  font-size: 200%;
  margin-top: 2%;
  margin: 5% 0 5% 0;
  font-family: 'Gluten', cursive;
  color: rgb(133, 110, 110);

  &::after {
    background-color: #f3a3a8; /* 1個目（一番左）のドットの色 */
    border-radius: 50%;
    content: '';
    // margin-left: 15px; /* 最後の文字とドットとの余白 */
    position: absolute;
    top: 275px;
    left: 610px;
    width: 5px; /* ドットの幅 */
    height: 5px; /* ドットの高さ */
    box-shadow: 20px 0px 0px rgb(217, 204, 179),
      /* 2個目のドットの位置と色 */ 40px 0px 0px rgb(217, 204, 179),
      /* 3個目のドットの位置と色 */ 60px 0px 0px rgb(243, 163, 168),
      /* 4個目のドットの位置と色 */ 80px 0px 0px rgb(217, 204, 179),
      /* 5個目のドットの位置と色 */ 100px 0px 0px rgb(217, 204, 179),
      /* 6個目のドットの位置と色 */ 120px 0px 0px rgb(243, 163, 168),
      /* 7個目のドットの位置と色 */ 140px 0px 0px rgb(217, 204, 179),
      /* 8個目のドットの位置と色 */ 160px 0px 0px rgb(217, 204, 179),
      /* 9個目のドットの位置と色 */ 180px 0px 0px rgb(243, 163, 168),
      /* 10個目のドットの位置と色 */ 200px 0px 0px rgb(217, 204, 179),
      /* 11個目のドットの位置と色 */ 220px 0px 0px rgb(217, 204, 179); /* 12個目のドットの位置と色 */
  }
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
