
capstone.factory ("AuthFactory", function ($q,$location) {
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
            .then((data)=>{
              return data
            })
            .catch ((data)=>{
              // alert(data.message)
              return data
            })
    },


    getUid:()=> {
      return UID = firebase.auth().currentUser
    },
    getUser:()=> {
      console.log("hi")
      return $q((resolve, reject) => {
        console.log('hi2')
        const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
          unsubscribe();
          console.log(user)
          if (user) {
            resolve(user);
            $('.logoutButton').removeClass("ng-hide")
             $('.profileButton').removeClass("ng-hide")
             $('.logInButton').addClass("ng-hide")
             $('.registerButton').addClass("ng-hide")
            // $scope.$apply()
            console.log("im resolved")
          } else {
            reject("Not logged in");
            $('.logoutButton').addClass('ng-hide')
             $('.profileButton').addClass('ng-hide')
             $('.logInButton').removeClass("ng-hide")
             $('.registerButton').removeClass("ng-hide")
            console.log("im rejected")
          }
        }); //end const unsubscribe
      }); //end return getUser
    }
  }
})
