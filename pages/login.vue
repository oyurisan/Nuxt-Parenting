<template>
  <div class="login-main">
      <div class="login-title">
         LOGIN
      </div>
      <div class="login">
    メールアドレス<br /><input
      v-model="email"
      type="email"
      placeholder="email"
    /><br />パスワード<br />
    <input v-model="password" type="password" placeholder="password" />
    <div class="loginOut-btn" v-if="!isLogin">
      <button class="logins" @click="login">ログイン</button>
    </div>
    <div class="loginOut-btn" v-if="isLogin">
      <button class="logins" @click="logout">ログアウト</button>
    </div>
    <p v-if="user.login">ログインに成功<br /></p>
    <!-- <button @click="aa"> aa</button> -->
  </div>
  </div>
</template>

<script>
import { mapActions, } from 'vuex'
import firebase from '~/plugins/firebase'

export default {
  components: {
  },
  data() {
    return {
      email: '',
      password: '',
      isLogin: false,
      userData: null,
    }
  },
    computed: {
    user() {
      return this.$store.getters.user
    }
  },
  mounted() {
    firebase.auth().onAuthStateChanged((user) => {
      console.log(user)
      if (user) {
        this.isLogin = true
        this.userData = user.uid
        this.$store.dispatch('fetchUser',this.userData)
        console.log(this.$store.state)
      } else {
        this.isLogin = false
        this.userData = null
      }
    })
  },
  methods: {
    login() {
      this.$store.dispatch('login', {
        email: this.email,
        password: this.password,
      })
      this.adds()
      this.$router.push({ name: 'index' })
    },
    logout() {
      this.$store.dispatch('logout')
      this.email = ''
      this.password = ''
    },
    aa(){
console.log(this.$store.state)
    },
    ...mapActions(["adds","fetchUser"])
  },
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Gluten:wght@700&display=swap');
.login-title {
  text-align: center;
  font-size: 200%;
  margin-top: 2%;
  margin: 5% 0 5% 0;
  font-family: 'Gluten', cursive;
  color: rgb(133, 110, 110);
}
.login-main {
    text-align: center;
    margin: 7% 0 5% 0
}
.logins {
  border: 2px solid #000;
  border-radius: 0;
  background: #fff;
  &:hover {
    color: #fff;
    background: #000;
  }
}
.loginOut-btn {
  margin-top: 2%;
}
</style>