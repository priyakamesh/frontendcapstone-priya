capstone.controller ("PublicCtrl", function ($http,$scope,doctorFactory,$location,AuthFactory) {
//HIDING THE ALERT DIV IF NO DOCTORS FOUND
$('html,body').animate({scrollTop: 0},'fast');
  $(".alert").addClass("ng-hide")

  $('.parallax').parallax();
 //GET SPECIALITY AND INSURANCE FROM DOCTOR FACTORY
  $scope.speciality = doctorFactory.getSpeciality();
  $scope.insurance = doctorFactory.getInsurance();
 //GET DOCTORLIST FUNCTION
  $scope.getDoctor = ()=>{
    $scope.user_speciality = doctorFactory.getuserSpeciality($scope.speciality)
    $scope.user_insurance = doctorFactory.getuserInsurance($scope.user_insurance)
    $scope.zipcode = doctorFactory.getZipcode($scope.zipcode)
    doctorFactory.getDoctorlist()
    .then((data)=>{
      if(data.length === 0) {
        $(".alert").removeClass("ng-hide")
      }
      else{
      $location.path("/publicresults")
    }
    })

      $scope.uid =  AuthFactory.getUid().uid
      if (uid !== "") {
        $('.logoutButton').removeClass('ng-hide')
         $('.profileButton').removeClass('ng-hide')
         $('.logInButton').addClass("ng-hide")
         $('.registerButton').addClass("ng-hide")
      }
  }
  //SIDE NAV BAR ON SMALL DEVICES
  $('.button-collapse').sideNav({
     menuWidth: 100, // Default is 300
      edge: 'left', // Choose the horizontal origin
      closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
      draggable: true // Choose whether you can drag to open on touch screens
    });
//CLOSE FUNCTION CLOSES THE NO DOCTORS ALERT
  $scope.close = ()=>{
    $(".alert").remove()
  }
})
