const capstone = angular.module("capstoneApp",["ngRoute",'growlNotifications','ngMap'])
capstone.config(($routeProvider,$locationProvider )=>{
  firebase.initializeApp({
    apiKey: "AIzaSyBiwwJ_-OG8_NDU9rwESzwSf9HNVUcA_I8",
    authDomain: "frontendcapstone.firebaseapp.com",
    databaseURL: "https://frontendcapstone.firebaseio.com",
    storageBucket: "frontendcapstone.appspot.com",
    messagingSenderId: "303345732104"
  });
  // const showHideButton ={
  //    function() {
  //      const authReady = firebase.auth().onAuthStateChanged(user => {
  //        authReady()
  //          if (!user) {
  //            $('.logoutButton').addClass('ng-hide')
  //            $('.profileButton').addClass('ng-hide')
  //            $('.logInButton').removeClass("ng-hide")
  //            $('.registerButton').removeClass("ng-hide")
  //          } else if (user) {
  //            $('.logoutButton').removeClass("ng-hide")
  //            $('.profileButton').removeClass("ng-hide")
  //            $('.logInButton').addClass("ng-hide")
  //            $('.registerButton').addClass("ng-hide")
  //          }

  //     }) //authReady

  //   }
  //  }//showHideLogout


  $locationProvider.hashPrefix("")
  $routeProvider
  .when("/",{
    controller: "PublicCtrl",
    templateUrl: "/partials/public.html",
    resolve: {user1:(AuthFactory)=>{
      return AuthFactory.getUser().catch(console.log)
    }}
  })
  .when ("/register",{
    controller: "RegisterCtrl",
    templateUrl: "/partials/Register.html",
    resolve: {user1:(AuthFactory)=>{
      return AuthFactory.getUser().catch(console.log)
    }}// resolve: showHideButton
  })
  .when("/publicresults",{
    controller: "PublicresultsCtrl",
    templateUrl: "/partials/publicresults.html",
    resolve: {
              doctors:(doctorFactory)=>{
                return doctorFactory.getDoctor()
              },
              user:(AuthFactory)=>{
                return AuthFactory.getUid()
              },
              user1:(AuthFactory)=>{
                return AuthFactory.getUser().catch(console.log)
    }}
              // ,showHideButton

  })
  // .when("/register",{
  //   controller: "RegisterCtrl",
  //   templateUrl: "/partials/Register.html"
  // })
  .when("/login",{
    controller: "LoginCtrl",
    templateUrl: "/partials/login.html",
    resolve: {user1:(AuthFactory)=>{
      return AuthFactory.getUser().catch(console.log)
    }}
    // resolve: showHideButton
  })
  .when("/favorite", {
    controller: "FavoriteCtrl",
    templateUrl: "/partials/Favorite.html",
    resolve: {user1:(AuthFactory)=>{
      return AuthFactory.getUser().catch(console.log)
    }}
    // resolve: showHideButton
  })
  .when("/logout",{
    controller: "LogoutCtrl",
    templateUrl: "/partials/logout.html",
    resolve: {user1:(AuthFactory)=>{
      return AuthFactory.getUser().catch(console.log)
    }}
    // resolve:showHideButton
  })
  .when("/profile",{
    controller: "ProfileCtrl",
    templateUrl: "partials/profile.html",
    resolve: {user:(AuthFactory,$location)=>{
                return AuthFactory.getUser().catch(()=>{
                  $location.url("/login")
                })
              },
              user1:(AuthFactory)=>{
                  return AuthFactory.getUser().catch(console.log)
              }
            }
    // ,showHideButton
     // resolve: checkForAuth
  })
//   .run(function(editableOptions) {
//   editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2', 'default'
// })
})
