const capstone = angular.module("capstoneApp",["ngRoute"])
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
    templateUrl: "/partials/public.html"
  })
  .when ("/register",{
    controller: "RegisterCtrl",
    templateUrl: "/partials/Register.html"
  })
})




capstone.controller("RegisterCtrl", function($scope,$http){
$http.get(`states.json`)
.then((data)=>{
  $scope.stateName = data.data
  console.log($scope.stateName)
 $('input.autocomplete').autocomplete({
    data: $scope.stateName,
    limit: 10 // The max amount of results that can be shown at once. Default: Infinity.
  });
 })
  $scope.register = () => {
    console.log("im register")
//     AuthFactory.getter($scope.user_email,$scope.user_password)
//     .then ((data)=> {
//             console.log(data)
//             $scope.UID = data
//             $http.post(`https://frontendcapstone.firebaseio.com/.json`,{
//                     uid: $scope.UID,
//                     Firstname: $scope.firstName,
//                     Lastname: $scope.lastName,
//                     email: $scope.user_email,
//                     password: $scope.user_password,
//                     DOB: $scope.user_dob,
//                     Address: {Address1: $scope.user_addressLine1,
//                               Address2: $scope.user_addressLine2,
//                               City: $scope.user_city,
//                               state: $scope.user_state,
//                               zipcode: $scope.user_zipcode}
//     })
//         $location.path(`/privateView`)
// })

}


})
