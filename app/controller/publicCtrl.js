capstone.controller ("PublicCtrl", function ($http,$scope,doctorFactory,$location,AuthFactory) {

 $('.parallax').parallax();
 $scope.speciality = doctorFactory.getSpeciality();
  $scope.insurance = doctorFactory.getInsurance();
  $scope.getDoctor = ()=>{
    $scope.user_speciality = doctorFactory.getuserSpeciality($scope.speciality)

    console.log($scope.user_speciality)
    $scope.user_insurance = doctorFactory.getuserInsurance($scope.user_insurance)
    console.log($scope.user_insurance)
    $scope.zipcode = doctorFactory.getZipcode($scope.zipcode)
    console.log($scope.zipcode)
    doctorFactory.getDoctorlist()
    .then((data)=>{$location.path("/publicresults")})

      $scope.uid =  AuthFactory.getUid().uid
      if (uid !== "") {
        $('.logoutButton').removeClass('ng-hide')
         $('.profileButton').removeClass('ng-hide')
         $('.logInButton').addClass("ng-hide")
         $('.registerButton').addClass("ng-hide")
     //  console.log($scope.uid)
      }
  }
})
