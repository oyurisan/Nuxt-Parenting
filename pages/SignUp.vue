<template>
<div class="signup">
  <h3>新規登録画面</h3>
  <p>赤ちゃんのニックネーム</p>
<input type="text">
<br>
<label id="girl">
<input id="girl" type="radio"  name="gender" >女の子
</label>
<label id="boy">
<input id="boy" type="radio" name="gender">男の子
</label>
<label id="none">
<input id="none" type="radio" name="gender">設定なし
</label>
<br>
<div>生年月日</div>
<input type="date"><button>リセット</button>
<br>
<button>登録</button>

</div>


</template>

<script>

</script>

<style>
.signup {
  width: 500px;
  margin: auto;
  background-color:rgb(150, 139, 139)
}

</style>