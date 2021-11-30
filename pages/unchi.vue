<template>
  <div class="unchi-main">
    <div class="unchi-title">うんち管理</div>

    <div class="unchi-container">
      <div>💩unchi💩</div>

      <div>
        日時 : <input v-model="unchidate" type="datetime-local" name="Date" />
      </div>

      <div class="color-main">
        色 :
        <label class="radio-label">
          <input
            v-model="color"
            type="radio"
            name="open-page"
            value="茶色"
            checked
          />
          <span class="radio-text-brown">茶</span>
        </label>
        <label class="radio-label">
          <input v-model="color" type="radio" name="open-page" value="黒色" />
          <span class="radio-text-black">黒</span>
        </label>
        <label class="radio-label">
          <input v-model="color" type="radio" name="open-page" value="赤色" />
          <span class="radio-text-red">赤</span>
        </label>
        <label class="radio-label">
          <input v-model="color" type="radio" name="open-page" value="緑色" />
          <span class="radio-text-green">緑</span>
        </label>
        <label class="radio-label">
          <input v-model="color" type="radio" name="open-page" value="黄色" />
          <span class="radio-text-yellow">黄</span>
        </label>
      </div>

      <div class="form-main">
        形 :
        <input
          id="radio1"
          v-model="shape"
          class="radio-folm"
          name="folm"
          type="radio"
          value="かため"
        />
        <label for="radio1" class="back">かため</label>
        <input
          id="radio2"
          v-model="shape"
          class="radio-folm"
          name="folm"
          type="radio"
          value="ふつう"
        />
        <label for="radio2">ふつう</label>
        <input
          id="radio3"
          v-model="shape"
          class="radio-folm"
          name="folm"
          type="radio"
          value="やわらかめ"
        />
        <label for="radio3">やわらかめ</label>
        <input
          id="water"
          v-model="shape"
          class="radio-folm"
          name="folm"
          type="radio"
          value="水っぽい"
        />
        <label for="water">水っぽい</label>
      </div>
      <textarea
        v-model="unchimemo"
        class="textarea"
        cols="30"
        rows="5"
        name="Memo"
        placeholder=" メモ"
        maxlength="500"
      />
      <!-- <p>{{ message.length }}/500 文字</p> -->
      <div>
        <button @click="addunchi">保存</button>
        <button @click="back">戻る</button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
// import Memo from '../components/addMemo'
// import DateTime from '../components/addDateTime'

export default {
  components: {
    // Memo,
    // DateTime,
  },

  data() {
    return {
      unchimemo: '',
      shape: '',
      color: '',
      unchidate: '',
    }
  },

  head: {
    title: 'うんちっち',
  },

  computed: {
    ...mapGetters(['getUnchi', 'getUserItems']),
  },
  methods: {
    addunchi() {
      alert(`この内容で登録してもよろしいでしょうか`)
      const unchis = {
        unchimemo: this.unchimemo,
        unchishape: this.shape,
        unchidate: this.unchidate,
        unchicolor:this.color
      }
      this.unchiupdate(unchis)
    },
    back() {
      this.$router.push({ name: 'index' })
    },
    ...mapActions(['unchiupdate']),
  },
}
</script>

<style lang="scss">
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
.color-main {
  margin-top: 2%;
}
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
.form-main {
  margin-top: 2%;
  margin-bottom: 2%;
}
.radio-folm {
  display: none;
  &:checked + label {
    background-color: pink;
    padding-top: 1.5%;
    padding-right: 3%;
    padding-bottom: 1.5%;
    padding-left: 3%;
    border-radius: 50%;
  }
}
</style>
