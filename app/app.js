const capstone = angular.module("capstoneApp",["ngRoute","LocalStorageModule"])
capstone.config(($routeProvider,$locationProvider,localStorageServiceProvider )=>{
  firebase.initializeApp({
    apiKey: "AIzaSyBiwwJ_-OG8_NDU9rwESzwSf9HNVUcA_I8",
    authDomain: "frontendcapstone.firebaseapp.com",
    databaseURL: "https://frontendcapstone.firebaseio.com",
    storageBucket: "frontendcapstone.appspot.com",
    messagingSenderId: "303345732104"
  });
  const checkForAuth1 = {
      checkForAuth ($location) {
        const authReady = firebase.auth().onAuthStateChanged(user => {
          authReady()
          console.log(authReady)
          if (user) {
            $location.url('/privateview')
          }
          else{
            $location.url('/login')
          }
        })
      }
    }
  $locationProvider.hashPrefix("")
  localStorageServiceProvider
    .setPrefix('capstoneApp');
  $routeProvider
  .when("/",{
    controller: "PublicCtrl",
    templateUrl: "/partials/public.html"
  })
  .when ("/register",{
    controller: "RegisterCtrl",
    templateUrl: "/partials/Register.html"
  })
  .when("/publicresults",{
    controller: "PublicresultsCtrl",
    templateUrl: "/partials/publicresults.html",
    resolve: {doctors:(doctorFactory)=>{
      return doctorFactory.getDoctor()
    }}
  })
  .when("/register",{
    controller: "RegisterCtrl",
    templateUrl: "/partials/Register.html"
  })
  .when("/login",{
    controller: "LoginCtrl",
    templateUrl: "/partials/login.html"
  })
  .when("/privateview",{
    controller: "PrivateviewCtrl",
    templateUrl: "/partials/privateview.html",
    resolve: checkForAuth1
  })
  .when("/logout",{
    controller: "LogoutCtrl",
    templateUrl: "/partials/logout.html"
  })
})
