<template>
  <div>
    <div class="profileImg">
      <div class="profile-title">PROFILE</div>

      <div><img class="profile-hr" :src="require(`~/assets/hr.png`)" /></div>

      <div>
        <img :src="FinalproImg2" />
      </div>

      <div class="profile-container">
        <!-- デプロイ後 -->
        <!-- <div class="upload-img">
          <upload v-model="picture" />
        </div> -->
        <div class="profile-main">
          <div>
            <div v-for="userItemName in FinalMainData.babyname" :key="userItemName.id">
              名前 :
              <span>{{ userItemName }}</span>
            </div>

            <div v-for="userItemGender in FinalMainData.gender" :key="userItemGender.id">
              性別 :
              <span>{{ userItemGender }}</span>
            </div>

            <div v-for="userItemBirth in FinalMainData.birth" :key="userItemBirth.id">
              生年月日 :
              <span>{{ userItemBirth }}</span>
            </div>

            <div v-for="userItemHeight in FinalMainData.height" :key="userItemHeight.id">
              身長 :
              <span>{{ userItemHeight }} cm</span>
            </div>

            <div v-for="userItemWeight in FinalMainData.weight" :key="userItemWeight.id">
              体重 :
              <span>{{ userItemWeight }} g</span>
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
// import Upload from '../components/imgUpLoad'
export default {
  // components: {
  //   Upload,
  // },
  data() {
    return {
      name: '',
      gender: '',
      birth: '',
      height: '',
      weight: '',
      picture: null,
      FinalImg: [],
      FinalproImg: [],
      FinalproImg2: "",
      // オブジェクト型にして保存、配列から呼び出し
      FinalMainData: [],
    }
  },
  head: {
    title: 'プロフィール画面',
  },
  computed: {
    ...mapGetters(['getAllData', 'getUser']),
  },
  created() {
    // アレルギー！
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

// プロフィール画像
    const proImg = this.getUser.usersSign
    const proImg2 = []
    // console.log(proImg);

    const lastProImgArray1 = proImg
    const lastProImgArray2 = JSON.stringify(lastProImgArray1)
    let lastProImgArray3 = []
    if (lastProImgArray2) {
      lastProImgArray3 = JSON.parse(lastProImgArray2)

      // console.log(lastProImgArray3);

    for ( let ii = 0; ii < lastProImgArray3.length; ii++ ) {

      // console.log(lastProImgArray3[ii].picture);

      const finalproImg = proImg2.concat(lastProImgArray3[ii].picture)
      this.FinalproImg2 = finalproImg
    }
    // console.log(this.FinalproImg2);
    }


    // 名前とか体重まで
    const mainData = this.getUser.usersSign
    const mainData2 = []

    const mainDataArray1 = mainData
    const mainDataArray2 = JSON.stringify(mainDataArray1)
    let mainDataArray3 = []
    if (mainDataArray2) {
      mainDataArray3 = JSON.parse(mainDataArray2)
      console.log(mainDataArray3);
    }
    for ( let ii = 0; ii < mainDataArray3.length; ii++ ) {

      console.log(mainDataArray3[ii]);

      const finalMainDataName = mainData2.concat(mainDataArray3[ii].babyname)
      const finalMainDataGender = mainData2.concat(mainDataArray3[ii].gender)
      const finalMainDataBirth = mainData2.concat(mainDataArray3[ii].birthday)
      const finalMainDataHeight = mainData2.concat(mainDataArray3[ii].height)
      const finalMainDataWeight = mainData2.concat(mainDataArray3[ii].weight)
      this.FinalMainData.babyname = finalMainDataName
      this.FinalMainData.gender = finalMainDataGender
      this.FinalMainData.birthday = finalMainDataBirth
      this.FinalMainData.height = finalMainDataHeight
      this.FinalMainData.weight = finalMainDataWeight
    }
    console.log(this.FinalMainData);
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