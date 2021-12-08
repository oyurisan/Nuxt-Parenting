<template>
  <div class="newsignup">
    <div class="newSignUp-title">新規アカウント作成</div>
    <div class="login">
      メールアドレス<br /><input
        v-model="email"
        class="mail"
        type="email"
        placeholder="email"
      /><br />
      パスワード<br /><input
        v-model="password"
        type="password"
        placeholder="password"
      /><br />
      パスワード(確認用)<br /><input
        v-model="password"
        type="password"
        placeholder="password"
      />
      <div>
        <button class="touroku" @click="register">新規登録</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      email: '',
      password: '',
    }
  },
  computed: {
    user() {
      return this.$store.getters.userid
    }
  },
  methods: {
    register() {
      alert('この内容で登録をしてもよろしいでしょうか')
      this.$store.dispatch('register', {
        email: this.email,
        password: this.password,
      })
      this.email = ''
      this.password = ''
      this.$router.push({ name: 'login' })
    },
    ...mapActions(["adds"])
  },
}
</script>

<style lang="scss">
.newSignUp-title {
  text-align: center;
  margin: 7% 0 5% 0;
  font-size: 150%;
}
.touroku {
  border: 2px solid #000;
  border-radius: 0;
  margin-left: 70%;
  background: #fff;
  &:hover {
    color: #fff;
    background: #000;
  }
}
.newsignup {
  font-family: Meiyou, Georgia, 'Times New Roman', Times, serif;
  width: 400px;
  margin: auto;
}
.mail {
  width: 60%;
}

</style>
