<template>
<div class="login">
 email:<input v-model="email" type="email" placeholder="email" ><br>password:<input v-model="password" type="password" placeholder="password">
 <button class="logins" @click="login">ログイン</button>
 <button class="logins" @click="logout">ログアウト</button>
 <p v-if="user.login">
   ログインに成功<br>
   {{user}}
 </p>
</div>
</template>

<script>
export default {
 data(){
        return{
            email:"",
            password:""
        }
    },
        computed:{
      user(){
        return this.$store.getters.user
      }
    },
  methods: {
        login(email,password){
         this.$store.dispatch('login',{email:this.email,password:this.password})
        },
        logout(){
          this.$store.dispatch('logout')
        }
    },
}
</script>
<style>
.logins{
  border: 2px solid #000;
  border-radius: 0;
  background: #fff;
}
.logins:hover {
  color: #fff;
  background: #000;
}
</style>