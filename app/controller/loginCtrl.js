capstone.controller("LoginCtrl", function($scope,$location,AuthFactory){

  $scope.login = ()=>{
    if (($scope.user_email === undefined)&&($scope.user_password === undefined)){
      alert("Please enter the email and password")
    }

    AuthFactory.setter($scope.user_email,$scope.user_password)
    .then((data)=>{

      Materialize.toast("logged in", 1000)
      $location.url(`/`)
      $scope.$apply()
       $('.logoutButton').removeClass('ng-hide')
       $('.profileButton').removeClass('ng-hide')
       $('.logInButton').addClass("ng-hide")
       $('.registerButton').addClass("ng-hide")
    })
  }
  $scope.forgotPassword = ()=>{
    firebase.auth().sendPasswordResetEmail($scope.user_email)
      .then(function() {
         alert("Email sent.... check your inbox")
        })
        .catch( function(error) {
          alert("Email not found")
        });
  }
})
