<!-- <template>
  <div class="login">
    <div>{{this.$store.state.UserInfo}}</div>
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
import { mapActions, mapGetters } from 'vuex'
import firebase from '~/plugins/firebase'

export default {
  data() {
    return {
      email: '',
      password: '',
      isLogin: '',
      userData: null,
    }
  },
  computed: {
    user() {
      return this.$store.getters.user
    },
    ...mapGetters(['getUserInfo']),
  },
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      console.log(user)
      console.log(user.uid); // ○
      if (user) {
        this.isLogin = true
        this.userData = user.uid
        console.log(this.userData)
        // this.$store.dispatch('fetchUser',this.userData)
        this.fetchUser (this.userData);
        console.log('ログイン');
        console.log(this.$store.state.UserInfo);
      } else {
        this.isLogin = false
        this.userData = null
        console.log('ログアウト');
      }
    })

  },
  methods: {
    login(email, password) {
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
    ...mapActions(['adds', 'fetchUser']),
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
</style> -->