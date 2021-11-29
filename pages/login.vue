<template>
  <div class="login-main">
      <div class="login-title">
          ログイン画面
      </div>
    <Login />
  </div>
</template>

<script>
import Login from '~/components/Login'

export default {
  components: {
    Login,
  },
  data() {
    return {}
  },
}
</script>

<style lang="scss">
.login-title {
    font-size: 150%;
    margin-bottom:  3%;
}
.login-main {
    text-align: center;
    margin: 7% 0 5% 0
}
</style>