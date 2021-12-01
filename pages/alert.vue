<template>
<div class="timer">
   <div class="food-title">タイマー</div>
  <div id="timer">
    <div class="timer">
      <div class="time">
        次の授乳まで残り🍼<br />
        <div class="relative mb-4">
          <div class="overflow-hidden h-2 text-xs flex rounded bg-purple-200">
            <div style="width:30%"
              class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-500">
            </div>
          </div>
        </div>
        <div class="container">
        <div class="m-3">
    <button class="w-12 h-12  bg-blue-400 text-lg text-white font-semibold rounded-full hover:bg-blue-500" @click="countup">+</button>
        </div>
        <div class="math">{{ CountTime }}</div>
        <div class="m-3">
    <button class="w-12 h-12  bg-blue-400 text-lg text-white font-semibold rounded-full hover:bg-blue-500" @click="countups">+</button>
</div>
</div>
      </div>
      <div class="container">
      <div class="m-3">
    <button class="shadow-lg px-2 py-1  bg-blue-600 text-lg text-white font-semibold rounded  hover:bg-blue-700 hover:shadow-sm hover:translate-y-0.5 transform transition " @click="start">
      <div class="button">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="30px" height="30px">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
      開始</div></button>
</div>
<div class="m-3">
    <button class="shadow-lg px-2 py-1  bg-blue-600 text-lg text-white font-semibold rounded  hover:bg-blue-700 hover:shadow-sm hover:translate-y-0.5 transform transition " @click="stop">
      <div class="button">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 10a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z" />
</svg>
      停止</div></button>
</div>
</div>
    </div>
  </div>
</div>
</template>

<script>
import {Howl} from "howler"

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
    //  const music = new Audio(require("~/assets/baby.mp3"));
    //   music.play()
    const music=new Howl({
      src:['~/assets/audios/.baby.mp3'],
      autoplay: true,
    })
    music.load()
    // music.play()
    // music.duration()
    },
  },
}
</script>

<style>
.container{
  display: flex;
}
.math{
  font-size: 30px;
}
.button{
  display: flex;
}
.timer{
  width: 400px;
  margin: auto;
}
.food-title {
  text-align: center;
  font-size: 200%;
  margin-top: 10%;
}
</style>
