capstone.controller("LogoutCtrl", function($scope){
  $scope.logout=()=>{
    firebase.auth().signOut()
    Materialize.toast("logged out", 1000)
    $('.logoutButton').addClass('ng-hide')
    $('.profileButton').addClass('ng-hide')
      $('.logInButton').removeClass("ng-hide")
      $('.registerButton').removeClass("ng-hide")
  }
})
