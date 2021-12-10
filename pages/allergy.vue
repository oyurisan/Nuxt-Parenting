<template>
  <div class="allergy">
    <div class="allergy-title">ALLERGY PAGE</div>
    <p>表示義務７品目</p>
    <div class="container">
      <div v-for="item in foodduty" :key="item.foodname" class="allergy">
        <div class="item">
          <img
            :src="require(`~/assets/` + item.icon)"
            width="30px"
            height="30px"
          />
          <label name="allergy">
            {{ item.foodname }}
            <input
              type="checkbox"
              name="allergy"
              class="allergy"
              :value="item.foodname"
            />
          </label>
        </div>
      </div>
    </div>
    <p>表示推奨２０品目</p>
    <div class="container">
      <div v-for="item in foodreco" :key="item.foodname">
        <div class="item">
          <img
            :src="require(`~/assets/` + item.icon)"
            width="30px"
            height="30px"
          />
          <label name="allergy">
            {{ item.foodname }}
            <input
              type="checkbox"
              name="allergy"
              class="allergy"
              :value="item.icon"
            />
          </label>
        </div>
      </div>
    </div>

    <div class="m-3">
      <button
        class="
          px-2
          py-1
          bg-red-900
          text-xl text-white
          font-semibold
          rounded
          hover:bg-red-900
          w-56
        "
        @click="getallergy"
      >
        <div class="button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            width="30px"
            height="30px"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="{2}"
              d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"
            /></svg
          >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 保存
        </div>
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data() {
    return {
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
  methods: {
    addAllergy() {
      this.$router.push({ name: 'index' })
    },
    getallergy() {
      const allergy = document.getElementsByClassName('allergy')
      const newallergy = []
      for (let i = 0; i < allergy.length; i++) {
        console.log(allergy[i])
        if (allergy[i].checked === true) {
          newallergy.push(allergy[i].value)
        }
      }
      const allergys = {
        newallergy,
      }
      this.allergyupdate(allergys)
      this.$store.dispatch('fetchUser')
    },
    ...mapActions(['allergyupdate']),
  },
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Gluten:wght@700&display=swap');

.container {
  display: flex;
  flex-wrap: wrap;
  align-content: stretch;
}
.allergy-title {
  text-align: center;
  font-size: 200%;
  margin: 5% 0 5% 0;
  font-family: 'Gluten', cursive;
  color: rgb(133, 110, 110);
}
.allergy {
  text-align: center;
  margin: 5%;
}
.touroku {
  border: 2px solid #000;
  border-radius: 0;
  background: #fff;
  &:hover {
    color: #fff;
    background: #000;
  }
}
.button {
  display: flex;
}
.item {
  flex-basis: auto;
}
</style>
