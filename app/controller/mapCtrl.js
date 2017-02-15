capstone.controller("MapCtrl", function($scope,doctorFactory){
  $scope.zipcode = doctorFactory.getZipcode()
  $scope.speciality = doctorFactory.getuserSpeciality()
  $scope.insurance = doctorFactory.getuserInsurance()
  $scope.doctorList = doctorFactory.getDoctorlist()
  console.log($scope.doctorList)

  // function initMap() {
  //       var uluru = {lat: 36.1749925, lng: 36.1749925};
  //       $scope.map = new google.maps.Map(document.getElementById('map'), {
  //         zoom: 4,
  //         center: uluru,
  //         mapTypeId: google.maps.MapTypeId.HYBRID
  //       });
  //       var marker = new google.maps.Marker({
  //         position: uluru,
  //         setMap: map

  //       });
  //     }
       function initMap() {
        var uluru = {lat: 36.1749925, lng: -86.5121292};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 4,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }
      initMap()
})
