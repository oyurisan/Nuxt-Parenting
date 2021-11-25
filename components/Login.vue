<template>
  <div class="login">
    email:<input
      v-model="email"
      type="email"
      placeholder="email"
    /><br />password:<input
      v-model="password"
      type="password"
      placeholder="password"
    />
    <div v-if="!isLogin"><button class="logins" @click="login">ログイン</button></div>
    <div v-if="isLogin"><button class="logins" @click="logout">ログアウト</button></div>
    <p v-if="user.login">
      ログインに成功<br />
      {{ user }}
    </p>
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
  mounted () {
    firebase.auth().onAuthStateChanged(user => {
      console.log(user);
      if (user) {
        this.isLogin = true;
        this.userData = user;
      } else {
        this.isLogin = false;
        this.userData = null;
      };
    });
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
</style>