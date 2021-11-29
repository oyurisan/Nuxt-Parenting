<template>
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
  </div>
</template>

<script>
import firebase from '~/plugins/firebase'

export default {
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
    },
  },
  mounted() {
    firebase.auth().onAuthStateChanged((user) => {
      console.log(user)
      if (user) {
        this.isLogin = true
        this.userData = user
      } else {
        this.isLogin = false
        this.userData = null
      }
    })
  },
  methods: {
    login(email, password) {
      this.$store.dispatch('login', {
        email: this.email,
        password: this.password,
      })
    },
    logout() {
      this.$store.dispatch('logout')
      this.email = ''
      this.password = ''
    },
  },
}
</script>

<style lang="scss">
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