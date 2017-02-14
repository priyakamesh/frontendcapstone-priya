capstone.controller ("PublicCtrl", function ($http,$scope,doctorFactory,$location,AuthFactory) {


 $('.parallax').parallax();
 $scope.speciality = doctorFactory.getSpeciality();
  $scope.insurance = doctorFactory.getInsurance();
  // $scope.insuranceNames = Object.keys($scope.insurance)
  console.log($scope.insurance)
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
  $('.button-collapse').sideNav({
     menuWidth: 300, // Default is 300
      edge: 'right', // Choose the horizontal origin
      closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
      draggable: true // Choose whether you can drag to open on touch screens
    });
})
