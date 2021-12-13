<template>
  <div class="allergy">
    <div class="allergy-title">
      ALLERGY PAGE
    </div>
    <div class="box_sample03">
    <div class="container">
      <div v-for="item in foodduty" :key="item.foodname" class="allergy">
    <div class="item">
        <img
          :src="require(`~/assets/` + item.icon)"
          width="50px"
          height="50px"
        />
<label class="checknox-wrap">
  <input type="checkbox" >
  <span class="checkmark"></span>
  {{item.foodname}}
</label>
    </div>
    </div>
</div>
</div>
      <div class="m-3">
    <button @click="getallergy">
      <div class="button">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="30px" height="30px">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
</svg>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
保存</div></button></div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

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
    head: {
    title: 'アレルギー管理',
  },
  created(){
console.log(this.$store.state)
console.log(this.$store.state.UserInfo)
  },
  methods: {
    addAllergy() {
      this.$router.push({ name: 'index' })
    },
    getallergy() {
      const allergy = document.getElementsByClassName('allergy')
      const newallergy = []
      for (let i = 0; i < allergy.length; i++) {
        if (allergy[i].checked === true) {
          newallergy.push(allergy[i].value)
        }
      }
      const allergys = {
        newallergy,
        UserInfo:this.$store.state.UserInfo
      }
      this.allergyupdate(allergys)
    },
    ...mapActions(['allergyupdate']),
  },
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Gluten:wght@700&display=swap');
.container{
display: flex;
flex-wrap: wrap;
align-content:stretch;
justify-content: center;
}
.item { 
  flex-basis: auto ;
  flex: 1;
  flex-basis: 100px;
  flex-grow :4;
 flex-basis :auto
  }
.allergy-title {
  text-align: center;
  font-size: 200%;
  margin: 5% 0 5% 0;
  font-family: 'Gluten', cursive;
  color: rgb(133, 110, 110);

   &::after {
    background-color: #f3a3a8; /* 1個目（一番左）のドットの色 */
    border-radius: 50%;
    content: '';
    // margin-left: 15px; /* 最後の文字とドットとの余白 */
    position: absolute;
    top: 275px;
    left: 580px;
    width: 5px; /* ドットの幅 */
    height: 5px; /* ドットの高さ */
    box-shadow: 20px 0px 0px rgb(217, 204, 179),
      /* 2個目のドットの位置と色 */ 40px 0px 0px rgb(217, 204, 179),
      /* 3個目のドットの位置と色 */ 60px 0px 0px rgb(243, 163, 168),
      /* 4個目のドットの位置と色 */ 80px 0px 0px rgb(217, 204, 179),
      /* 5個目のドットの位置と色 */ 100px 0px 0px rgb(217, 204, 179),
      /* 6個目のドットの位置と色 */ 120px 0px 0px rgb(243, 163, 168),
      /* 7個目のドットの位置と色 */ 140px 0px 0px rgb(217, 204, 179),
      /* 8個目のドットの位置と色 */ 160px 0px 0px rgb(217, 204, 179),
      /* 9個目のドットの位置と色 */ 180px 0px 0px rgb(243, 163, 168),
      /* 10個目のドットの位置と色 */ 200px 0px 0px rgb(217, 204, 179),
      /* 11個目のドットの位置と色 */ 220px 0px 0px rgb(217, 204, 179),
      /* 12個目のドットの位置と色 */ 240px 0px 0px rgb(243, 163, 168),
      /* 13個目のドットの位置と色 */ 260px 0px 0px rgb(217, 204, 179),
      /* 14個目のドットの位置と色 */ 280px 0px 0px rgb(217, 204, 179);
  }
}
.allergy {
  margin-left: auto;
  margin-right: auto;
  // padding: 12px 8px;
  align-items: center;
  cursor: pointer;
}
.touroku {
  border: 2px solid #000;
  border-radius: 0;
  background: #fff;
  margin: 5% 0 5% 0;
  &:hover {
    color: #fff;
    background: #000;
  }
}
.box_sample03 {
 border: 1px solid #9e6e7f;
 padding: 5%;
 margin: 0px auto 10px auto;
 width: 95%;
}
.button {
  display: flex;
  border-radius: 0;
   background:rgb(180, 98, 98);
  margin: 5% 0 5% 0;
    width: 250px;
    padding: 5px;
    border-radius:30px;
  &:hover {
  background: rgb(177, 90, 90);
}
}
/* チェックボックス全体 */
.checknox-wrap {
  display: block;
  position: relative;
  padding-left: 30px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 14px;
  user-select: none;
}
/* デフォルトチェックボックス非表示 */
.checknox-wrap input {
  display: none;
}
/* チェックボックスのスタイル */
.checknox-wrap .checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 20px;
  width: 20px;
  background: #EEE;
  border: 2px solid #000;
  box-sizing: border-box;
}
/* チェックマーク作成 */
.checknox-wrap .checkmark:after {
  content: "";
  position: absolute;
  display: none;
  left: 5px;
  top: 0px;
  width: 4px;
  height: 10px;
  border: 2px solid #FFF;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}
/* チェック時のスタイル */
.checknox-wrap input:checked + .checkmark {
  background-color: #8b6a87;
}
/* チェック時 チェックマーク表示 */
.checknox-wrap input:checked + .checkmark:after {
  display: block;
}
.m-3 {
  text-align: center;
}
</style>
