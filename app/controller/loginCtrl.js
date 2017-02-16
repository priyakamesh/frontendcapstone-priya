capstone.controller("LoginCtrl", function($scope,$location,AuthFactory){
  //LOGIN FUNCTION
  $scope.login = ()=>{
    //CHECKING FOR USER INPUT IN LOGIN FORM
    if (($scope.user_email === undefined)&&($scope.user_password === undefined)){
      alert("Please enter the email and password")
    }
//AUTH CHECK FROM AUTHFACTORY
    AuthFactory.setter($scope.user_email,$scope.user_password)
    .then((data)=>{
      if(!data.message){
          Materialize.toast("logged in", 1000)
          $location.url("/publicresults")
          $scope.$apply()
      }
      else {
        alert(data.message)
        $location.url("/login")
      }


    })
  }
  //FORGOT PASSWORD FUNCTION
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
