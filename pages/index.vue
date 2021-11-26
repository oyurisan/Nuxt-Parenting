<template>
 <div>
   <Login/>

   <div class="home-title">Home</div>

   <Calender />

    <div class="link"> 
      <nuxt-link to="profile">My Page</nuxt-link>
    </div>

    <div class="link"> 
      <nuxt-link to="graph">成長曲線</nuxt-link>
    </div>

    <div class="link">
      <nuxt-link to="SignUp">登録画面</nuxt-link>
       <nuxt-link to="food">🍼</nuxt-link>
        <nuxt-link to="growth">成長</nuxt-link>
      <nuxt-link to="unchi">💩</nuxt-link>
      <nuxt-link to="urine">💧</nuxt-link>
      <nuxt-link to="allergy">アレルギー</nuxt-link>
      <nuxt-link to="NewSignUp">新規登録</nuxt-link>
  </div>
 </div>
</template>

<script>
import Login from '~/components/Login.vue'


export default {
 components: {
    Login
},
 computed: {
   user () {
     return this.$store.getters.user
   },
 },
  methods: {
   data(){
     console.log(new Date())
   }
 },
}

</script>

<style lang="scss">
.home-title {
  text-align: center;
  font-size: 200%;
  margin-top: 5%;
}
.link {
  text-align: center;
  margin-top: 5%;
  margin-bottom: 10%;
}
.memo-container {
  text-align: center;
  margin: 5%;
}
.icon-img {
  width: 20%;
}
</style>
