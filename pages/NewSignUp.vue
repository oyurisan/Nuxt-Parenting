<template>
  <div class="newsignup">
    <h2>新規登録</h2>
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
      <button class="touroku" @click="register">新規登録</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
    }
  },
  computed: {
    user() {
      return tthis.$store.getters.user
    },
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
    },
  },
}
</script>

<style lang="scss">
.touroku {
  border: 2px solid #000;
  border-radius: 0;
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
