<template>
  <div class="food-main">
    <div class="food-title">ごはん管理</div>

    <div class="food-container">
      <div>🍼food🍴</div>
          <div>
      日時 : <input  v-model="fooddate"  type="datetime-local" name="Date">
    </div>
      <div class="form-main">
        中身 :
        <input
         id="titi"
        v-model="kinds"
          class="radio-food"
          name="folm"
          type="radio"
          value="母乳"
        />
        <label for="titi" class="back">母乳</label>
        <input
          id="milk"
          v-model="kinds"
          class="radio-food"
          name="folm"
          type="radio"
          value="ミルク"
        />
        <label for="milk">ミルク</label>
      </div>
      <div class="amount-main">
        <div class="cp_ipselect">
          <select v-model="ml" class="cp_sl02" required>
            <option value="" disabled selected></option>
            <option value="0">0</option>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
            <option value="40">40</option>
            <option value="50">50</option>
            <option value="60">60</option>
            <option value="70">70</option>
            <option value="80">80</option>
            <option value="90">90</option>
            <option value="100">100</option>
            <option value="110">110</option>
            <option value="120">120</option>
            <option value="130">130</option>
            <option value="140">140</option>
            <option value="150">150</option>
            <option value="160">160</option>
            <option value="170">170</option>
            <option value="180">180</option>
            <option value="190">190</option>
            <option value="200">200</option>
            <option value="210">210</option>
            <option value="220">220</option>
            <option value="230">230</option>
            <option value="240">240</option>
            <option value="250">250</option>
            <option value="260">260</option>
            <option value="270">270</option>
            <option value="280">280</option>
            <option value="290">290</option>
            <option value="300">300</option>
            <option value="310">310</option>
            <option value="320">320</option>
            <option value="330">330</option>
            <option value="340">340</option>
            <option value="350">350</option>
            <option value="360">360</option>
            <option value="370">370</option>
            <option value="380">380</option>
            <option value="390">390</option>
            <option value="400">400</option>
            <option value="410">410</option>
            <option value="420">420</option>
            <option value="430">430</option>
            <option value="440">440</option>
            <option value="450">450</option>
            <option value="460">460</option>
            <option value="470">470</option>
            <option value="480">480</option>
            <option value="490">490</option>
            <option value="500">500</option>
          </select>
          <span class="cp_sl02_highlight"></span>
          <span class="cp_sl02_selectbar"></span>
          <label class="cp_sl02_selectlabel">ml</label>
        </div>
      </div>
       <textarea
        v-model="message"
        class="textarea"
        cols="30"
        rows="5"
        name="Memo"
        placeholder=" メモ"
        maxlength="500"
      />
      <p>{{ message.length }}/500 文字</p>
     
      <div>
        <button @click="addfood">保存</button>
        <button @click="back">戻る</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
// import Memo from '../components/addMemo'
// import DateTime from '../components/addDateTime'

export default {
  components: {
  },
  data() {
    return {
      food: '',
      message: '',
      fooddate:"",
      kinds:"",
      ml:""
    }
  },
  head: {
    title: 'ごはん',
  },
  computed: {
    Foods() {
      return this.$store.getters.Food
    },
  },
  methods: {
    back() {
      this.$router.push({ name: 'index' })
    },
    addfood() {
      alert(`この内容で登録してもよろしいでしょうか`)
      const foods = {
       foodmemo: this.message,
       kinds:this.kinds,
       ml:this.ml,
       fooddate:this.fooddate
      }
      this.foodupdate(foods)
      this.$router.push({ name: 'index' })
    },
    ...mapActions(['foodupdate']),
  },
}
</script>
<style lang="scss">
.food-title {
  text-align: center;
  font-size: 200%;
  margin-top: 10%;
}
.food-container {
  text-align: center;
  margin: 5%;
}

/* 形のボタン */
.form-main {
  margin-top: 2%;
  margin-bottom: 2%;
}
.radio-food {
  display: none;
  margin-right: 2%;
  margin-left: 2%;
  &:checked + label {
    background-color: pink;
    padding-top: 1.5%;
    padding-right: 3%;
    padding-bottom: 1.5%;
    padding-left: 3%;
    border-radius: 50%;
  }
}

/* 量のプルダウン */
.cp_ipselect {
  position: relative;
  width: 30%;
  margin: 2em auto;
  text-align: center;
}
.cp_sl02 {
  position: relative;
  font-family: inherit;
  background-color: transparent;
  width: 100%;
  padding: 10px 10px 10px 0;
  font-size: 18px;
  border-radius: 0;
  border: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  &:focus {
    outline: none;
    border-bottom: 1px solid rgba(0, 0, 0, 0);
  }
}
.cp_ipselect .cp_sl02 {
  appearance: none;
  -webkit-appearance: none;
}
.cp_ipselect select::-ms-expand {
  display: none;
}
.cp_ipselect:after {
  position: absolute;
  top: 18px;
  right: 10px;
  width: 0;
  height: 0;
  padding: 0;
  content: '';
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 6px solid rgba(0, 0, 0, 0.3);
  pointer-events: none;
}
.cp_sl02_selectlabel {
  color: rgba(0, 0, 0, 0.5);
  font-size: 18px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 0;
  top: 10px;
  transition: 0.2s ease all;
}
.cp_sl02:focus ~ .cp_sl02_selectlabel,
.cp_sl02:valid ~ .cp_sl02_selectlabel {
  color: #da3c41;
  top: -20px;
  transition: 0.2s ease all;
  font-size: 14px;
}
.cp_sl02_selectbar {
  position: relative;
  display: block;
  width: 100%;
  &:before,
  &:after {
    content: '';
    height: 2px;
    width: 0;
    bottom: 1px;
    position: absolute;
    background: #da3c41;
    transition: 0.2s ease all;
  }
}
.cp_sl02_selectbar:before {
  left: 50%;
}
.cp_sl02_selectbar:after {
  right: 50%;
}
.cp_sl02:focus ~ .cp_sl06_selectbar:before,
.cp_sl06:focus ~ .cp_sl06_selectbar:after {
  width: 50%;
}
.cp_sl02_highlight {
  position: absolute;
  top: 25%;
  left: 0;
  pointer-events: none;
  opacity: 0.5;
}
</style>
