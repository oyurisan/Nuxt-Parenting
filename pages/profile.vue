<template>
  <div>
    <div class="profileImg">
      <div class="profile-title">PROFILE</div>
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
      
      <div v-for="allergyItem in getAllData.allergy" :key="allergyItem.id">
        <div class="container2">
          <div v-for="item in allergyItem.newallergy" :key="item.id">
            <img
              :src="require(`~/assets/` + item)"
              width="70px"
              height="70px"
            />
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
    }
  },
  head: {
    title: 'プロフィール画面',
  },
  computed: {
    ...mapGetters(['getAllData']),
  },
  created() {
    this.$store.dispatch('fetchAllData')
  },
}
</script>


<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Gluten:wght@700&display=swap');

.container2 {
  display: flex;
  flex-wrap: wrap;
  // gap: 10px 10px;
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

  &::after {
    background-color: #f3a3a8; /* 1個目（一番左）のドットの色 */
    border-radius: 50%;
    content: '';
    // margin-left: 15px; /* 最後の文字とドットとの余白 */
    position: absolute;
    top: 275px;
    left: 635px;
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
  }
}
.upload-img {
  text-align: center;
  margin-left: 20%;
}

.allergy-nav {
  text-align: center;
}
</style>