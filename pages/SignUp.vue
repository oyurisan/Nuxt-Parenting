<template>
<div class="signup">
  <h3>新規登録画面</h3>
  <p>赤ちゃんのニックネーム</p>
<input v-model="babyname" type="text">
<br>
<label id="女">
<input id="女" v-model="gender"  type="radio" name="gender" value="女">女の子
</label>
<label id="男">
<input id="男" v-model="gender" type="radio" name="gender" value="男">男の子
</label>
<label id="なし">
<input id="なし" v-model="gender" type="radio" name="gender" value="なし">設定なし
</label>
<br>
<div>生年月日</div>
<input v-model="birthday" type="date"><button class="reset">リセット</button>
<br>
<button @click="addinfo" class="touroku">登録</button>
</div>
</template>

<script>

export default{
  data(){
    return{
    babyname:"",
    gender:"",
    birthday:""
    }
  },
  created(){
  this.$store.dispatch('Signup/init')
  console.log( this.$store.dispatch('Signup/init'))
  },
  methods: {
    addinfo(){
      console.log(this.birthday)
      alert(`この内容で登録してもよろしいでしょうか`)
      this.$store.dispatch('Signup/add',{
        babyname:this.babyname,
        birthday:this.birthday,
        gender:this.gender
      })
    },
    // resetinfo(){
    //   this.babyname="",
    //   this.birthday="",
    //   this.gender=""
    // }
  }
}

</script>

<style>
.signup {
  font-family: Meiyou, Georgia, 'Times New Roman', Times, serif;
  width: 400px;
  margin: auto;
}
.touroku{
  border: 2px solid #000;
  border-radius: 0;
  background: #fff;
}
.touroku:hover {
  color: #fff;
  background: #000;
}
.reset{
  border: 2px solid #000;
  border-radius: 0;
  background: #fff;
}
.reset:hover {
  color: #fff;
  background: #000;
}

</style>