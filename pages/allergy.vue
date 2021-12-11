<template>
  <div class="allergy">
    <div class="title">
      アレルギー登録画面
    </div>
    <div class="box_sample03">
    <div class="container">
      <div v-for="item in foodduty" :key="item.foodname" class="allergyy">
    <div class="item">
        <img
          :src="require(`~/assets/` + item.icon)"
          width="50px"
          height="50px"
        />
          <input type="checkbox" id="01-A" name="checkbox01" >
<label for="01-A" class="checkbox01">{{item.foodname}}</label>
    </div>
    </div>
</div>
</div>
      <div class="m-3">
    <button class="px-2 py-1 bg-red-900 text-xl text-white font-semibold rounded hover:bg-red-900 w-56" @click="getallergy">
      <div class="button">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="30px" height="30px">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
</svg>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
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
.title {
  text-align: center;
  font-size: 200%;
  margin: 5% 0 5% 0;
  font-family: 'Gluten', cursive;
  color: rgb(133, 110, 110);
}
.allergyy {
  padding: 12px 8px;
  display: flex;
  align-items: center;
  cursor: pointer;
}
.inputall {
  margin: 0;
  width: 0;
  opacity: 0;
}
.input:hover > .inputall{
  background: #CCCCCC;
}
.input:focus + .all{
  background: #CCCCCC;
}
.input:checked + .all {
  background: #555555;
}
.input:checked + .all::before {
  content: "";
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 35%;
  height: 2px;
  transform: translate(-5px, 6px) rotateZ(-135deg);
  transform-origin: 1px 1px;
  background: #FFFFFF;
}
.input:checked + .all::after {
  content: "";
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 70%;
  height: 2px;
  transform: translate(-5px, 6px) rotateZ(-45deg);
  transform-origin: 1px 1px;
  background: #FFFFFF;
}
.all {
  position: relative;
  top: 0;
  left: 0;
  display: block;
  width: 32px;
  height: 32px;
  background: #F5F5F5;
  box-shadow: 0 1px 4px rgba(0,0,0, .4) inset;
}
.alls {
  margin-left: 12px;
  display: block;
  font-size: 18px;
  font-weight: bold;
}
input[type=checkbox] {
    display: none;
}
.checkbox01 {
    box-sizing: border-box;
    cursor: pointer;
    display: inline-block;
    padding: 5px 30px;
    position: relative;
    width: auto;
}
.checkbox01::before {
    background: #fff;
    border: 1px solid #231815;
    content: '';
    display: block;
    height: 16px;
    left: 5px;
    margin-top: -8px;
    position: absolute;
    top: 50%;
    width: 16px;
}
.checkbox01::after {
    border-right: 3px solid #ed7a9c;
    border-bottom: 3px solid #ed7a9c;
    content: '';
    display: block;
    height: 9px;
    left: 10px;
    margin-top: -7px;
    opacity: 0;
    position: absolute;
    top: 50%;
    transform: rotate(45deg);
    width: 5px;
}
input[type=checkbox]:checked + .checkbox01::after {
    opacity: 1;
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
.button {
  display: flex;
}
.box_sample03 {
 border: 1px solid #9e6e7f;
 padding: 5px;
 margin: 0px 0px 10px 0px;
}
</style>
