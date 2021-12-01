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
    <input v-model="birthday" type="date" /><button class="reset">
      リセット
    </button>
    <br />
    <button class="touroku" @click="addinfo">登録</button>
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
      food: [{}],
      customerinfo: '',
    }
  },
  created() {
    this.$store.dispatch('Signup/init')
    this.new=this.$store.state.UserInfo
    console.log(this.new)
    this.$store.dispatch("adds")
  },
  methods: {
    addinfo() {
       const users={
        babyname: this.babyname,
        birthday: this.birthday,
        gender: this.gender,
        picture:this.picture
       }
      this.userupdate(users)
      this.$router.push({ name: 'index' })
    },
  },
  ...mapActions(['adds',"userupdate"]),
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
.profileImg {
  width: 50%;
  margin: 5% auto 10% auto;
}
</style>
