capstone.controller("LoginCtrl", function($scope,$location,AuthFactory){

  $scope.login = ()=>{
    if (($scope.user_email === undefined)&&($scope.user_password === undefined)){
      alert("Please enter the email and password")
    }

    AuthFactory.setter($scope.user_email,$scope.user_password)
    .then((data)=>{

      Materialize.toast("logged in", 1000)
      $location.path("/privateView")
      $scope.$apply()
    })
  }
})
