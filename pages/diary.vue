<template lang="javascript">
<div class="container">
  <div class=" diary-title">Baby Diary</div><i class="fab fa-twitter"></i>
  <div class="flame-diary">
        <div class="diary-flower" />
 <div class="drop_area">
   日時：<input  v-model="date" type="date"> <br><i class="fab fa-facebook-f"></i>
       <textarea
       v-model="message"
       v-bind="message"
        class="textarea"
        cols="30"
        rows="5"
        name="Memo"
        placeholder=" タップしてテキストを入力"
        maxlength="500"
      /><br>
            <input  type="file"> <br>
        </div>
        <ul class="snsbtniti">
          <li><a  href="https://twitter.com/share?url=https://haniwaman.com/original-share-btn/&text=『３歳以下の子供に使える子育てアプリ』
      " rel="nofollow" target="_blank" class="flowbtn6 fl_tw1"><img src="~/assets/000a.jpg" width="50px" height="50px" class="pic"></a></li>
    <li><a href="https://www.facebook.com/hogehoge" class="flowbtn6 insta_btn6"><img src="~/assets/in.jpg" width="50px" height="50px" class="pic"></a></li>
    <li><a href="FacebookページのURL" class="flowbtn6 fl_fb6"><img src="~/assets/fa.jpg" width="50px" height="50px" class="pic"></a></li>
    <li><a href="https://line.me/ti/p/%ライン＠のアカウント" class="flowbtn6 fl_li1"><i class="fas fa-at"></i></a></li>
        </ul>
     <div class="m-3">
    <button  @click="add">
      <div class="button">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="30px" height="30px">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
</svg>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
投稿</div></button>
<div class=" diary-title">Baby Diarys</div>
  <div v-for="item in diary" :key="item.message">
    {{item.date}}
    {{item.message}}
    {{item.photo}}
  <div class="containers">
<div class="item">
    2021/12/11
     <img
          src="~/assets/human.jpg"
          width="150px"
          height="150px"
        />
        よく笑いました。
    </div>
    <div class="item">
         2021/12/12
     <img
          src="~/assets/human.jpg"
          width="150px"
          height="150px"
        />
        友達ができました。
        </div>
        <div class="item">
         2021/12/13
     <img
          src="~/assets/human.jpg"
          width="150px"
          height="150px"
        />
        ご飯をよく食べました。
        </div>
        
  </div>
  </div>
</div>
</div>
</div>
</template>

<script  src = " /dist/vue-social-sharing.js "></script>
  <script defer src="/your-path-to-fontawesome/js/brands.js"></script>
  <script defer src="/your-path-to-fontawesome/js/solid.js"></script>
  <script defer src="/your-path-to-fontawesome/js/fontawesome.js"></script>
<script SRC = "https://unpkg.com/vue-social-sharing@3.0.8/dist/vue-social-sharing.js" >

</script>
<script>
import Vue from 'vue'
import { mapActions } from 'vuex'
import Editor from '@tinymce/tinymce-vue'
import VueSocialSharing from 'vue-social-sharing'
import { ShareNetwork } from '../node_modules/vue-social-sharing/dist/vue-social-sharing'
// import 'vue-awesome/icons'
// import Icon from 'vue-awesome/components/Icon'
Vue.use(VueSocialSharing)
Vue.component('Editor', Editor)
// Vue.component('v-icon', Icon)

export default {
  components: { ShareNetwork },
  data() {
    return {
      diary: [{ date: '', message: '', photo: '' }],
      date: '',
      message: '',
    }
  },
  head: {
    title: '思い出',
  },
    created() {
    console.log(this.$store.state)
    console.log(this.$store.state.UserInfo)
  },
  component: {},
  methods: {
    add() {
      alert(`この内容を登録してもよろしいでしょうか`)
      const diarys = {
        diarydate: this.date,
        message: this.message,
        // photo:this.photo
        UserInfo: this.$store.state.UserInfo,
      }
      this.diaryupdate(diarys)
      this.date = ''
      this.message = ''
    },
    mounted() {
      this.createSnsUrl()
    },
    ...mapActions(['diaryupdate']),
  },
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Gluten:wght@700&display=swap');

.container {
  text-align: center;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // font-size: 20px;
}
.containers{
  display: flex;
  flex-wrap: wrap;
   justify-content: center; 
}
.button {
  display: flex;
}
.diary-title {
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
    left: 610px;
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
      /* 11個目のドットの位置と色 */ 220px 0px 0px rgb(217, 204, 179); /* 12個目のドットの位置と色 */
  }
}

.diary-flower {
  &::before {
    content: '❋ *'; /*花に見せかけるためのアスタリスク*/
    color: #fff; /* アスタリスクの色 */
    display: inline-block;
    font-size: 35px; /* アスタリスクの大きさ */
    font-weight: bold;
    left: 20%;
    top: 80%;
    position: absolute;
    transform: rotate(20deg);
    -moz-transform: rotate(20deg);
    -webkit-transform: rotate(20deg);
    -o-transform: rotate(20deg);
    text-shadow: 0px 0px 6px #fff2f2e5, 0px 0px 10px #fff6f9, 0 0 10px #e4c2ce; /* アスタリスク周りの影 */
    transform: rotate(45deg);
  }
}

.flame-diary {
  margin: 0 auto 3% auto;
  background-color: #fff2f2e5;
  padding: 5%;
  width: 80%;
  border-left: 5px dotted rgba(0, 0, 0, 0.1);
  box-shadow: 0 0 0 5px #fff2f2e5;

  &::before {
    content: '✻'; /*花に見せかけるためのアスタリスク*/
    color: #fff; /* アスタリスクの色 */
    display: inline-block;
    font-size: 40px; /* アスタリスクの大きさ */
    font-weight: bold;
    left: 75%;
    top: 45%;
    position: absolute;
    transform: rotate(20deg);
    -moz-transform: rotate(20deg);
    -webkit-transform: rotate(20deg);
    -o-transform: rotate(20deg);
    text-shadow: 0px 0px 6px #fff2f2e5, 0px 0px 10px #fff6f9, 0 0 10px #e4c2ce; /* アスタリスク周りの影 */
  }
}

.days {
  font-size: 40px;
}
.buttons {
  text-align: center;
  display: inline-block;
  padding: 0.6em 1em 0.6em 2.5em;
  margin: 0 0 0.4em;
  background-color: #55acee;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  position: relative;
  text-decoration: none;

  &::after {
  position: absolute;
  content: '\f099';
  font-family: 'Font Awesome 5 Brands';
  font-weight: 400;
  top: 50%;
  left: 0.5em;
  transform: translateY(-50%);
  font-size: 1.2em;
}
}
.enter {
  border: 10px dotted powderblue;
}
.button {
  display: flex;
  border-radius: 0;
  background: rgb(180, 98, 98);
  margin: 5% 0 5% 0;
  width: 250px;
  padding: 5px;
  border-radius: 30px;
  &:hover {
    background: rgb(177, 90, 90);
  }
}
/* ボタン全体 */
.flowbtn6{
border-radius:13px;		
position:relative;
display:inline-block;
width:50px;
height:50px;
font-size:33px;
color:#fff!important;
transition:.5s;
text-decoration:none;
}
// /* アイコンをど真ん中に*/
.flowbtn6 i{
position:absolute;
top:50%;
left:50%;
-ms-transform:translate(-50%,-50%);
-webkit-transform:translate(-50%,-50%);
transform:translate(-50%,-50%);
}
/* ulタグの内側余白を０にする */
ul.snsbtniti{
padding:0!important;
}
// /* アイコンボタン全体の位置 */
.snsbtniti{
display:flex;
flex-wrap: wrap;
 justify-content: center; 
}
/* アイコンボタン同士の余白 */
.snsbtniti li{
flex:20% 0 20%;
text-align:center!important;
}
/* アイコンボタンにマウスを乗せた時 */
.flowbtn6:hover{
-webkit-transform:translateY(-5px);
-ms-transform:translateY(-5px);
transform:translateY(-5px);
}
/* Twitter */
.fl_tw1{
background:#55acee;
}
/* LINE@ */
.fl_li6{
background:#00c300;			
}
/* Instagram紫グラデ背景 */
.insta_btn6 {
background:-webkit-linear-gradient(135deg, #427eff 0%, #f13f79 70%) no-repeat;
background:linear-gradient(135deg, #427eff 0%, #f13f79 70%) no-repeat;
overflow:hidden;	
}
/* Instagramオレンジグラデ背景 */
// .insta_btn6:before{
// content: '';
// position: absolute;
// top:27px;
// left:-12px;
// width:59px;
// height:40px;
// background:-webkit-radial-gradient(#ffdb2c 7%, rgba(255, 105, 34, 0.3) 60%, rgba(255, 88, 96, 0) 70%);
// background:radial-gradient(#ffdb2c 7%, rgba(255, 105, 34, 0.3) 60%, rgba(255, 88, 96, 0) 70%);
// }
/* Facebookアイコン位置 */
.fl_fb6 .fa-facebook-f{
// position:relative;
// top:23px;
// left:17px;
// font-size:43px;
}
// /* Facebookアイコン背景*/
// .fl_fb6{
// background:-webkit-linear-gradient(top, #5c80c6 0%, #34528c 74%);	
// background:linear-gradient(to bottom, #5c80c6 0%, #34528c 65%);	
// }
/* LINE@ */
.fl_li6{
background:#00c300;			
}
.pic{
  border-radius:20%;
}
</style>
