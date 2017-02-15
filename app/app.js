const capstone = angular.module("capstoneApp",["ngRoute",'growlNotifications'])
capstone.config(($routeProvider,$locationProvider )=>{
  firebase.initializeApp({
    apiKey: "AIzaSyBiwwJ_-OG8_NDU9rwESzwSf9HNVUcA_I8",
    authDomain: "frontendcapstone.firebaseapp.com",
    databaseURL: "https://frontendcapstone.firebaseio.com",
    storageBucket: "frontendcapstone.appspot.com",
    messagingSenderId: "303345732104"
  });


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
 .when("/map", {
  controller: "PublicresultsCtrl",
  templateUrl: "/partials/map.html",
  // resolve: {
  //             doctors:(doctorFactory)=>{
  //               return doctorFactory.getDoctor()
  //             },
  //             user1:(AuthFactory)=>{
  //               return AuthFactory.getUser().catch(console.log)
  //   }}
 })
})
