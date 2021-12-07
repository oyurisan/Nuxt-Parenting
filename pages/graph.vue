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

    <!-- <div>{{this.heightLists1}}</div>
    <div>{{this.heightLists2}}</div>
    <div>{{this.heightLists3}}</div>
    <div>{{this.weightLists1}}</div>
    <div>{{this.weightLists2}}</div>
    <div>{{this.weightLists3}}</div>
    <div>{{this.word}}</div> -->


    <div class="chart">
      <div v-if="isActive"><Chart :options="chartData" :lists1="heightLists1" :lists11="weightLists1"/></div>
      <div v-if="isActive2"><Chart2 :options="chartData" :lists2="heightLists2" :lists22="weightLists2"/></div>
      <div v-if="isActive3"><Chart3 :options="chartData" :lists3="heightLists3" :lists33="weightLists3"/></div>
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
      heightLists1: [],
      heightLists2: [],
      heightLists3: [],
      weightLists1: [],
      weightLists2: [],
      weightLists3: [],
      kari : ['', '', '', '', '', '', '', '', '', '', '', ''],
    }
  },

  computed: {
    chartData() {

      // 0歳01ヶ月 - 0歳12ヶ月 データ (身長)
      const endData0 = ['', '', '', '', '', '', '', '', '', '', '', ''] // 1歳1ヶ月 - 1歳12ヶ月データ 身長
      let data001 = '' // 0歳1ヶ月
      let data002 = '' // 0歳2ヶ月
      let data003 = '' // 0歳3ヶ月
      let data004 = '' // 0歳4ヶ月
      let data005 = '' // 0歳5ヶ月
      let data006 = '' // 0歳6ヶ月
      let data007 = '' // 0歳7ヶ月
      let data008 = '' // 0歳8ヶ月
      let data009 = '' // 0歳9ヶ月
      let data010 = '' // 0歳10ヶ月
      let data011 = '' // 0歳11ヶ月
      let data012 = '' // 0歳12ヶ月

      // JSONファイルに変換 -> {Ob_ob ~ }を消去
      const heightArray0 = this.getAllData.height
      const heightArray00 = JSON.stringify(heightArray0)
      let heightArray000 = []
      if (heightArray00) {
        heightArray000 = JSON.parse(heightArray00)
        // console.log(heightArray3);
      }

      for (let i = 0; i < heightArray000.length; i++) {
        // console.log(heightArray3[i])
        if (heightArray000[i].babyyear === '0.01') {
          data001 = (heightArray000[i].babyyear === '0.01') && heightArray000[i].height
          endData0[0] = data001
        } else if (heightArray000[i].babyyear === '0.02') {
          data002 = (heightArray000[i].babyyear === '0.02') && heightArray000[i].height
          endData0[1] = data002
        } else if (heightArray000[i].babyyear === '0.03') {
          data003 = (heightArray000[i].babyyear === '0.03') && heightArray000[i].height
          endData0[2] = data003
        } else if (heightArray000[i].babyyear === '0.04') {
          data004 = (heightArray000[i].babyyear === '0.04') && heightArray000[i].height
          endData0[3] = data004
        } else if (heightArray000[i].babyyear === '0.05') {
          data005 = (heightArray000[i].babyyear === '0.05') && heightArray000[i].height
          endData0[4] = data005
        } else if (heightArray000[i].babyyear === '0.06') {
          data006 = (heightArray000[i].babyyear === '0.06') && heightArray000[i].height
          endData0[5] = data006
        } else if (heightArray000[i].babyyear === '0.07') {
          data007 = (heightArray000[i].babyyear === '0.07') && heightArray000[i].height
          endData0[6] = data007
        } else if (heightArray000[i].babyyear === '0.08') {
          data008 = (heightArray000[i].babyyear === '0.08') && heightArray000[i].height
          endData0[7] = data008
        } else if (heightArray000[i].babyyear === '0.09') {
          data009 = (heightArray000[i].babyyear === '0.09') && heightArray000[i].height
          endData0[8] = data009
        } else if (heightArray000[i].babyyear === '0.10') {
          data010 = (heightArray000[i].babyyear === '0.10') && heightArray000[i].height
          endData0[9] = data010
        } else if (heightArray000[i].babyyear === '0.11') {
          data011 = (heightArray000[i].babyyear === '0.11') && heightArray000[i].height
          endData0[10] = data011
        } else if (heightArray000[i].babyyear === '0.12') {
          data012 = (heightArray000[i].babyyear === '0.12') && heightArray000[i].height
          endData0[11] = data012
        }
        // console.log(endData2)

        // ふくさよう！！！！！！！！！！！！！
        // this.heightLists1 = endData0
        // return this.heightLists2 
      }



// 0歳01ヶ月 - 0歳12ヶ月 データ (体重)
      const endData0W = ['', '', '', '', '', '', '', '', '', '', '', ''] // 1歳1ヶ月 - 1歳12ヶ月データ 身長
      let data001W = '' // 0歳1ヶ月
      let data002W = '' // 0歳2ヶ月
      let data003W = '' // 0歳3ヶ月
      let data004W = '' // 0歳4ヶ月
      let data005W = '' // 0歳5ヶ月
      let data006W = '' // 0歳6ヶ月
      let data007W = '' // 0歳7ヶ月
      let data008W = '' // 0歳8ヶ月
      let data009W = '' // 0歳9ヶ月
      let data010W = '' // 0歳10ヶ月
      let data011W = '' // 0歳11ヶ月
      let data012W = '' // 0歳12ヶ月

      // JSONファイルに変換 -> {Ob_ob ~ }を消去
      const weightArray0 = this.getAllData.weight
      const weightArray00 = JSON.stringify(weightArray0)
      let weightArray000 = []
      if (weightArray00) {
        weightArray000 = JSON.parse(weightArray00)
        // console.log(heightArray000W);
      }

      for (let i = 0; i < weightArray000.length; i++) {
        // console.log(heightArray3[i])
        if (weightArray000[i].babyyear === '0.01') {
          data001W = (weightArray000[i].babyyear === '0.01') && weightArray000[i].weight
          endData0W[0] = data001W
        } else if (weightArray000[i].babyyear === '0.02') {
          data002W = (weightArray000[i].babyyear === '0.02') && weightArray000[i].weight
          endData0W[1] = data002W
        } else if (weightArray000[i].babyyear === '0.03') {
          data003W = (weightArray000[i].babyyear === '0.03') && weightArray000[i].weight
          endData0W[2] = data003W
        } else if (weightArray000[i].babyyear === '0.04') {
          data004W = (weightArray000[i].babyyear === '0.04') && weightArray000[i].weight
          endData0W[3] = data004W
        } else if (weightArray000[i].babyyear === '0.05') {
          data005W = (weightArray000[i].babyyear === '0.05') && weightArray000[i].weight
          endData0W[4] = data005W
        } else if (weightArray000[i].babyyear === '0.06') {
          data006W = (weightArray000[i].babyyear === '0.06') && weightArray000[i].weight
          endData0W[5] = data006W
        } else if (weightArray000[i].babyyear === '0.07') {
          data007W = (weightArray000[i].babyyear === '0.07') && weightArray000[i].weight
          endData0W[6] = data007W
        } else if (weightArray000[i].babyyear === '0.08') {
          data008W = (weightArray000[i].babyyear === '0.08') && weightArray000[i].weight
          endData0W[7] = data008W
        } else if (weightArray000[i].babyyear === '0.09') {
          data009W = (weightArray000[i].babyyear === '0.09') && weightArray000[i].weight
          endData0W[8] = data009W
        } else if (weightArray000[i].babyyear === '0.10') {
          data010W = (weightArray000[i].babyyear === '0.10') && weightArray000[i].weight
          endData0W[9] = data010W
        } else if (weightArray000[i].babyyear === '0.11') {
          data011W = (weightArray000[i].babyyear === '0.11') && weightArray000[i].weight
          endData0W[10] = data011W
        } else if (weightArray000[i].babyyear === '0.12') {
          data012W = (weightArray000[i].babyyear === '0.12') && weightArray000[i].weight
          endData0W[11] = data012W
        }
        // console.log(endData2)

        // ふくさよう！！！！！！！！！！！！！
        // this.weightLists1 = endData0W
        // return this.heightLists2 
      }


       // 1歳01ヶ月 - 1歳12ヶ月 データ (身長)
      const endData2 = ['', '', '', '', '', '', '', '', '', '', '', ''] // 1歳1ヶ月 - 1歳12ヶ月データ 身長
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
        // console.log(endData2)

        // ふくさよう！！！！！！！！！！！！！
        // this.heightLists2 = endData2
        // return this.heightLists2 
      }


      // 1歳01ヶ月 - 1歳12ヶ月 データ (体重)
      const endData2W = ['', '', '', '', '', '', '', '', '', '', '', ''] // 1歳1ヶ月 - 1歳12ヶ月データ 体重
      let data101W = '' // 1歳1ヶ月
      let data102W = '' // 1歳2ヶ月
      let data103W = '' // 1歳3ヶ月
      let data104W = '' // 1歳4ヶ月
      let data105W = '' // 1歳5ヶ月
      let data106W = '' // 1歳6ヶ月
      let data107W = '' // 1歳7ヶ月
      let data108W = '' // 1歳8ヶ月
      let data109W = '' // 1歳9ヶ月
      let data110W = '' // 1歳10ヶ月
      let data111W = '' // 1歳11ヶ月
      let data112W = '' // 1歳12ヶ月

      // JSONファイルに変換 -> {Ob_ob ~ }を消去
      const weightArray = this.getAllData.weight
      const weightArray2 = JSON.stringify(weightArray)
      let weightArray3 = []
      if (weightArray2) {
        weightArray3 = JSON.parse(weightArray2)
        // console.log(weightArray3);
      }

      for (let i = 0; i < weightArray3.length; i++) {
        // console.log(heightArray3[i])
        if (weightArray3[i].babyyear === '1.01') {
          data101W = (weightArray3[i].babyyear === '1.01') && weightArray3[i].weight
          endData2W[0] = data101W
        } else if (weightArray3[i].babyyear === '1.02') {
          data102W = (weightArray3[i].babyyear === '1.02') && weightArray3[i].weight
          endData2W[1] = data102W
        } else if (weightArray3[i].babyyear === '1.03') {
          data103W = (weightArray3[i].babyyear === '1.03') && weightArray3[i].weight
          endData2W[2] = data103W
        } else if (weightArray3[i].babyyear === '1.04') {
          data104W = (weightArray3[i].babyyear === '1.04') && weightArray3[i].weight
          endData2W[3] = data104W
        } else if (weightArray3[i].babyyear === '1.05') {
          data105W = (weightArray3[i].babyyear === '1.05') && weightArray3[i].weight
          endData2W[4] = data105W
        } else if (weightArray3[i].babyyear === '1.06') {
          data106W = (weightArray3[i].babyyear === '1.06') && weightArray3[i].weight
          endData2W[5] = data106W
        } else if (weightArray3[i].babyyear === '1.07') {
          data107W = (weightArray3[i].babyyear === '1.07') && weightArray3[i].weight
          endData2W[6] = data107W
        } else if (weightArray3[i].babyyear === '1.08') {
          data108W = (weightArray3[i].babyyear === '1.08') && weightArray3[i].weight
          endData2W[7] = data108W
        } else if (weightArray3[i].babyyear === '1.09') {
          data109W = (weightArray3[i].babyyear === '1.09') && weightArray3[i].weight
          endData2W[8] = data109W
        } else if (weightArray3[i].babyyear === '1.10') {
          data110W = (weightArray3[i].babyyear === '1.10') && weightArray3[i].weight
          endData2W[9] = data110W
        } else if (weightArray3[i].babyyear === '1.11') {
          data111W = (weightArray3[i].babyyear === '1.11') && weightArray3[i].weight
          endData2W[10] = data111W
        } else if (weightArray3[i].babyyear === '1.12') {
          data112W = (weightArray3[i].babyyear === '1.12') && weightArray3[i].weight
          endData2W[11] = data112W
        }
        // console.log(endData2W)
        // ふくさよう！！！！！！！！！！！！！
        // this.weightLists2 = endData2W
        // return this.heightLists2 

      }



       // 2歳01ヶ月 - 2歳12ヶ月 データ (身長)
      const endData3 = ['', '', '', '', '', '', '', '', '', '', '', ''] // 1歳1ヶ月 - 1歳12ヶ月データ 身長
      let data201 = '' // 1歳1ヶ月
      let data202 = '' // 1歳2ヶ月
      let data203 = '' // 1歳3ヶ月
      let data204 = '' // 1歳4ヶ月
      let data205 = '' // 1歳5ヶ月
      let data206 = '' // 1歳6ヶ月
      let data207 = '' // 1歳7ヶ月
      let data208 = '' // 1歳8ヶ月
      let data209 = '' // 1歳9ヶ月
      let data210 = '' // 1歳10ヶ月
      let data211 = '' // 1歳11ヶ月
      let data212 = '' // 1歳12ヶ月

      // JSONファイルに変換 -> {Ob_ob ~ }を消去
      const heightArray4 = this.getAllData.height
      const heightArray5 = JSON.stringify(heightArray4)
      let heightArray6 = []
      if (heightArray5) {
        heightArray6 = JSON.parse(heightArray5)
        // console.log(heightArray3);
      }

      for (let i = 0; i < heightArray6.length; i++) {
        // console.log(heightArray3[i])
        if (heightArray6[i].babyyear === '2.01') {
          data201 = (heightArray6[i].babyyear === '2.01') && heightArray6[i].height
          endData3[0] = data201
        } else if (heightArray6[i].babyyear === '2.02') {
          data202 = (heightArray3[i].babyyear === '2.02') && heightArray6[i].height
          endData3[1] = data202
        } else if (heightArray6[i].babyyear === '2.03') {
          data203 = (heightArray3[i].babyyear === '2.03') && heightArray6[i].height
          endData3[2] = data203
        } else if (heightArray6[i].babyyear === '2.04') {
          data204 = (heightArray3[i].babyyear === '2.04') && heightArray6[i].height
          endData3[3] = data204
        } else if (heightArray6[i].babyyear === '2.05') {
          data205 = (heightArray3[i].babyyear === '2.05') && heightArray6[i].height
          endData3[4] = data205
        } else if (heightArray6[i].babyyear === '2.06') {
          data206 = (heightArray3[i].babyyear === '2.06') && heightArray6[i].height
          endData3[5] = data206
        } else if (heightArray6[i].babyyear === '2.07') {
          data207 = (heightArray3[i].babyyear === '2.07') && heightArray6[i].height
          endData3[6] = data207
        } else if (heightArray6[i].babyyear === '2.08') {
          data208 = (heightArray3[i].babyyear === '2.08') && heightArray6[i].height
          endData3[7] = data208
        } else if (heightArray6[i].babyyear === '2.09') {
          data209 = (heightArray3[i].babyyear === '2.09') && heightArray6[i].height
          endData3[8] = data209
        } else if (heightArray6[i].babyyear === '2.10') {
          data210 = (heightArray3[i].babyyear === '2.10') && heightArray6[i].height
          endData3[9] = data210
        } else if (heightArray6[i].babyyear === '2.11') {
          data211 = (heightArray3[i].babyyear === '2.11') && heightArray6[i].height
          endData3[10] = data211
        } else if (heightArray6[i].babyyear === '2.12') {
          data212 = (heightArray3[i].babyyear === '2.12') && heightArray6[i].height
          endData3[11] = data212
        }
        // console.log(endData2)

        // ふくさよう！！！！！！！！！！！！！
        // this.heightLists3 = endData3
        // return this.heightLists2 
      }


       // 2歳01ヶ月 - 2歳12ヶ月 データ (体重)
      const endData3W = ['', '', '', '', '', '', '', '', '', '', '', ''] // 1歳1ヶ月 - 1歳12ヶ月データ 身長
      let data201W = '' // 1歳1ヶ月
      let data202W = '' // 1歳2ヶ月
      let data203W = '' // 1歳3ヶ月
      let data204W = '' // 1歳4ヶ月
      let data205W = '' // 1歳5ヶ月
      let data206W = '' // 1歳6ヶ月
      let data207W = '' // 1歳7ヶ月
      let data208W = '' // 1歳8ヶ月
      let data209W = '' // 1歳9ヶ月
      let data210W = '' // 1歳10ヶ月
      let data211W = '' // 1歳11ヶ月
      let data212W = '' // 1歳12ヶ月

      // JSONファイルに変換 -> {Ob_ob ~ }を消去
      const weightArray4 = this.getAllData.weight
      const weightArray5 = JSON.stringify(weightArray4)
      let weightArray6 = []
      if (weightArray5) {
        weightArray6 = JSON.parse(weightArray5)
        // console.log(heightArray3);
      }

      for (let i = 0; i < weightArray6.length; i++) {
        // console.log(heightArray3[i])
        if (weightArray6[i].babyyear === '2.01') {
          data201W = (weightArray6[i].babyyear === '2.01') && weightArray6[i].height
          endData3[0] = data201W
        } else if (weightArray6[i].babyyear === '2.02') {
          data202W = (weightArray3[i].babyyear === '2.02') && weightArray6[i].height
          endData3[1] = data202W
        } else if (weightArray6[i].babyyear === '2.03') {
          data203W = (weightArray3[i].babyyear === '2.03') && weightArray6[i].height
          endData3[2] = data203W
        } else if (weightArray6[i].babyyear === '2.04') {
          data204W = (weightArray3[i].babyyear === '2.04') && weightArray6[i].height
          endData3[3] = data204W
        } else if (weightArray6[i].babyyear === '2.05') {
          data205W = (weightArray3[i].babyyear === '2.05') && weightArray6[i].height
          endData3[4] = data205W
        } else if (weightArray6[i].babyyear === '2.06') {
          data206W = (weightArray3[i].babyyear === '2.06') && weightArray6[i].height
          endData3[5] = data206W
        } else if (weightArray6[i].babyyear === '2.07') {
          data207W = (weightArray3[i].babyyear === '2.07') && weightArray6[i].height
          endData3[6] = data207W
        } else if (weightArray6[i].babyyear === '2.08') {
          data208W = (weightArray3[i].babyyear === '2.08') && weightArray6[i].height
          endData3[7] = data208W
        } else if (weightArray6[i].babyyear === '2.09') {
          data209W = (weightArray3[i].babyyear === '2.09') && weightArray6[i].height
          endData3[8] = data209W
        } else if (weightArray6[i].babyyear === '2.10') {
          data210W = (weightArray3[i].babyyear === '2.10') && weightArray6[i].height
          endData3[9] = data210W
        } else if (weightArray6[i].babyyear === '2.11') {
          data211W = (weightArray3[i].babyyear === '2.11') && weightArray6[i].height
          endData3[10] = data211W
        } else if (weightArray6[i].babyyear === '2.12') {
          data212W = (weightArray3[i].babyyear === '2.12') && weightArray6[i].height
          endData3[11] = data212W
        }
        // console.log(endData2)

        // ふくさよう！！！！！！！！！！！！！
        // this.weightLists3 = endData3W
        // return this.heightLists2 
      }

        return {

        }

  },

    ...mapActions(['setHeightLists2']),
    ...mapGetters(['getAllData', 'getHeightLists2']),
    
  },

  created() {
    // const heightListsData2 = this.getHeightLists2
    // console.log (heightListsData2)
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