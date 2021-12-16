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

          <div>
            身長 :
            <span>{{ height }} cm</span>
          </div>

          <div>
            体重 :
            <span>{{ weight }} kg</span>
          </div>
        </div>
      </div>

      <div class="allergy-nav">
        アレルギー
        <div v-for="allergyI in FinalImg" :key="allergyI.id">
          <div class="container2">
            <div v-for="i in allergyI.newallergy" :key="i.id">
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
      name: '優子',
      gender: '女の子',
      birth: '',
      height: '',
      weight: '',
      picture: null,
      foodduty: [
        { foodname: `えび`, icon: '1.jpg' },
        { foodname: `かに`, icon: '2.jpg' },
        { foodname: `小麦`, icon: '3.jpg' },
        { foodname: `そば`, icon: '4.jpg' },
        { foodname: `卵`, icon: '5.jpg' },
        { foodname: `乳`, icon: '6.jpg' },
        { foodname: `落花生`, icon: '7.jpg' },
      ],
      foodreco: [
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
  gap: 10px 10px;
}
.profile-container {
  display: flex;
  margin: 8% auto 10% auto;
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
  margin-left: 14%;
}

.allergy-nav {
  text-align: center;
  margin-bottom: 10%;
}
</style>