
capstone.factory ("AuthFactory", function ($q) {
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
      return UID = firebase.auth().currentUser
    },
    getUser() {
      console.log("hi")
      return $q((resolve, reject) => {
        console.log('hi2')
        const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
          unsubscribe();
          console.log(user)
          if (user) {
            resolve(user);
            // $scope.$apply()
            console.log("im resolved")
          } else {
            reject("Not logged in");
            console.log("im rejected")
          }
        }); //end const unsubscribe
      }); //end return getUser
    }
  }
})
