<template>
  <div class="timer">
    <div class="food-title">授乳タイマー</div>

    <div id="timer">
      <div class="timer">
        <div class="time">
          次の授乳まで残り🍼<br />
          <div class="container">
            <div class="m-3">
              <button  class="  w-12 h-12   bg-red-800   text-lg text-white   font-semibold rounded-full hover:bg-red-700 " @click="countup" >
                +
              </button>
            </div>
            <div class="math">{{ CountTime }}</div>
            <div class="m-3">
              <button
                class=" w-12  h-12  bg-red-800  text-lg text-white  font-semibold rounded-full hover:bg-red-700 " @click="countups">
                +
              </button>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="m-3">
            <button
              class="shadow-lg px-2   py-1  bg-red-500  text-lg text-white  font-semibold  rounded  hover:bg-red-600 hover:shadow-sm hover:translate-y-0.5  transform
                transition " @click="start">
              <div class="button">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6"  fill="none" viewBox="0 0 24 24"  stroke="currentColor"  width="30px"
                  height="30px">
                  <path stroke-linecap="round"  stroke-linejoin="round"  stroke-width="2"
                    d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/>
                  <path  stroke-linecap="round" stroke-linejoin="round"   stroke-width="2"  d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                開始
              </div>
            </button>
          </div>
          <div class="m-3">
            <button
              class=" shadow-lg px-2  py-1 bg-red-500  text-lg text-white  font-semibold rounded
                hover:bg-red-600 hover:shadow-sm hover:translate-y-0.5transform transition " @click="stop">
              <div class="button">
                <svg xmlns="http://www.w3.org/2000/svg"  class="h-6 w-6"  fill="none"  viewBox="0 0 24 24" stroke="currentColor">
                  <path  stroke-linecap="round"  stroke-linejoin="round"  stroke-width="2"
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  <path  stroke-linecap="round"  stroke-linejoin="round"  stroke-width="2"
                    d="M9 10a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z"/>
                </svg>
                停止
              </div>
            </button>
          </div>
        </div>
      </div>
      <button @click="musicstop">a</button>
    </div>
    <div class="food-title">子守唄</div>
    <div class="container">
      <div class="item">
     <img src="~/assets/background-music.jpeg" width="100px" height="100px"/><br>
    <button @click="komori1">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><br>
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/>
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/><br>
      </svg>
    </button>
    <button>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"  viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
      </svg>
    </button><br>
    music1
  </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
 <div class="item">
     <img src="~/assets/background-music.jpeg" width="100px" height="100px"/><br>
    <button @click="komori2">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><br>
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/>
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/><br>
      </svg>
    </button>
    <button>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"  viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
      </svg>
    </button><br>
    music2
  </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <div class="item">
     <img src="~/assets/background-music.jpeg" width="100px" height="100px"/><br>
    <button @click="komori3">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><br>
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/>
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/><br>
      </svg>
    </button>
    <button>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"  viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
      </svg>
    </button><br>
    music3
  </div>
    </div>
  </div>
</template>
<script src="https://cdn.jsdelivr.net/npm/vue@2.6.12"></script>
<script>
// import svg from 'svg-progress-bar'
import sound from '~/assets/audios/baby.mp3'
import sounds from '~/assets/audios/haru.mp3'
import soundss from '~/assets/audios/odayaka.mp3'
import soundsss from '~/assets/audios/neko.mp3'
export default {
  components:{
  },
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
    options() {
      return {
        radius: 80,
        text(value) {
          return (
            this.htmlifyNumber(value) +
            '<span style="font-size: 0.4em;">%</span>'
          )
        },
        rectWidth: 600,
        rectHeight: 50,
        rectRadius: 25,
        duration: 2000,
      }
    },
    styles() {
      let width = this.CountTime.length*100
      return {
        border: '5px solid blue',
        width: width + '%',
      }
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
      this.musicstop()
      // timerがOFFであることを保持
    },
    // 時間が経過したら
    complete() {
      clearInterval(this.timerObj)
    },
    musicstart() {
      const music = new Audio(sound)
      music.play()
    },
    musicstop() {
      const music = new Audio(sound)
      music.pause(sound)
      console.log(`aa`)
      music.currentTime = 0;
      console.log(`pp`)
    },
    komori1() {
      const sound = new Audio(sounds)
      sound.play()
    },
    stopkomori() {},
    komori2() {
      const sound = new Audio(soundss)
      sound.play()
    },
    komori3() {
      const sound = new Audio(soundsss)
      sound.play()
    },
  },
}
</script>

<style>
.container {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;;
}
.math {
  font-size: 50px;
}
.button {
  display: flex;
}
.timer {
  width: 400px;
  margin: auto;
}
.food-title {
  text-align: center;
  font-size: 200%;
  margin-top: 10%;
}
</style>
