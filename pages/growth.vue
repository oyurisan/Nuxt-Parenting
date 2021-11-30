<template>
  <div class="growth">
    <div class="food-title"><h2>成長管理</h2></div>
      <div>身長</div>
    <input type="date" name="Date" /><br>
      <select v-model="heightcm">
        <option v-for="item in height" :key="item.cm" v-bind:value="item.cm">
          {{ item.cm }}
        </option></select
      >.
      <select v-model="heightmm">
        <option v-for="item in heights" :key="item.mm" :value="item.mm">
          {{ item.mm }}
        </option></select
      >&nbsp; cm<br>
      <select v-model="heightyear">
        <option v-for="item in year" :key="item.y" :value="item.y">
生後：{{item.y}}歳
        </option>
      </select>
      <select v-model="heightmonth">
        <option v-for="item in month" :key="item.m" :value="item.m">
{{item.m}}ヶ月
        </option>
      </select>
   <button class="touroku" @click="addheight">身長を登録する</button>
  
      <div>体重</div>
         <input type="date" name="Date" /><br>
      <select v-model="weightk">
        <option v-for="item in weight" :key="item.k" :value="item.k">
          {{ item.k }}
        </option></select
      >.
      <select v-model="weightg">
        <option v-for="item in weights" :key="item.g" :value="item.g">
          {{ item.g }}
        </option></select
      >&nbsp; kg<br>
  <select v-model="weightyear">
        <option v-for="item in year" :key="item.y" :value="item.y">
{{item.y}}歳
        </option>
      </select>
      <select v-model="weightmonth">
        <option v-for="item in month" :key="item.m" :value="item.m">
{{item.m}}ヶ月
        </option>
      </select>
    <button class="touroku">体重を登録する</button>
    {{heightcm}}{{heightmm}}{{heightyear}}{{heightmonth}}
  </div>
</template>

<script>
import { mapActions } from "vuex"
// import DateTime from '../components/addDateTime'

export default {
  components: {
    // DateTime,
  },
  data() {
    return {
      height: [
        { cm: `40` },
        { cm: `41` },
        { cm: `43` },
        { cm: `44` },
        { cm: `45` },
        { cm: `46` },
        { cm: `47` },
        { cm: `48` },
        { cm: `49` },
        { cm: `50` },
        { cm: `51` },
        { cm: `52` },
        { cm: `53` },
        { cm: `54` },
        { cm: `55` },
        { cm: `56` },
        { cm: `57` },
        { cm: `58` },
        { cm: `59` },
        { cm: `60` },
        { cm: `61` },
        { cm: `62` },
        { cm: `63` },
        { cm: `64` },
        { cm: `65` },
        { cm: `66` },
        { cm: `67` },
        { cm: `68` },
        { cm: `69` },
        { cm: `70` },
        { cm: `71` },
        { cm: `72` },
        { cm: `73` },
        { cm: `74` },
        { cm: `75` },
        { cm: `76` },
        { cm: `77` },
        { cm: `78` },
        { cm: `79` },
        { cm: `80` },
        { cm: `81` },
        { cm: `82` },
        { cm: `83` },
        { cm: `84` },
        { cm: `85` },
        { cm: `86` },
        { cm: `87` },
        { cm: `88` },
        { cm: `89` },
        { cm: `90` },
        { cm: `91` },
        { cm: `92` },
        { cm: `93` },
        { cm: `94` },
        { cm: `95` },
        { cm: `96` },
        { cm: `97` },
        { cm: `98` },
        { cm: `99` },
        { cm: `100` },
        { cm: `101` },
        { cm: `102` },
        { cm: `103` },
        { cm: `104` },
        { cm: `105` },
        { cm: `106` },
        { cm: `107` },
        { cm: `108` },
        { cm: `109` },
        { cm: `110` },
        { cm: `111` },
        { cm: `112` },
        { cm: `113` },
        { cm: `114` },
        { cm: `115` },
        { cm: `116` },
        { cm: `117` },
        { cm: `118` },
        { cm: `119` },
        { cm: `120` },
        { cm: `121` },
        { cm: `122` },
        { cm: `123` },
        { cm: `124` },
        { cm: `125` },
        { cm: `126` },
        { cm: `127` },
        { cm: `128` },
        { cm: `129` },
        { cm: `130` },
        { cm: `131` },
        { cm: `132` },
        { cm: `133` },
        { cm: `134` },
        { cm: `135` },
        { cm: `136` },
        { cm: `137` },
        { cm: `138` },
        { cm: `139` },
        { cm: `140` },
        { cm: `141` },
        { cm: `142` },
        { cm: `143` },
        { cm: `144` },
        { cm: `145` },
        { cm: `146` },
        { cm: `147` },
        { cm: `148` },
        { cm: `149` },
        { cm: `150` },
        { cm: `151` },
        { cm: `152` },
        { cm: `153` },
        { cm: `154` },
        { cm: `155` },
        { cm: `156` },
        { cm: `157` },
        { cm: `158` },
        { cm: `159` },
        { cm: `160` },
      ],
      heights: [
        { mm: `0` },
        { mm: `1` },
        { mm: `2` },
        { mm: `3` },
        { mm: `4` },
        { mm: `5` },
        { mm: `6` },
        { mm: `7` },
        { mm: `8` },
        { mm: `9` },
      ],
      weight: [
        { k: `0` },
        { k: `1` },
        { k: `2` },
        { k: `3` },
        { k: `4` },
        { k: `5` },
        { k: `6` },
        { k: `7` },
        { k: `8` },
        { k: `9` },
        { k: `10` },
        { k: `11` },
        { k: `12` },
        { k: `13` },
        { k: `14` },
        { k: `15` },
        { k: `16` },
        { k: `17` },
        { k: `18` },
        { k: `19` },
        { k: `20` },
      ],
      weights: [
        { g: `1` },
        { g: `2` },
        { g: `3` },
        { g: `4` },
        { g: `5` },
        { g: `6` },
        { g: `7` },
        { g: `8` },
        { g: `9` },
      ],
      heightcm: '',
      heightmm: '',
      weightk: '',
      weightg: '',
      year:[
        {y:`0`}, {y:`1`}, {y:`2`}, {y:`3`}
      ],
      month:[
        {m:`0`},{m:`1`},{m:`2`},{m:`3`},{m:`4`},{m:`5`},{m:`6`},{m:`7`},{m:`8`},{m:`9`},{m:`10`},{m:`11`},
      ],
      heightyear:"",
      heightmonth:"",
      weightyear:"",
      weightmonth:""
    }
  },
  methods:{
   addheight() {
      alert(`この内容で登録してもよろしいでしょうか`)
      const heights = {
       height: this.heightcm+this.heightmm,
       heightdate:this.heightyear+this.heightmonth
      }
      this.heightupdate(heights)
      this.$router.push({ name: 'index' })
    },
       addweight() {
      alert(`この内容で登録してもよろしいでしょうか`)
      const weights = {
       weight: this.weightk+`.`+this.weightg+`kg`,
       weighttdate:this.weightyear+`年`+this.weightmonth+`ヶ月`
      }
      this.weightupdate(weights)
      
    },
    ...mapActions(['heightupdate',"weightupdate"]),
  }
}
</script>

<style lang="scss">
.growth {
  width: 400px;
  margin: auto;
}
.height {
  display: flex;
}
.weight {
  display: flex;
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
</style>
