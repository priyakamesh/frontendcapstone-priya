capstone.controller("LoginCtrl", function($scope,$location,AuthFactory){
  //LOGIN FUNCTION
  $scope.login = ()=>{
    //CHECKING FOR USER INPUT IN LOGIN FORM
    if (($scope.user_email === undefined)&&($scope.user_password === undefined)){
      Materialize.toast("Please enter the email and password",2000)
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
        Materialize.toast("Login email/password not found",2000)
        $location.url("/login")
      }


    })
  }
  //FORGOT PASSWORD FUNCTION
  $scope.forgotPassword = ()=>{
    if($scope.user_email){
      firebase.auth().sendPasswordResetEmail($scope.user_email)
      .then(function() {
         Materialize.toast("Email sent.... check your inbox",1500)
        })
        .catch( function(error) {
          Materialize.toast("Email not found",1000)
        });
    } else {
      Materialize.toast("Please enter the email address",2000)
      $("#email").focus()
    }
}
})
