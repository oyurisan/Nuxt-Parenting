<template>
  <div class="unchi-main">
    <div><nuxt-link to="/">🔙</nuxt-link></div>
    <div class="unchi-title">うんち管理</div>

    <div class="unchi-container">
      <div>💩unchi💩</div>

      <DateTime />

      <div>
        色 :
        <label class="radio-label">
          <input type="radio" name="open-page" value="brown" checked />
          <span class="radio-text-brown">茶</span>
        </label>
        <label class="radio-label">
          <input type="radio" name="open-page" value="black" />
          <span class="radio-text-black">黒</span>
        </label>
        <label class="radio-label">
          <input type="radio" name="open-page" value="red" />
          <span class="radio-text-red">赤</span>
        </label>
        <label class="radio-label">
          <input type="radio" name="open-page" value="green" />
          <span class="radio-text-green">緑</span>
        </label>
        <label class="radio-label">
          <input type="radio" name="open-page" value="yellow" />
          <span class="radio-text-yellow">黄</span>
        </label>
      </div>

      <div>
        形 :
        <input
          id="radio1"
          class="radio-folm"
          name="folm"
          type="radio"
          value="hard"
        />
        <label for="radio1" class="back">かため</label>
        <input
          id="radio2"
          class="radio-folm"
          name="folm"
          type="radio"
          value="nomal"
        />
        <label for="radio2">ふつう</label>
        <input
          id="radio3"
          class="radio-folm"
          name="folm"
          type="radio"
          value="soft"
        />
        <label for="radio3">やわらかめ</label>
        <input
          id="water"
          class="radio-folm"
          name="folm"
          type="radio"
          value="water"
        />
        <label for="water">水っぽい</label>
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
    title: 'うんち',
  },

  methods: {
    save() {

    },
    back() {
      this.$router.push({ name: 'index' })
    },
  },
}
</script>

<style>
.unchi-title {
  text-align: center;
  font-size: 200%;
  margin-top: 10%;
}
.unchi-container {
  text-align: center;
  margin: 5%;
}

/* 色のボタン */
input[type='radio'] {
  display: none;
}

.radio-text:before {
  content: '';
  display: inline-block;
  width: 12px;
  height: 12px;
  margin-right: 6px;
  border-width: 1px;
  border-style: solid;
  border-radius: 50%;
  padding: 2px;
  background-clip: content-box;
}

.radio-text-brown:before {
  content: '';
  display: inline-block;
  width: 12px;
  height: 12px;
  margin-right: 6px;
  border-width: 1px;
  border-style: solid;
  border-radius: 50%;
  padding: 2px;
  background-clip: content-box;
}
.radio-text-black:before {
  content: '';
  display: inline-block;
  width: 12px;
  height: 12px;
  margin-right: 6px;
  border-width: 1px;
  border-style: solid;
  border-radius: 50%;
  padding: 2px;
  background-clip: content-box;
}
.radio-text-red:before {
  content: '';
  display: inline-block;
  width: 12px;
  height: 12px;
  margin-right: 6px;
  border-width: 1px;
  border-style: solid;
  border-radius: 50%;
  padding: 2px;
  background-clip: content-box;
}
.radio-text-green:before {
  content: '';
  display: inline-block;
  width: 12px;
  height: 12px;
  margin-right: 6px;
  border-width: 1px;
  border-style: solid;
  border-radius: 50%;
  padding: 2px;
  background-clip: content-box;
}
.radio-text-yellow:before {
  content: '';
  display: inline-block;
  width: 12px;
  height: 12px;
  margin-right: 6px;
  border-width: 1px;
  border-style: solid;
  border-radius: 50%;
  padding: 2px;
  background-clip: content-box;
}

input[type='radio']:not(:checked) + .radio-text-brown:before {
  border-color: #72767b;
}

input[type='radio']:checked + .radio-text-brown:before {
  border-color: #573815;
  background-color: #573815;
}

input[type='radio']:not(:checked) + .radio-text-black:before {
  border-color: #72767b;
}

input[type='radio']:checked + .radio-text-black:before {
  border-color: #000000;
  background-color: #000000;
}

input[type='radio']:not(:checked) + .radio-text-red:before {
  border-color: #72767b;
}

input[type='radio']:checked + .radio-text-red:before {
  border-color: #d10101;
  background-color: #d10101;
}

input[type='radio']:not(:checked) + .radio-text-green:before {
  border-color: #72767b;
}

input[type='radio']:checked + .radio-text-green:before {
  border-color: #0e8a23;
  background-color: #0e8a23;
}

input[type='radio']:not(:checked) + .radio-text-yellow:before {
  border-color: #72767b;
}

input[type='radio']:checked + .radio-text-yellow:before {
  border-color: #f8eb34;
  background-color: #f8eb34;
}

/* 形のボタン */
.radio-folm {
  display: none;
}
.radio-folm:checked + label {
  background-color: pink;
}
</style>