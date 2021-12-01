<template>
  <div id="timer">
    <div class="timer">
      <div class="time">
        次の授乳まで残り🍼<br />
        <button @click="countup">+</button>
        {{ CountTime }}<button @click="countups">+</button>
      </div>
      <button @click="start">start🦓</button>
      <button @click="stop">stop🦓</button>
      <!-- <audio controls autoplay src="~/assets/baby.mp3"></audio> -->
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      min: 0,
      sec: 0,
    }
  },
  computed: {
    CountTime() {
      const timeStrings = [
        // 秒と分が一桁の時は文字列にする
        // (例)01分01秒
        this.min.toString(),
        this.sec.toString(),
      ].map(function (str) {
        if (str.length < 2) {
          return '0' + str
        } else {
          return str
        }
      })
      return timeStrings[0] + ':' + timeStrings[1]
    },
  },
  methods: {
    countup() {
      this.min++
    },
    countups() {
      this.sec++
    },
    count() {
      // 0秒以下かつ1分を切っていない時の処理
      if (this.sec <= 0 && this.min >= 1) {
        this.min--
        this.sec = 59
      }
      // 0秒以下かつ０分以下の処理
      else if (this.sec <= 0 && this.min <= 0) {
        this.musicstart()
        this.complete()
        
      } else {
        // それ以外の処理
        // 秒数を１にする
        this.sec--
      }
    },
    start() {
      const self = this
      this.timerObj = setInterval(function () {
        self.count()
      }, 1000)
      this.timerOn = true
      // timerがONであることを保持
    },
    stop() {
      clearInterval(this.timerObj)
      this.timerOn = false
      // timerがOFFであることを保持
    },
    // 時間が経過したら
    complete() {
      clearInterval(this.timerObj)
      alert(`授乳の時間になりました`)
    },
    musicstart() {
     const music = new Audio(require("~/assets/baby.mp3"));
      music.play()
    },
  },
}
</script>

<style></style>
