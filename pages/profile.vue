<template>
  <div class="profileImg">
    <div class="profile-title">プロフィール画面</div>
    <div class="profile-container">
      <div class="upload-img">
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
      name: '優子',
      gender: '女の子',
      birth: '2021/11/18',
      picture: null,
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