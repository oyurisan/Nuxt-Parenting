import { vuexfireMutations } from 'vuexfire'
import firebase from '~/plugins/firebase'

const db = firebase.firestore()
const UserRef = db.collection(`User`)
// this.uid = String(uid)


export const state = () => ({
  user: {
    uid: "",
    email: '',
    // ログイン状態の真偽値
    login: false
  },
  UserInfo: "",
  FoodList: [],
  months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  // DBから取った全部の情報
  allData: [],
  userlist:null
})
export const getters = {
  getid: (state) => 
  (id) => state.userlist.find((userlist) => userlist.id === id),
  user: (state) => {
    return state.user.uid
  },
  userid: (state) => {
    return state.user ? state.user.uid : null
  },
  Food: (state) => {
    return state.FoodList
  },

  getAllData: state => state.allData,
  // getUserInfo: state =>  state.UserInfo ? state.UserInfo.uid : null, 
  }

export const actions = {

  // モジュール
  nuxtClientInit ({ commit },) {
    const data = JSON.parse(localStorage.getItem('ユーザー情報')) || []
    console.log(data.UserInfo)
    if (data.UserInfo) {
      commit('fetchUser', data.UserInfo)
    }
  },
  // アレルギー更新
  allergyupdate({commit},allergys) {
    UserRef.doc(allergys.UserInfo)
      .update({
        allergy: firebase.firestore.FieldValue.arrayUnion({
          newallergy: allergys.newallergy,
        }),
      }).then(() => {
      commit('allergyupdate',allergys)
      })
  },
  // 日記投稿
  diaryupdate(commit, diarys) {
    UserRef.doc(`Z3h6iFpa2jPFY8A2w9z3`)
      .update({
        diary: firebase.firestore.FieldValue.arrayUnion({
          diarydate: diarys.date,
          message: diarys.message,
          photo: diarys.photo,
        }),
      })
      .then(() => {
        commit('diaryupdate', diarys)
      })
  },
  // ユーザー情報更新
  userupdate({commit}, users) {
    console.log(users.UserInfo)
    UserRef.doc(users.UserInfo)
       .update({
        users: firebase.firestore.FieldValue.arrayUnion({
          babyname: users.babyname,
          gender: users.gender,
          birthday: users.birthday,
          picture:users.picture
        }),
      })
      .then(() => {
        commit('userupdate', users)
      })
  },
  // ご飯更新
  foodupdate({commit}, foods) {
    console.log(foods.UserInfo)
    UserRef.doc(foods.UserInfo)
      .update({
        food: firebase.firestore.FieldValue.arrayUnion({
          foodmemo: foods.foodmemo,
          kinds: foods.kinds,
          fooddate: foods.fooddate,
          ml: foods.ml,
        }),
      })
      .then(() => {
        commit('foodupdate', foods)
      })
  },
  // 身長更新
  heightupdate(commit, heights) {
    UserRef.doc(heights.UserInfo)
      .update({
        height: firebase.firestore.FieldValue.arrayUnion({
          height: heights.height,
          heightdate: heights.heightdate,
          babyyear: heights.babyyear,
        }),
      })
      .then(() => {
        commit('heightupdate', heights)
      })
  },
  // 体重更新
  weightupdate(commit, weights) {
    UserRef.doc(weights.UserInfo)
      .update({
        weight: firebase.firestore.FieldValue.arrayUnion({
          weight: weights.weight,
          weightdate: weights.weightdate,
          babyyear: weights.babyyear,
        }),
      })
      .then(() => {
        commit('weightupdate', weights)
      })
  },
  // うんち更新
  unchiupdate(commit, unchis) {
    UserRef.doc(unchis.UserInfo)
    .update({
        unchi: firebase.firestore.FieldValue.arrayUnion({
          unchishape: unchis.unchishape,
          unchicolor: unchis.unchicolor,
          unchimemo: unchis.unchimemo,
          unchidate: unchis.unchidate,
          start: unchis.unchidate,
        }),
      })
      .then(() => {
        commit('unchiupdate', unchis)
      })
  },
  // おしっこ更新
  urineupdate(commit, urines) {
    UserRef.doc(urines.UserInfo)
      .update({
        urine: firebase.firestore.FieldValue.arrayUnion({
          urinememo: urines.urinememo,
          urinedate: urines.urinedate,
        }),
      })
      .then(() => {
        commit('urineupdate', urines)
      })
  },
  // 初期情報追加
  adds({ commit },UserInfo) {
    db.collection(`User`)
    .doc(UserInfo)
    .set({
      users: [{ babyname: '', birthday: '', gender: '' }],
      allergy: [],
      food: [{ kinds: '', foodmemo: '', fooddate: '', ml: '' }],
      height: [{ height: '', heightdate: '' }],
      weight: [{ weight: '', weightdate: '' }],
      unchi: [{ unchiecolor: '', shape: '', unchimemo: '', unchidate: '' }],
      urine: [{ urinecolor: '', urinememo: '', urinedate: '' }],
      diary: [{ diarydate: '', message: '', photo: '' }],
    })
  },
  // 新規登録
  register({ dispatch }, payload) {
    firebase
      .auth()
      .createUserWithEmailAndPassword(payload.email, payload.password)
      .then((user) => {
        console.log(user)
        dispatch('adds',user.user.uid)
        dispatch('checklogin')
        dispatch('sendemail').catch((error) => {
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
  login(payload) {
    firebase
      .auth()
      .signInWithEmailAndPassword(payload.email, payload.password)
      .then( () => {
        dispatch('checklogin')
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
      })
      .catch((error) => {
        console.log(error)
      })
  },
  // 全部のデータ DBから取り出し
  fetchAllData({ commit }) {
    UserRef.get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        commit('fetchItems', doc.data())
        console.log(doc.data());
      })
    })

  },
  // ユーザー情報取得
  fetchUser({commit},userData ) {
   commit('fetchUser',userData)
  },

  // 新規登録ユーザーに確認のメールを送信する
  sendemail() {
    firebase
      .auth()
      .currentUser.sendEmailVerification()
      .then(() => {
        // commit('sendemail')
      })
  },
}
export const mutations = {
  ...vuexfireMutations,
  // データをpayloadに代入
  getData(state, payload) {
    console.log(payload)
    console.log(state.user.uid)
    state.user.uid = payload.uid
    console.log(state.user.uid)
    state.user.email = payload.email
  },
  switchlogin(state) {
    state.user.login = true
    console.log(state.user.login)
  },
  FoodList(state, foods) {
    state.FoodList.push(foods)
  },
  // DBからの取り出し
  fetchItems(state, Item) {
    state.allData = Item
    console.log(Item)
  },
   // ユーザー情報取得
  fetchUser(state,userData){
    state.UserInfo=userData
    console.log(state.UserInfo)
  }
}
