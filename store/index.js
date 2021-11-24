import { vuexfireMutations} from 'vuexfire'
import firebase from '~/plugins/firebase'

export const state=()=>({
user:{
uid:"",
email:"",
// ログイン状態の真偽値
login:false
}
})

export const getters={
  user:state=>{
return state.user
  }
}

export const actions={
  login({commit},payload){
    firebase.auth().signInWithEmailAndPassword(payload.email,payload.password)
    .then(user=>{
      console.log(`ログイン成功`)
      console.log(`ユーザー情報`)
      console.log(user)
      firebase.auth().onAuthStateChanged(function(user){
        if(user){
          commit('getData',{uid:user.uid,email:user.email})
          commit('switchlogin')
          $nuxt.$router.push(`/SignUp`)
        }
      })
    }).catch((error)=>{
      alert(error)
    })
  }
}

export const mutations={
  ...vuexfireMutations,
  getData(state,payload){
    state.user.uid=payload.uid
    state.user.email=payload.email
  },
  switchlogin(state){
    state.user.login=true
  }
}