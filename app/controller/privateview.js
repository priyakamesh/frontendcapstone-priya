capstone.controller("PrivateviewCtrl", function(doctorFactory,AuthFactory,$scope,$http,$routeParams,$location){
  $scope.mainKey = $routeParams.dockey
  $scope.doctorList = doctorFactory.getDoctor()[$scope.mainKey]
  console.log($scope.doctorList)
  var doctorSpecialities = {}
  for (var key in $scope.doctorList){
    doctorSpecialities = $scope.doctorList.specialties

  }
  $scope.doctorSpeciality = Object.values(doctorSpecialities)

  console.log($scope.doctorSpeciality)

  var doctorPractices = {}
  for (var key in $scope.doctorList){
    doctorPractices = $scope.doctorList.practices

  }
  $scope.doctorPractices = Object.values(doctorPractices)
  console.log($scope.doctorPractices)


// https://www.google.com/maps/@{{lat}},{{long}}z
// $scope.getPosition = (key)=>{

// for (var practKey in $scope.doctorPractices){
//    $scope.lat = $scope.doctorPractices[practKey].lat
//    $scope.long = $scope.doctorPractices[practKey].lon

//   console.log($scope.lat)

//   console.log($scope.long)
// }
// }
//   if (($scope.lat !== null)&&($scope.long !== null)){
//     $http.get (`https://maps.googleapis.com/maps/api/geocode/json?latlng=${$scope.lat},${$scope.long}&key=AIzaSyCrXqSQFiIX6Xvdz6LEgxHHL9ERKyToE40 `)
//     .then((data)=>{
//       // $scope.docLocation = data.data.results[0].formatted_address
//       // console.log($scope.docLocation)
//       $location.path(`/privateview/${$scope.mainKey}`)
//     })
// }
// $scope.uid = AuthFactory.getUid()
$scope.docSave = ()=>{
  console.log("im docSave")
  $location.path("#/profile")
  // console.log($scope.uid)
  // $http.post(`https://frontendcapstone.firebaseio.com/${$scope.uid}/favoriteDoc/.json`,
  // {
  //   Name : {$scope.doctorList.profile.title , $scope.doctorList.profile.first_name, $scope.doctorList.profile.last_name},
  //   Speciality : $scope.doctorSpeciality,
  //   office_address : $scope.doctorPractices
  // })

  // console.log($scope.favoriteDoc)
}
})
