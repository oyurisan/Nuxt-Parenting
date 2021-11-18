
import { firestoreAction } from 'vuexfire'
import firebase from '~/plugins/firebase'

const db=firebase.firestore()
const UserRef=db.collection(`User`)

export const state=()=>({
User:[ ]
})

// stateのUser配列とfirebaseのUserコレクションを連携する処理
// index.vueのcreatedで呼び出す予定
export const actions={
  init:firestoreAction(({bindFirestoreRef})=>{
    bindFirestoreRef('User',UserRef)
  }),
  add:firestoreAction(({babyname,gender,birthday})=>{
    if(babyname.trim()){
      UserRef.add({
        name:babyname,
        gender,
        birthday,
        // firebaseに登録した時間を取得
        created:firebase.firestore.FieldValue.serverTimestamp()
      })
    }
  })
}

