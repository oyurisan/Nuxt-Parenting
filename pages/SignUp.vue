<template>
  <div class="signup">
    <h3>新規登録画面</h3>
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
    <input v-model="birthday" type="date" /><button class="reset">
      リセット
    </button>
    <br />
    <button class="touroku" @click="addinfo">登録</button>
    <button @click="test">kakuninn</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      babyname: '',
      gender: '',
      birthday: '',
      food: [{}],
      customerinfo: '',
    }
  },
  created() {
    this.$store.dispatch('Signup/init')
    this.new=this.$store.state.UserInfo
    console.log(this.new)
  },
  methods: {
    test() {
      this.$store.dispatch('Signup/adduserinfo', {
        id: this.id,
        babyname: this.babyname,
        birthday: this.birthday,
        gender: this.gender,
      })
    },
    addinfo() {
      this.$store.dispatch('adds', {
        babyname: this.babyname,
        birthday: this.birthday,
        gender: this.gender,
      })
      //  const customerinfo={
      //     babyname:this.babyname,
      //     birthday:this.birthday,
      //     gender:this.gender
      //   }
      //   console.log(customerinfo)
      //   console.log(this.adds)
      //   this.$store.dispatch('adds,{customerinfo}')
      // console.log(this.birthday)
      // alert(`この内容で登録してもよろしいでしょうか`)
      // this.$store.dispatch('adds', {
      //   babyname: this.babyname,
      //   birthday: this.birthday,
      //   gender: this.gender,
      //   kinds: '',
      //   foodmemo: '',
      //   height:"",
      //   weight:"",
      //   unchiecolor:"",
      //   shape:"",
      //   unchimemo:"",
      //   urinecolor:"",
      //   urinememo:"",
      // })
    },
    // resetinfo(){
    //   this.babyname="",
    //   this.birthday="",
    //   this.gender=""
    // }
  },
  ...mapActions(['adds']),
}
</script>

<style lang="scss">
.signup {
  font-family: Meiyou, Georgia, 'Times New Roman', Times, serif;
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
</style>
