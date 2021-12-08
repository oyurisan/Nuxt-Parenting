<template>
  <div class="growth">
    <div class="growth-title">成長管理</div>
    {{this.$store.state.UserInfo}}
      <div>👶身長👶</div>
    日時：<input v-model="heightdate" type="date" name="Date" /><br>
     身長： <select v-model="heightcm">
        <option v-for="item in height" :key="item.cm" :value="item.cm">
          {{ item.cm }}
        </option>
        </select>.
      <select v-model="heightmm">
        <option v-for="item in heights" :key="item.mm" :value="item.mm">
          {{ item.mm }}
        </option>
        </select>&nbsp; cm<br>
        
     年齢： <select v-model="heightyear">
        <option v-for="item in year" :key="item.y" :value="item.y">
{{item.y}}歳
        </option>
      </select>
      <select v-model="heightmonth">
        <option v-for="item in month" :key="item.m" :value="item.m">
{{item.m}}ヶ月
        </option>
      </select>
 <div class="m-3">
    <button class="px-2 py-1 bg-dark-red text-xl text-white font-semibold rounded hover:bg-light-red w-56" @click="addheight">
      <div class="button">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="30px" height="30px">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
</svg>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
保存</div></button></div>
      <div>👶体重👶</div>
         日時：<input v-model="weightdate" type="date" name="Date" /><br>
      体重：<select v-model="weightk">
        <option v-for="item in weight" :key="item.k" :value="item.k">
          {{ item.k }}
        </option></select
      >.
      <select v-model="weightg">
        <option v-for="item in weights" :key="item.g" :value="item.g">
          {{ item.g }}
        </option></select
      >&nbsp; kg<br>
  年齢：<select v-model="weightyear">
        <option v-for="item in year" :key="item.y" :value="item.y">
{{item.y}}歳
        </option>
      </select>
      <select v-model="weightmonth">
        <option v-for="item in month" :key="item.m" :value="item.m">
{{item.m}}ヶ月
        </option>
      </select>
     <div class="m-3">
    <button class="px-2 py-1 bg-dark-red text-xl text-white font-semibold rounded hover:bg-light-red w-56" @click="addweight">
      <div class="button">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="30px" height="30px">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
</svg>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
保存</div></button></div>
<div class="m-3">
    <button class="px-2 py-1 bg-blue-900 text-xl text-white font-semibold rounded hover:bg-blue-900 w-56" @click="back">
      <div class="button">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="30px" height="30px">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
</svg>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
戻る</div></button></div>

   
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
        { cm: `30` },{ cm: `31` }, { cm: `32` },{ cm: `33` },{ cm: `34` },{ cm: `35` },{ cm: `36` },{ cm: `37` },{ cm: `38` },{ cm: `39` },
        { cm: `40` },{ cm: `41` }, {cm:`42`},{ cm: `43` },{ cm: `44` },{ cm: `45` },{ cm: `46` },{ cm: `47` },{ cm: `48` },{ cm: `49` },{ cm: `50` },{ cm: `51` },{ cm: `52` },{ cm: `53` },{ cm: `54` },
        { cm: `55` },{ cm: `56` },{ cm: `57` },{ cm: `58` }, { cm: `59` },{ cm: `60` },{ cm: `61` },{ cm: `62` },{ cm: `63` },{ cm: `64` },{ cm: `65` },{ cm: `66` },{ cm: `67` },{ cm: `68` },{ cm: `69` },{ cm: `70` },
        { cm: `71` },{ cm: `72` },{ cm: `73` },{ cm: `74` },{ cm: `75` },{ cm: `76` },{ cm: `77` },{ cm: `78` }, { cm: `79` },{ cm: `80` },{ cm: `81` },{ cm: `82` },{ cm: `83` }, { cm: `84` },{ cm: `85` },
        { cm: `86` },{ cm: `87` },{ cm: `88` },{ cm: `89` },{ cm: `90` },{ cm: `91` },{ cm: `92` },{ cm: `93` },{ cm: `94` }, { cm: `95` },{ cm: `96` },{ cm: `97` },
        { cm: `98` },{ cm: `99` },{ cm: `100` },{ cm: `101` },{ cm: `102` },{ cm: `103` },{ cm: `104` },{ cm: `105` }, { cm: `106` },{ cm: `107` },
        { cm: `108` },{ cm: `109` },{ cm: `110` },{ cm: `111` },{ cm: `112` },{ cm: `113` },{ cm: `114` },{ cm: `115` },
        { cm: `116` },{ cm: `117` },{ cm: `118` },{ cm: `119` },{ cm: `120` },{ cm: `121` },{ cm: `122` },{ cm: `123` },{ cm: `124` },{ cm: `125` },{ cm: `126` },{ cm: `127` },
        { cm: `128` },{ cm: `129` },{ cm: `130` },{ cm: `131` },{ cm: `132` },{ cm: `133` },
        { cm: `134` },{ cm: `135` },{ cm: `136` },{ cm: `137` },{ cm: `138` },{ cm: `139` },{ cm: `140` },],
      heights: [{ mm: `0` },{ mm: `1` }, { mm: `2` },{ mm: `3` },{ mm: `4` },{ mm: `5` },{ mm: `6` },{ mm: `7` },{ mm: `8` },{ mm: `9` },],
      weight: [{ k: `0` }, { k: `1` },{ k: `2` },{ k: `3` },{ k: `4` },{ k: `5` },{ k: `6` },{ k: `7` },{ k: `8` },{ k: `9` }, { k: `10` },
        { k: `11` },{ k: `12` }, { k: `13` },{ k: `14` },{ k: `15` },{ k: `16` },{ k: `17` },{ k: `18` },{ k: `19` },{ k: `20` },],
      weights: [{ g: `1` }, { g: `2` }, { g: `3` },{ g: `4` },{ g: `5` },{ g: `6` },{ g: `7` },{ g: `8` },{ g: `9` },],
      // newheight: this.heightcm+this.heightmm,
      // newweighto:this.weightk+this.weightg,
      year:[{y:`0`}, {y:`1`}, {y:`2`}],
      month:[{m:`00`},{m:`01`},{m:`02`},{m:`03`},{m:`04`},{m:`05`},{m:`06`},{m:`07`},{m:`08`},{m:`09`},{m:`10`},{m:`11`},{m:`12`} ],
      heightyear:"",
      heightmonth:"",
      weightyear:"",
      weightmonth:"",
      heightcm:"",
      heightmm:"",
      weightk:"",
      weightg:"",
      heightdate:"",
      weightdate:""
    }
  },
  methods:{
   addheight() {
      alert(`この内容で登録してもよろしいでしょうか`)
      const heights = {
      height: this.heightcm+`.`+this.heightmm,
      heightdate:this.heightdate,
      babyyear:this.heightyear+`.`+this.heightmonth
      }
      this.heightupdate(heights)
      this.heightcm=""
      this.heightmm=""
      this.heightdate=""
      this.heightyear=""
      this.heightmonth=""
    },
    addweight() {
      alert(`この内容で登録してもよろしいでしょうか`)
      const weights = {
       weight: this.weightk+`.`+this.weightg,
       weightdate:this.weightdate,
       babyyear:this.weightyear+`.`+this.weightmonth
      }
      this.weightupdate(weights)
      this.weightk=""
      this.weightg=""
      this.weightupdate=""
      this.weightyear=""
      this.weightmonth=""
    },
    back() {
      this.$router.push({ name: 'index' })
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
.growth-title {
  text-align: center;
  font-size: 200%;
  margin-top: 10%;
}
.button{
  display: flex;
}
</style>
