import { vuexfireMutations } from 'vuexfire'
// import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import firebase from '~/plugins/firebase'

const db = firebase.firestore()
const UserRef = db.collection(`User`)

export const state = () => ({
  user: {
    uid: '',
    email: '',
    // ログイン状態の真偽値
    login: false,
  },
  UserInfo: [],
  FoodList: [],
  chartData: [ 50, 51, 53, 55, 56, 58, 61, 63, 65, 68, 70, 71 ],
  chartDataW: [ 3, 3.4, 3.7, 4.1, 4.5, 4.8, 5.3, 5.6, 5.8, 6.1, 6.6, 7.4 ],
  heightDatas: {
    height: [ 50, 51, 53, 55, 56, 58 ],
    months: [ '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11' ],
  },
  weightDatas: [
    { weight: 3.0, months: 0 } 
  ]
})

export const getters = {
  user: (state) => {
    return state.user
  },
  userid: (state) => {
    return state.user ? state.user.uid : null
  },
  Food: (state) => {
    return state.FoodList
  },
  getChartData: state => {
    return state.chartData
  },
  getChartDataW: state => {
    return state.chartDataW
  },
  getChartHeight: state => {
    return state.heightDatas
  }
}
export const actions = {
  // ユーザー情報取得
  // fetchuserinfo(){
  // firebase.firestore().collection(`User/${getters.userid}`)
  // .get()
  // .then(snapshot=>{
  //   console.log(snapshot)
  //   // if(!snapshot){
  //     id:document.id
  //     this.dispatch("adds")
  //   // }
  // })
  // },

  // ユーザー情報更新
  updateusers({ getters }, updateuser) {
    if (getters.userid) {
      firebase
        .firestore()
        .collection(`User`)
        .doc(`Jb5bgeSF2P7gTr6IMnJJ`)
        .update({ User })
    }
  },
  // ご飯更新
  foodupdate(commit, foods) {
    UserRef.doc(`Z3h6iFpa2jPFY8A2w9z3`)
      .update({
        food: firebase.firestore.FieldValue.arrayUnion({
          foodmemo: foods.foodmemo,
          kinds: foods.foodmemo,
          fooddate:foods.fooddate
        }),
      })
      .then(() => {
        commit('foodupdate', foods)
      })
  },
  // 成長更新
  growthupdate(commit, growths) {
    UserRef.doc(`Z3h6iFpa2jPFY8A2w9z3`)
      .update({
        growth: firebase.firestore.FieldValue.arrayUnion({
          height: growths.height,
          weight: growths.weight,
          growthdate:growths.growthdate
        }),
      })
      .then(() => {
        commit('growthupdate', growths)
      })
  },
  // うんち更新
  unchiupdate(commit, unchis) {
    UserRef.doc(`Z3h6iFpa2jPFY8A2w9z3`)
      .update({
        unchi: firebase.firestore.FieldValue.arrayUnion({
          unchishape: unchis.unchishape,
          unchicolor: unchis.unchicolor,
          unchimemo: unchis.unchimemo,
          unchidate:unchis.unchidate

        }),
      })
      .then(() => {
        commit('unchiupdate', unchis)
      })
  },
  // おしっこ更新
  urineupdate(commit,urines) {
    UserRef.doc(`Z3h6iFpa2jPFY8A2w9z3`)
      .update({
        urine: firebase.firestore.FieldValue.arrayUnion({
          urineshape: urines.urineshape,
          urinecolor: urines.urinecolor,
          urinememo: urines.urinememo,
          urinedate:urines.urinedate
        }),
      })
      .then(() => {
        commit('urineupdate', urines)
      })
  },
  // 初期情報追加
  adds({ getters }) {
    firebase
      .firestore()
      .collection(`User/${getters.userid}`)
      .add({
        babyname: '',
        birthday: '',
        gender: '',
        food: [
          {
            kinds: '',
            foodmemo: '',
            fooddate:""
          },
        ],
        growth: [
          {
            height: '',
            weight: '',
            growthdate:""
          },
        ],
        unchi: [
          {
            unchiecolor: '',
            shape: '',
            unchimemo: '',
            unchidate:""
          },
        ],
        urine: [
          {
            urinecolor: '',
            urinememo: '',
            urinedate:""
          },
        ],
      })
  },
  // 新規登録
  register({ dispatch }, payload) {
    firebase
      .auth()
      .createUserWithEmailAndPassword(payload.email, payload.password)
      .then((user) => {
        console.log(user)
        dispatch('checklogin').catch((error) => {
          alert(error)
        })
      })
  },
  // ログインが正常にされているかチェックする
  checklogin({ commit }) {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        commit('getData', { uid: user.uid, email: user.email })
        commit('switchlogin')
      }
    })
  },
  // ログイン
  login({ dispatch }, payload) {
    firebase
      .auth()
      .signInWithEmailAndPassword(payload.email, payload.password)
      .then((user) => {
        dispatch('checkLogin')
        $nuxt.$router.push(`/SignUp`)
      })
      .catch((error) => {
        alert(error)
      })
  },
  // ログアウト
  logout({ context }) {
    firebase
      .auth()
      .signOut()
      .then(() => {
        console.log(`ログアウト`)
        console.log(user)
      })
      .catch((error) => {
        console.log(error)
      })
  },
}

export const mutations = {
  ...vuexfireMutations,
  // データをpayloadに代入
  getData(state, payload) {
    console.log(payload)
    state.user.uid = payload.uid
    state.user.email = payload.email
  },
  switchlogin(state) {
    state.user.login = true
    console.log(state.user.login)
  },
  adds(state, { info }) {
    state.UserInfo = info
    // console.log(UserInfo)
  },
  FoodList(state, foods) {
    state.FoodList.push(foods)
  },
}
