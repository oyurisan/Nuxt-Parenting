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
  foodupdate(commit,foods) {
    UserRef.doc(`Z3h6iFpa2jPFY8A2w9z3`).update({food: firebase.firestore.FieldValue.arrayUnion({foodmemo:foods.foodmemo, kinds:foods.foodmemo})})
    .then(()=>{
      commit("foodupdate",foods)
    })
  },
  // 成長更新
  growthupdate() {
    firebase
      .firestore()
      .collection(`User/${getters.userid}`)
      .update({
        growth: [
          {
            height: '',
            weight: '',
          },
        ],
      })
  },
  // うんち更新
  unchiupdate() {
    firebase
      .firestore()
      .collection(`User/${getters.userid}`)
      .update({
        unchi: [
          {
            unchicolor: '',
            shape: '',
            unchimemo: '',
          },
        ],
      })
  },
  // おしっこ更新
  urineupdate() {
    firebase
      .firestore()
      .collection(`User/${getters.userid}`)
      .update({
        urine: [
          {
            urinecolor: '',
            nrinememo: '',
          },
        ],
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
          },
        ],
        growth: [
          {
            height: '',
            weight: '',
          },
        ],
        unchi: [
          {
            unchiecolor: '',
            shape: '',
            unchimemo: '',
          },
        ],
        urine: [
          {
            urinecolor: '',
            urinememo: '',
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
