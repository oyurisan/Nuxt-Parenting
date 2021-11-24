import { firestoreAction } from 'vuexfire'
import firebase from '~/plugins/firebase'

const db = firebase.firestore()
const UserRef = db.collection(`User`)

export const state = () => ({
  User: [],
})

// stateのUser配列とfirebaseのUserコレクションを連携する処理
// index.vueのcreatedで呼び出す予定
export const actions = {
  init: firestoreAction(({ bindFirestoreRef }) => {
    bindFirestoreRef('User', UserRef)
  }),
  add: firestoreAction((context,{babyname,birthday,gender,growth:[height,weight],unchi:[unchiecolor,shape,unchimemo],urine:[urinecolor,urinememo]}) => {
  // keyと値が同一の際は省略可能
    UserRef.add({
      babyname,
      birthday,
      gender,
      food:[
        kinds,
        foodmemo,
        firebase.firestore.FieldValue.serverTimestamp()
      ],
      growth:[
      height,
      weight,
      firebase.firestore.FieldValue.serverTimestamp()
      ],
      unchi:[
        unchiecolor,
        shape,
        unchimemo,
        firebase.firestore.FieldValue.serverTimestamp()
      ],
      urine:[
        urinecolor,
        urinememo,
        firebase.firestore.FieldValue.serverTimestamp()
      ]
    },
    )
  // }
  }),
  adduserinfo: firestoreAction((info) => {
    UserRef.doc(info.id).update({
      name: this.babyname,
      birthday: this.birthday,
      gender: this.gender,
    })
  }),
}
