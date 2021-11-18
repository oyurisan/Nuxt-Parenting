<template>
  <div class="food-main">
    <div class="food-title">ごはん管理</div>

    <div class="food-container">
      <div>🍼food🍴</div>
      <DateTime />

      <div class="form-main">
        中身 :
        <input
          id="titi"
          class="radio-food"
          name="folm"
          type="radio"
          value="hard"
        />
        <label for="titi" class="back">母乳</label>
        <input
          id="milk"
          class="radio-food"
          name="folm"
          type="radio"
          value="nomal"
        />
        <label for="milk">ミルク</label>
      </div>

      <div class="amount-main">
        <div class="cp_ipselect">
          <select class="cp_sl02" required>
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
            
          </select>
          <span class="cp_sl02_highlight"></span>
          <span class="cp_sl02_selectbar"></span>
          <label class="cp_sl02_selectlabel">ml</label>
        </div>
      </div>

      <Memo />

      <div>
        <button>保存</button>
        <button @click="back">戻る</button>
      </div>
    </div>
  </div>
</template>

<script>
import Memo from '../components/addMemo'
import DateTime from '../components/addDateTime'

export default {
  components: {
    Memo,
    DateTime,
  },

  head: {
    title: 'ごはん',
  },

  methods: {
    back() {
      this.$router.push({ name: 'index' })
    },
  },
}
</script>

<style>
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
}
.radio-food:checked + label {
  background-color: pink;
  padding-top: 1.5%;
  padding-right: 3%;
  padding-bottom: 1.5%;
  padding-left: 3%;
  border-radius: 50%;
}

/* 量のプルダウン */
.cp_ipselect {
  position: relative;
  width: 40%;
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
}
.cp_sl02:focus {
  outline: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0);
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
}
.cp_sl02_selectbar:before,
.cp_sl02_selectbar:after {
  content: '';
  height: 2px;
  width: 0;
  bottom: 1px;
  position: absolute;
  background: #da3c41;
  transition: 0.2s ease all;
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