<template>
  <div class="allergy">
    <div class="title">
      <h2>アレルギーリスト登録画面</h2>
    </div>
    <p>表示義務７品目</p>
    <div class="container">
      <div v-for="item in foodduty" :key="item.foodname">
        <img
          :src="require(`~/assets/` + item.icon)"
          width="30px"
          height="30px"
        />
        <div class="boxs">
          <label name="allergy" class="label">
            {{ item.foodname }}
            <input type="checkbox" name="allergy" class="allergy">
          </label>
        </div>
      </div>
    </div>
    <p></p>
    <p>表示推奨２０品目</p>
    <div class="container">
      <div v-for="item in foodreco" :key="item.foodname">
        <img
          :src="require(`~/assets/` + item.icon)"
          width="30px"
          height="30px"
        />
        <label name="allergy">
          {{ item.foodname }}
          <input type="checkbox" name="allergy" />
        </label>
      </div>
    </div>
    <button class="touroku" @click="allergy">アレルギー登録</button>
    <button class="touroku" @click="addAllergy">アレルギー登録</button>
  </div>
</template>

<script>
// import Vue from 'vue'

export default {
  data() {
    return {
      foodduty: [
        { foodname: `えび`, icon: '1.jpg' },
        { foodname: `かに`, icon: '2.jpg' },
        { foodname: `小麦`, icon: '3.jpg' },
        { foodname: `そば`, icon: '4.jpg' },
        { foodname: `卵`, icon: '5.jpg' },
        { foodname: `乳`, icon: '6.jpg' },
        { foodname: `落花生`, icon: '7.jpg' },
      ],
      foodreco: [
        { foodname: `あわび`, icon: '8.jpg' },
        { foodname: `イカ`, icon: '9.jpg' },
        { foodname: `いくら`, icon: '10.jpg' },
        { foodname: `オレンジ`, icon: '11.jpg' },
        { foodname: `カシューナッツ`, icon: '12.jpg' },
        { foodname: `キウイフルーツ`, icon: '13.jpg' },
        { foodname: `牛肉`, icon: '15.jpg' },
        { foodname: `くるみ`, icon: '16.jpg' },
        { foodname: `ごま`, icon: '17.jpg' },
        { foodname: `さけ`, icon: '18.jpg' },
        { foodname: `さば`, icon: '19.jpg' },
        { foodname: `大豆`, icon: '20.jpg' },
        { foodname: `鶏肉`, icon: '21.jpg' },
        { foodname: `豚肉`, icon: '22.jpg' },
        { foodname: `バナナ`, icon: '23.jpg' },
        { foodname: `まつたけ`, icon: '25.jpg' },
        { foodname: `もも`, icon: '26.jpg' },
        { foodname: `ヤマイモ`, icon: '27.jpg' },
        { foodname: `りんご`, icon: '28.jpg' },
        { foodname: `ゼラチン`, icon: '29.jpg' },
      ],
    }
  },
  methods:{
    addAllergy () {
      this.$router.push({ name: 'index' })
    },
    allergy(){
    const allergy=document.getElementByIdClassName('allergy')
    let str="";
    for(i=0;i<7;i++){
if(allergy[i].checked===true){
  str+=allergy[i].value+"";
}
    }
    alert(str)
    console.log(str)
}
  }}
</script>

<style lang="scss">
.container {
  display: flex;
  flex-wrap: wrap;
  gap: 10px 10px;
}
.title {
  text-align: center;
}
.item {
  flex-wrap: wrap;
}
.allergy {
  font-family: Meiyou, Georgia, 'Times New Roman', Times, serif;
  width: 400px;
  margin: auto;
}
.touroku {
  border: 2px solid #000;
  border-radius: 0;
  background: #fff;
  &:hover {
    color: #fff;
    background: #000;
  }
}
.checkbox {
  font-family: FontAwesome;
  display: inline-block;
}
.checkbox {
  content: '\f096';
}
.checkbox {
  letter-spacing: 10px;
}
.checkbox {
  content: '\f046';
}
.checkbox {
  letter-spacing: 5px;
}
</style>
