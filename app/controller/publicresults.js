capstone.controller("PublicresultsCtrl", function ($scope,doctors,$location,$http,user){
  $("#map1").addClass("ng-hide")
  $scope.doctorList = doctors
  // console.log($scope.doctorList)
  var doctorSpecialities = {}
  for (var speckey in $scope.doctorList){
    doctorSpecialities = $scope.doctorList[speckey].specialties
  }
  $scope.doctorSpeciality = Object.values(doctorSpecialities)
  var doctorPractices = {}
  for (var locKey in $scope.doctorList){
    doctorPractices = $scope.doctorList[locKey].practices
  }
  $scope.doctorPractices = Object.values(doctorPractices)
  $scope.uid = user
  $scope.moreInfo = (value,key)=>{
    $scope.currentValue = value
    console.log($scope.currentValue)
    $scope.key = key
      $('#modal2').modal({
          dismissible: true, // Modal can be dismissed by clicking outside of the modal
          opacity: .5, // Opacity of modal background
          inDuration: 300, // Transition in duration
          outDuration: 200, // Transition out duration
          startingTop: '4%', // Starting top style attribute
          endingTop: '10%', // Ending top style attribute
          ready: function(modal, trigger) { // Callback for Modal open. Modal and trigger parameters available.
            console.log(modal, trigger);
          } // Callback for Modal close
          })

}
$scope.cancelInfo = ()=>{
        $("#modal2").modal("close")
        $location.path("/publicresults");
        }
$scope.moreLogin = ()=>{
       $('#modal1').modal({
          dismissible: true, // Modal can be dismissed by clicking outside of the modal
          opacity: .5, // Opacity of modal background
          inDuration: 300, // Transition in duration
          outDuration: 200, // Transition out duration
          startingTop: '4%', // Starting top style attribute
          endingTop: '10%', // Ending top style attribute
          ready: function(modal, trigger) { // Callback for Modal open. Modal and trigger parameters available.
            console.log(modal, trigger);
          } // Callback for Modal close
          })

  }
   $scope.cancel = ()=>{
        $("#modal1").modal("close")
        $location.path("/publicresults");
        }
  $scope.loginLink = ()=>{
    $("#modal1").modal("close")
    $location.path("/login")
  }
  $scope.registerLink = ()=>{
    $("#modal1").modal("close")
    $location.path("/register")
  }


  $scope.saveDoc = ()=>{
  $http.post(`https://frontendcapstone.firebaseio.com/users/${user.uid}/favoriteDoc/.json`,
  {
    Title : $scope.doctorList[$scope.key].profile.title,
    first_name: $scope.doctorList[$scope.key].profile.first_name,
    last_name:$scope.doctorList[$scope.key].profile.last_name,
    Speciality : $scope.doctorSpeciality,
    office_address : $scope.doctorPractices
  })
  .then((data)=>{
    $location.path("/profile")
    $("#modal2").modal("close")
  })
}

      $scope.getMap = (value,key1)=>{
        $("#map1").removeClass("ng-hide")

        $("#modal2").modal('close')
        $('html,body').animate({scrollTop: 0},'fast');
        $scope.lat = value.lat
        $scope.lon = value.lon
        function initMap() {
        var uluru = {lat: value.lat, lng: value.lon};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 14,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });

      }
      initMap()
      }
//       $scope.getDirection = () =>{
//         console.log($scope.origin)
//         console.log($scope.lat,$scope.lon)
//         $http.get(`https://maps.googleapis.com/maps/api/directions/json?origin=${$scope.origin}&destination=${$scope.lat} ${$scope.lon}&key=AIzaSyCeTKmlrBla2hBZhm_LTAMT3El0LQTMkps`)
//         .then((data)=>{
//           $http.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${$scope.origin}&key=AIzaSyCrXqSQFiIX6Xvdz6LEgxHHL9ERKyToE40`)
//           .then((data)=>{
//             console.log(data)
//             $scope.lat1 = data.data.results[0].geometry.location.lat
//             $scope.lon1 = data.data.results[0].geometry.location.lng
//             console.log($scope.lat1, $scope.lon1)

//           var uluru = {lat: $scope.lat1,lng: $scope.lon1};
//           var locations = [[$scope.lat,$scope.lon],[$scope.lat1,$scope.lon1]]
//           console.log(locations)

//         })
//       })
// }
})
