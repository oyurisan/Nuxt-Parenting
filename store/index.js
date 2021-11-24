import { vuexfireMutations } from 'vuexfire'
import firebase from '~/plugins/firebase'

export const state = () => ({
  user: {
    uid: '',
    email: '',
    // ログイン状態の真偽値
    login: false,
  },
  login_user:null
})

export const getters = {
  user: (state) => {
    return state.user
  },
}

export const actions = {
  login({ commit }, payload) {
    firebase
      .auth()
      .signInWithEmailAndPassword(payload.email, payload.password)
      .then((user) => {
        console.log(`ログイン成功`)
        console.log(user)
        firebase.auth().onAuthStateChanged(function (user) {
          if (user) {
            console.log(user.email)
            commit('getData', { uid: user.uid, email: user.email })
            commit('switchlogin')
            commit('setLoginUser')
            $nuxt.$router.push(`/SignUp`)
          } else {
            console.log(`nasi`)
          }
        })
      })
      .catch((error) => {
        alert(error)
      })
  },
  setLoginUser({ commit }, user) {
    commit('setLoginUser', user)
  },
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
  getData(state, payload) {
    state.user.uid = payload.uid
    state.user.email = payload.email
  },
  switchlogin(state) {
    state.user.login = true
  },
  setLoginUser(state,user){
    state.login_user=user
  }
}
