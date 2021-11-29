<template>
  <div class="profileImg">
    <div class="profile-title">プロフィール画面</div>
    <div class="profile-container">
      <div class="upload-img">
        <div class="h-48 w-full checker-bg flex items-center justify-center p-4 text-blue-500">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-20 w-20" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd" />
</svg>
    </div>
        <upload v-model="picture" />
      </div>
      <div class="profile-main">
        <div>
          名前 :
          <span>{{ name }}</span>
        </div>

        <div>
          性別 :
          <span>{{ gender }}</span>
        </div>

        <div>
          生年月日 :
          <span>{{ birth }}</span>
        </div>
      </div>
    </div>

    <div>アレルギー :</div>

    <div class="backHome">
      <nuxt-link to="/">Home</nuxt-link>
    </div>
  </div>
</template>

<script>
import Upload from '../components/imgUpLoad'

export default {
  components: {
    Upload,
  },
  data() {
    return {
        name: '崚平',
        gender: '男の子',
        birth: '1996/3/24',
        picture: null,
        aaa:'可愛いおんなんのこ'
    }
  },
  head: {
    title: 'プロフィール画面',
  },
}
</script>


<style lang="scss">
.profile-container {
  display: flex;
  margin: 10% auto 10% auto;
}
.profileImg {
  width: 70%;
  margin: 5% auto 10% auto;
}
.profile-main {
  margin: 10% auto 10% auto;
  font-size: 20px;
}
.profile-title {
  text-align: center;
}
.upload-img {
  text-align: center;
}
.backHome {
  text-align: center;
  margin: 5% auto 10% auto;
  background-color: darksalmon;
  width: 10%;
}
</style>