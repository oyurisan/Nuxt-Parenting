<template lang="javascript">
<div class="container">
  <div class=" diary-title">Baby Diary</div>
   <!-- <div class="food-title">日記</div>
     <editor
       api-key="c99sb34ryqc6b8inobijqizl016zw4h1a5t0nazkgqf4lzn4"
       :init="{
         selector: 'textarea',
         height : 300,
         branding: false,
         height: 300,
         language: 'ja',
         menubar: true,
         element_format : 'html',
         plugins: [
           'advlist autolink lists link image charmap print preview anchor',
           'searchreplace visualblocks code fullscreen',
           'insertdatetime media table paste code help wordcount',
           'image'
         ],
         toolbar:
           'undo redo | formatselect | bold italic backcolor | \
           alignleft aligncenter alignright alignjustify | \
           bullist numlist outdent indent | removeformat | link image | emoticons,'
       }"
       v-model="content"
     />
        <div class="m-3">
    <button class="px-2 py-1 bg-red-900 text-xl text-white font-semibold rounded hover:bg-red-900 w-56" @click="add">
      <div class="button">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="30px" height="30px">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
</svg>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
保存</div></button></div>
<h2>日記投稿一覧</h2>
    <div v-for="item in diary" :key="item.content">
{{content}}
    </div> -->
 <div class="drop_area">
   日時：<input  v-model="date" type="date"> <br>
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
      <share-network
      url = " https://vuejs.org/ "
                       title = "プログレッシブJavaScriptフレームワーク"
                       description = "インタラクティブなインターフェースを構築するための直感的で高速かつ構成可能なMVVM。 "
                       quote = " Vueはユーザーを構築するためのプログレッシブフレームワークですインターフェイス。「
                      ハッシュタグ=」vuejs、ジャバスクリプト、フレームワーク「
                      さえずりユーザ=」vuejs "
                      network="twitter"> 
      <a class="buttons" href="https://twitter.com/share?url=https://haniwaman.com/original-share-btn/&text=message" rel="nofollow" target="_blank">Twitter</a>
      <a href="https://social-plugins.line.me/lineit/share?url=【エンコードしたURL】">LINEで送る</a>
      
    </share-network>
     <div class="m-3">
    <button class="px-2 py-1 bg-red-900 text-xl text-white font-semibold rounded hover:bg-red-900 w-56" @click="add">
      <div class="button">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="30px" height="30px">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
</svg>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
投稿</div></button>
<!-- <ol><div class="days">Baby Days</div> -->
  <li v-for="item in diary" :key="item.message">
    {{item.date}}
    {{item.message}}
    {{item.photo}}
  </li>
</ol>
{{date}}{{message}}
</div>
</div>
</template>
<script  src = " /dist/vue-social-sharing.js "></script>
<script defer src="https://use.fontawesome.com/releases/v5.0.6/js/all.js"></script>
<script SRC = "https://unpkg.com/vue-social-sharing@3.0.8/dist/vue-social-sharing.js" > </script>
<script>
import Vue from 'vue'
import { mapActions } from 'vuex'
import Editor from '@tinymce/tinymce-vue'
import VueSocialSharing from 'vue-social-sharing'
import { ShareNetwork } from '../node_modules/vue-social-sharing/dist/vue-social-sharing'
Vue.use(VueSocialSharing)
Vue.component('Editor', Editor)

export default {
  components: { ShareNetwork },
  data() {
    return {
      diary:[{date:"",message:"",photo:""}],
      date:"",
      message:""
    }
  },
  component:{
  },
  methods: {
    add() {
      alert(`この内容を登録してもよろしいでしょうか`)
      const diarys={
        diarydate:this.date,
        message:this.message,
        // photo:this.photo
        }
      this.diaryupdate(diarys)
      this.date=""
      this.message=""
    },
    mounted() {
      this.createSnsUrl()
    },
    ...mapActions(["diaryupdate"])
  },
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Gluten:wght@700&display=swap');

.container {
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // font-size: 20px;
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
}
.days{
  font-size: 40px;
}
.buttons{
  display: inline-block;
  padding: .6em 1em .6em 2.5em;
  margin: 0 0 .4em;
  background-color: #55acee;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  position: relative;
  text-decoration: none;
}
.buttos::after {
  position: absolute;
  content: '\f099';
  font-family: 'Font Awesome 5 Brands';
  font-weight: 400;
  top: 50%;
  left: .5em;
  transform: translateY(-50%);
  font-size: 1.2em;
}

    .enter {
    border: 10px dotted powderblue;
    }
</style>
