capstone.controller("LogoutCtrl", function($scope){
  //LOGOUT FUNCTION
  $scope.logout=()=>{
    firebase.auth().signOut()
    Materialize.toast("logged out", 1000)
    $('.logoutButton').addClass('ng-hide')
    $('.profileButton').addClass('ng-hide')
      $('.logInButton').removeClass("ng-hide")
      $('.registerButton').removeClass("ng-hide")
  }

  //CANCEL FUNCTION TO GOT TO SEARCH PAGE
  $scope.cancel = ()=>{
    $location.url("/")
  }
})
