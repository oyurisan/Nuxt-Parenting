<template>
<div>
  <div class="container">
<h3>アレルギー表示義務7品目</h3>
<div v-for="item in foodduty" :key="item.foodname">
品目：{{item.foodname}}<br>
<label name="yes">
<input type="radio" name="yes">はい
</label>
<label name="yes">
<input type="radio" name="yes">いいえ
</label>
</div>

<h3>アレルギー表示推奨20品目</h3>
<div v-for="item in foodreco" :key="item.foodname">
品目：{{item.foodname}}<br>
<label name="yes">
<input type="radio" name="yes">はい
</label>
<label name="yes">
<input type="radio" name="yes">いいえ
</label>
</div>
</div>
</div>
</template>

<script>
// import Vue from 'vue'

export default {
data(){
  return{
foodduty:[
  {foodname:`えび`},
  {foodname:`かに`},
  {foodname:`小麦`},
  {foodname:`そば`},
  {foodname:`卵`},
  {foodname:`乳`},
  {foodname:`落花生`}
],
foodreco:[
  {foodname:`あわび`},
  {foodname:`イカ`},
  {foodname:`いくら`},
  {foodname:`オレンジ`},
  {foodname:`カシューナッツ`},
  {foodname:`キウイ`},
  {foodname:`フルーツ`},
  {foodname:`牛肉`},
  {foodname:`くるみ`},
  {foodname:`ごま`},
  {foodname:`さけ`},
  {foodname:`さば`},
  {foodname:`大豆`},
  {foodname:`鶏`},
  {foodname:`肉`},
  {foodname:`バナナ`},
  {foodname:`豚肉`},
  {foodname:`まつたけ`},
  {foodname:`もも`},
  {foodname:`ヤマイモ`},
  {foodname:`りんご`},
  {foodname:`ゼラチン`}
]
  }
}
}


</script>

<style>

</style>