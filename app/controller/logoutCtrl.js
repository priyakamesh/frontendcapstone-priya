capstone.controller("LogoutCtrl", function($scope){
  $scope.logout=()=>{
    firebase.auth().signOut()
    Materialize.toast("logged out", 1000)
  }
})
