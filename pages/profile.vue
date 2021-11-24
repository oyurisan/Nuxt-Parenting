<template>
  <div class="profileImg">
    <div class="profile-title">プロフィール画面</div>
    <div class="upload-img">
    <upload v-model="picture" />
    </div>

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
      picture: null,
    }
  },
  head: {
    title: 'プロフィール画面',
  },
}
</script>


<style>
.profileImg {
  width: 70%;
  margin: 5% auto 10% auto
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