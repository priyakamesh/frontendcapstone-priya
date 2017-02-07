
capstone.factory ("AuthFactory", function (){
  return {getter :(user_email,user_password) => {
    console.log(user_email,user_password)
    return firebase.auth().createUserWithEmailAndPassword(user_email,user_password)
      .then ((data)=>{
        console.log(data.uid)
        return UID = data.uid

      })
    },
    setter : (user_email,user_password)=>{

      return firebase.auth().signInWithEmailAndPassword(user_email,user_password)
      .then((data)=>{})
      .catch ((data)=>{
        alert(data.message)

      })
    },


    getUid:()=> {
      return UID = firebase.auth().currentUser.uid
    }
  }
})
