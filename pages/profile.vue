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

    <div>
      アレルギー :
      <div class="container">
        <div v-for="item in foodduty" :key="item.foodname">
          <img
            :src="require(`~/assets/` + item.icon)"
            width="30px"
            height="30px"
          />
          <div class="boxs">
            <label name="allergy" class="label">
              {{ item.foodname }}
            </label>
          </div>
        </div>
      </div>

      <div class="container">
        <div v-for="item in foodreco" :key="item.foodname">
          <img
            :src="require(`~/assets/` + item.icon)"
            width="30px"
            height="30px"
          />
          <label name="allergy">
            {{ item.foodname }}
          </label>
        </div>
      </div>
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
      name: '崚平',
      gender: '男の子',
      birth: '1996/3/24',
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
        { foodname: `キウイ`, icon: '13.jpg' },
        { foodname: `フルーツ`, icon: '14.jpg' },
        { foodname: `牛肉`, icon: '15.jpg' },
        { foodname: `くるみ`, icon: '16.jpg' },
        { foodname: `ごま`, icon: '17.jpg' },
        { foodname: `さけ`, icon: '18.jpg' },
        { foodname: `さば`, icon: '19.jpg' },
        { foodname: `大豆`, icon: '20.jpg' },
        { foodname: `鶏`, icon: '21.jpg' },
        { foodname: `肉`, icon: '22.jpg' },
        { foodname: `バナナ`, icon: '23.jpg' },
        { foodname: `豚肉`, icon: '24.jpg' },
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
}
</script>


<style lang="scss">
.container {
  display: flex;
  flex-wrap: wrap;
  gap: 10px 10px;
}
.profile-container {
  display: flex;
  margin: 10% 0 10% auto;
}
.profileImg {
  width: 70%;
  margin: 5% auto 10% auto;
}
.profile-main {
  margin: 8% auto 10% auto;
  font-size: 20px;
}
.profile-title {
  text-align: center;
}
.upload-img {
  text-align: center;
  margin-left: 20%;
}
.backHome {
  text-align: center;
  margin: 5% auto 10% auto;
  background-color: darksalmon;
  width: 10%;
}
</style>