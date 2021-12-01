<template>
  <div class="urine-main">
    <div class="urine-title">おしっこ管理</div>

    <div class="urine-container">
      <div>💧urine💧</div>
      <div>
        日時 : <input v-model="urinedate" type="datetime-local" name="Date" />
      </div>
      <textarea
        v-model="urinememo"
        class="textarea"
        cols="30"
        rows="5"
        name="Memo"
        placeholder=" メモ"
        maxlength="500"
      />
      <!-- <p>{{ message.length }}/500 文字</p> -->
      <div>
        <button @click="addurine">保存</button>
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
    // Memo,
    // DateTime,
  },
  data() {
    return {
      urinememo: '',
      urinedate: '',
    }
  },
  head: {
    title: 'おしっこ',
  },

  methods: {
    saveUrine () {
      this.$router.push({ name: 'index' })
    },
    back() {
      this.$router.push({ name: 'index' })
    },
    addurine() {
      alert(`この内容で登録してもよろしいでしょうか`)
      const urines = {
        urinememo: this.urinememo,
        urinedate: this.urinedate,
      }
      this.urineupdate(urines)
    },
    ...mapActions(['urineupdate']),
  },
}
</script>

<style lang="scss">
.urine-title {
  text-align: center;
  font-size: 200%;
  margin-top: 10%;
}
.urine-container {
  text-align: center;
  margin: 5%;
}
</style>
