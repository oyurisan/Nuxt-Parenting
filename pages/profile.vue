<template>
  <div>
    <div class="profileImg">
      <div class="profile-title">PROFILE</div>

      <div><img class="profile-hr" :src="require(`~/assets/hr.png`)" /></div>

      <div class="profile-container">
        <div class="upload-img">
          <upload v-model="picture" />
        </div>
        <div class="profile-main">

          <div v-for="userItem in this.getUser.usersSign" :key="userItem.id">
            <div>
              名前 :
              <span>{{ userItem.babyname }}</span>
            </div>

            <div>
              性別 :
              <span>{{ userItem.gender }}</span>
            </div>

            <div>
              生年月日 :
              <span>{{ userItem.birthday }}</span>
            </div>

            <div>
              身長 :
              <span>{{ userItem.height }} cm</span>
            </div>

            <div>
              体重 :
              <span>{{ userItem.weight }} kg</span>
            </div>
          </div>

        </div>
      </div>

      <div class="allergy-nav">
        アレルギー
        <div v-for="allergyI in FinalImg" :key="allergyI.id">
          <div class="container2">
            <div class="container2" v-for="i in allergyI.newallergy" :key="i.id">
              <img :src="i" width="70px" height="70px" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Upload from '../components/imgUpLoad'
export default {
  components: {
    Upload,
  },
  data() {
    return {
      name: '',
      gender: '',
      birth: '',
      height: '',
      weight: '',
      picture: null,
      FinalImg: [],
    }
  },
  head: {
    title: 'プロフィール画面',
  },
  computed: {
    ...mapGetters(['getAllData', 'getUser']),
  },
  created() {
    const lastImg = this.getUser.allergy
    const lastImg2 = []
    console.log(lastImg)

    const lastImgArray1 = lastImg
    const lastImgArray2 = JSON.stringify(lastImgArray1)
    let lastImgArray3 = []
    if (lastImgArray2) {
      lastImgArray3 = JSON.parse(lastImgArray2)
    }
    // console.log(lastImgArray3);

    for (let i = 0; i < lastImgArray3.length; i++) {
      // console.log(lastImgArray3[i]);

      const finalImg = lastImg2.concat(lastImgArray3[i])
      // console.log(finalImg);

      this.FinalImg = finalImg
      // console.log(this.FinalImg);
    }
  },
}
</script>


<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Gluten:wght@700&display=swap');

.container2 {
  display: flex;
  flex-wrap: wrap;
  margin: 2% auto 0 auto;
  text-align: center;
}
.profile-container {
  margin: 0 auto 0 auto;
  width: 70%;
}
.profileImg {
  width: 70%;
  margin: 5% auto 10% auto;
}
.profile-main {
  margin: 7% auto 0 auto;
  font-size: 20px;
}
.profile-title {
  text-align: center;
  text-align: center;
  font-size: 200%;
  margin-top: 2%;
  margin: 5% 0 5% 0;
  font-family: 'Gluten', cursive;
  color: rgb(133, 110, 110);
}

.profile-hr {
  width: 40%;
  margin: -5% auto 5% auto;
  // text-align: center;
}
.upload-img {
  text-align: center;
}

.allergy-nav {
  text-align: center;
  margin-top: 5%;
  margin-bottom: 10%;
  font-size: 20px;
}
</style>