<template>
  <div>
    <div class="graph-title">
      成長曲線
      <div>(身長・体重)</div>
    </div>

    <div class="hw-button-frame">
      <button class="hw-button" @click="active1">~ 1歳</button>
      <button class="hw-button" @click="active2">1歳 ~ 2歳</button>
      <button class="hw-button" @click="active3">2歳 ~ 3歳</button>
    </div>

    <div>{{this.heightLists2}}</div>
    <div>{{this.word}}</div>
    <div>{{this.kari}}</div>
    <div>{{chartData}}</div>

    <div class="chart">
      <div v-if="isActive"><Chart :options="chartData" /></div>
      <div v-if="isActive2"><Chart2 :options="chartData" :lists2="heightLists2"/></div>
      <div v-if="isActive3"><Chart3 :options="chartData" /></div>
    </div>

    <div class="backHome">
      <nuxt-link to="/">Home</nuxt-link>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Chart from '~/components/Chart.vue'
import Chart2 from '~/components/Chart2.vue'
import Chart3 from '~/components/Chart3.vue'

export default {
  components: {
    Chart,
    Chart2,
    Chart3,
  },

  data() {
    return {
      isActive: false,
      isActive2: false,
      isActive3: false,

      word: [50, 51, 53, 55, 56, 58, 61, 63, 65, 68, 70, 71, 73],
      storeHeightData2: [],
      heightLists2: [],
      kari : ['', '', '', '', '', '', '', '', '', '', '', ''],
    }
  },

  computed: {
    chartData() {
      // get () {

      // console.log(this.word);
      // console.log(this.heightLists2);
      // console.log(this.getAllData.height)
      // console.log(this.getAllData.weight)

      const heightYear = []
      const heightHeight = []
      const heightFinalDates1 = [] // 0.1-1歳

      const heightFinalDates2 = [] // 1.1-2歳
      const endData2 = ['', '', '', '', '', '', '', '', '', '', '', ''] // 1歳1ヶ月 - 1歳12ヶ月データ
      let data101 = '' // 1歳1ヶ月
      let data102 = '' // 1歳2ヶ月
      let data103 = '' // 1歳3ヶ月
      let data104 = '' // 1歳4ヶ月
      let data105 = '' // 1歳5ヶ月
      let data106 = '' // 1歳6ヶ月
      let data107 = '' // 1歳7ヶ月
      let data108 = '' // 1歳8ヶ月
      let data109 = '' // 1歳9ヶ月
      let data110 = '' // 1歳10ヶ月
      let data111 = '' // 1歳11ヶ月
      let data112 = '' // 1歳12ヶ月

      const heightFinalDates3 = [] // 2.1-3歳
      const AllArraysH1 = []; // 0.1-1.12歳 all格納庫

      const WeightYear = []

      // JSONファイルに変換 -> {Ob_ob ~ }を消去
      const heightArray = this.getAllData.height
      const heightArray2 = JSON.stringify(heightArray)
      let heightArray3 = []
      if (heightArray2) {
        heightArray3 = JSON.parse(heightArray2)
        // console.log(heightArray3);
      }

      for (let i = 0; i < heightArray3.length; i++) {
        // console.log(heightArray3[i])
        if (heightArray3[i].babyyear === '1.01') {
          data101 = (heightArray3[i].babyyear === '1.01') && heightArray3[i].height
          endData2[0] = data101
        } else if (heightArray3[i].babyyear === '1.02') {
          data102 = (heightArray3[i].babyyear === '1.02') && heightArray3[i].height
          endData2[1] = data102
        } else if (heightArray3[i].babyyear === '1.03') {
          data103 = (heightArray3[i].babyyear === '1.03') && heightArray3[i].height
          endData2[2] = data103
        } else if (heightArray3[i].babyyear === '1.04') {
          data104 = (heightArray3[i].babyyear === '1.04') && heightArray3[i].height
          endData2[3] = data104
        } else if (heightArray3[i].babyyear === '1.05') {
          data105 = (heightArray3[i].babyyear === '1.05') && heightArray3[i].height
          endData2[4] = data105
        } else if (heightArray3[i].babyyear === '1.06') {
          data106 = (heightArray3[i].babyyear === '1.06') && heightArray3[i].height
          endData2[5] = data106
        } else if (heightArray3[i].babyyear === '1.07') {
          data107 = (heightArray3[i].babyyear === '1.07') && heightArray3[i].height
          endData2[6] = data107
        } else if (heightArray3[i].babyyear === '1.08') {
          data108 = (heightArray3[i].babyyear === '1.08') && heightArray3[i].height
          endData2[7] = data108
        } else if (heightArray3[i].babyyear === '1.09') {
          data109 = (heightArray3[i].babyyear === '1.09') && heightArray3[i].height
          endData2[8] = data109
        } else if (heightArray3[i].babyyear === '1.10') {
          data110 = (heightArray3[i].babyyear === '1.10') && heightArray3[i].height
          endData2[9] = data110
        } else if (heightArray3[i].babyyear === '1.11') {
          data111 = (heightArray3[i].babyyear === '1.11') && heightArray3[i].height
          endData2[10] = data111
        } else if (heightArray3[i].babyyear === '1.12') {
          data112 = (heightArray3[i].babyyear === '1.12') && heightArray3[i].height
          endData2[11] = data112
        }
        console.log(endData2)

        // this.heightLists2.concat (endData2)
        // this.$store.dispatch('setHeightLists2', endData2)
      }

      // for (let ii = 0; ii < heightYear.length; ii++) {
      //   // console.log(heightYear[ii])
      //   if (heightYear[ii] >= 0.01 && heightYear[ii] <= 0.12) {
      //     // const heightHeightObj = {}
      //     // heightHeightObj.height = height[ii]
      //     // console.log(heightObj)
      //     heightFinalDates1.push(heightYear[ii].height)
      //     console.log(heightFinalDates1)

      //   } else if (heightYear[ii] >= 1.01 && heightYear[ii] <= 1.12) {
      //     // const heightObj2 = {}
      //     // heightObj2.label = heightYear[ii]
      //     // console.log(heightObj2)
      //     heightFinalDates2.push(heightYear[ii])
      //     // console.log(heightFinalDates2)

      //   } else if (heightYear[ii] >= 2.01 && heightYear[ii] <= 2.12) {
      //     // const heightObj3 = {}
      //     // heightObj3.label = heightYear[ii]
      //     // console.log(heightObj2)
      //     heightFinalDates3.push(heightYear[ii])
      //     // console.log(heightFinalDates3)
      //   }
      // }

      // for (let iii = 0; iii < heightFinalDates1.length; iii++) {
      //   // console.log(unchiFinalDates2[bbb])
      //   const heightAllData1 = {
      //     height: ''
      //   }
      //   const heightEndDates1 = Object.assign(heightAllData1, heightFinalDates1[iii])
      //   // console.log(unchiEndDates2)
      //   AllArraysH1.push(heightEndDates1)
      //   console.log(AllArraysH1)
      // }

















      // for (let ii2 = 0; ii2 < heightFinalDates2.length; ii2++) {
      //   console.log(heightFinalDates2[ii2])
      //   if (heightFinalDates2[ii2] === '1.01') {
      //     data101 = heightFinalDates2[ii2].height
      //     endData2[0] = data101
      //   } else if (heightFinalDates2[ii2] === '1.02') {
      //     data102 = heightFinalDates2[ii2].height
      //     endData2[1] = data102
      //   } else if (heightFinalDates2[ii2] === '1.03') {
      //     data103 = heightFinalDates2[ii2].height
      //     endData2[2] = data103
      //   } else if (heightFinalDates2[ii2] === '1.04') {
      //     data104 = heightFinalDates2[ii2].height
      //     endData2[3] = data104
      //   } else if (heightFinalDates2[ii2] === '1.05') {
      //     data105 = heightFinalDates2[ii2].height
      //     endData2[4] = data105
      //   } else if (heightFinalDates2[ii2] === '1.06') {
      //     data106 = heightFinalDates2[ii2].height
      //     endData2[5] = data106
      //   } else if (heightFinalDates2[ii2] === '1.07') {
      //     data107 = heightFinalDates2[ii2].height
      //     endData2[6] = data107
      //   } else if (heightFinalDates2[ii2] === '1.08') {
      //     data108 = heightFinalDates2[ii2].height
      //     endData2[7] = data108
      //   } else if (heightFinalDates2[ii2] === '1.09') {
      //     data109 = heightFinalDates2[ii2].height
      //     endData2[8] = data109
      //   } else if (heightFinalDates2[ii2] === '1.10') {
      //     data110 = heightFinalDates2[ii2].height
      //     endData2[9] = data110
      //   } else if (heightFinalDates2[ii2] === '1.11') {
      //     data111 = heightFinalDates2[ii2].height
      //     endData2[10] = data111
      //   } else if (heightFinalDates2[ii2] === '1.12') {
      //     data112 = heightFinalDates2[ii2].height
      //     endData2[11] = data112
      //   }
      // }

      // console.log(endData2)

        // // JSONファイルに変換 -> {Ob_ob ~ }を消去
        // const storeHeightDataArray = this.getHeightLists2
        // const storeHeightDataArray2 = JSON.stringify(storeHeightDataArray)
        // let storeHeightDataArray3 = []
        // if (storeHeightDataArray2) {
        //   storeHeightDataArray3 = JSON.parse(storeHeightDataArray2)
        // }
        // console.log(storeHeightDataArray3)

        // console.log(this.getHeightLists2);

        // this.setHeightLists2(endData2)

        // const heightEndArray2 = storeHeightDataArray3.concat (endData2)
        // console.log(heightEndArray2);
        // console.log(this.getHeightLists2);
        
        
        // const aaa = [0, 51, 53, 55, 56, 58, 61, 63, 65, 68, 70, 71, 73]


        // ふくさよう！！！！！！！！！！！！！
        // return this.heightLists2 = endData2



        // return this.kari[0] = "50";

        return {

        }
      // }
    },

    // array2: {
    //   get(){
    //     return this.heightLists2.concat(this.endData2);
    //   },
      // set(endData2){
      //   this.heightLists2 = endData2
      //   console.log(this.heightLists2);
      // },
    // },
    ...mapActions(['setHeightLists2']),
    ...mapGetters(['getAllData', 'getHeightLists2']),
  },
  // watch: {
  //   chartData: {
  //     deep: true,
  //     handler (endData2) {
  //       this.heightLists2 = endData2
  //     }
  //   }
  // },

  created() {
    const heightListsData2 = this.getHeightLists2
    console.log (heightListsData2)
    // // JSONファイルに変換 -> {Ob_ob ~ }を消去
    //     const storeHeightDataArray = heightListsData2
    //     const storeHeightDataArray2 = JSON.stringify(storeHeightDataArray)
    //     let storeHeightDataArray3 = []
    //     if (storeHeightDataArray2) {
    //       storeHeightDataArray3 = JSON.parse(storeHeightDataArray2)
    //     }
    //     console.log(storeHeightDataArray3);

    this.$store.dispatch('fetchAllData')

    // this.storeHeightData2 = this.$store.state.heightLists2
    // console.log(this.storeHeightData2)

    
  },

  methods: {
    active1() {
      this.isActive = !this.isActive
    },
    active2() {
      this.isActive2 = !this.isActive2
    },
    active3() {
      this.isActive3 = !this.isActive3
    },
  },
}
</script>

<style lang="scss">
.graph-title {
  text-align: center;
  margin: 10% 0 5% 0;
  font-size: 36px;
}
.backHome {
  text-align: center;
  margin: 5% auto 10% auto;
  background-color: darksalmon;
  width: 10%;
}
.hw-button-frame {
  margin: 5% auto 5% auto;
  text-align: center;
}
.hw-button {
  background-color: rgb(209, 124, 149);
  color: rgb(255, 253, 253);
  width: 15%;
  padding: 2.5% auto 2.5% auto;
  text-align: center;
  margin-left: 2%;
  border-radius: 7%;
  &:hover {
    opacity: 0.8;
  }
}
.chart {
  width: 80%;
  margin: 5% auto 5% auto;
}
</style>