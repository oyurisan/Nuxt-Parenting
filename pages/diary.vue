<template lang="javascript">
<div class="container">
   <div class="food-title">日記</div>
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
    </div>

   
</div>
</template>

<script>
import Vue from 'vue'
import Editor from '@tinymce/tinymce-vue'

export default {
  data() {
    return {
      diary: [
        {
          content: '',
        },
      ],
    }
  },
  methods: {
    add() {
      this.diary.push(this.content)
      console.log(this.content)
    },
    //     file_picker_callback(cb, value, meta) {
    // const input = document.createElement('input');
    // input.setAttribute('type', 'file');
    // input.setAttribute('accept', 'image/*');
  },
  //    input.onchange = function () {
  //     var file = this.files[0];
  //   },
  //    const  reader = new FileReader()
  //     reader.onload = function () {

  //       var id = 'blobid' + (new Date()).getTime();
  //       var blobCache =  .activeEditor.editorUpload.blobCache;
  //       var base64 = reader.result.split(',')[1];
  //       var blobInfo = blobCache.create(id, file, base64);
  //       blobCache.add(blobInfo);

  //       /* call the callback and populate the Title field with the file name */
  //       cb(blobInfo.blobUri(), { title: file.name });
  //     };
  //     reader.readAsDataURL(file);
  //   };
  //   input.click();
  // },
}
Vue.component('Editor', Editor)
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 20px;
}
.button {
  display: flex;
}
.food-title {
  text-align: center;
  font-size: 200%;
  margin-top: 10%;
}
</style>
