capstone.controller("ProfileCtrl", function($http,$scope,AuthFactory){
  $scope.uid = AuthFactory.getUid().uid
  console.log($scope.uid)
  $http.get(`https://frontendcapstone.firebaseio.com/users/${$scope.uid}/favoriteDoc.json`)
  .then((data)=>{
    $scope.doctorList = data.data
    console.log($scope.doctorList)

   var doctorSpecialities = {}
  for (var key in $scope.doctorList){
    console.log(key)
    doctorSpecialities[key] = $scope.doctorList[key].Speciality
      console.log(doctorSpecialities)
  }
  $scope.doctorSpeciality = doctorSpecialities
  console.log($scope.doctorSpeciality)

  // var doctorsSpecialityList = {}
  // for (var key in $scope.doctorSpeciality){
  //   doctorsSpecialityList[key] = $scope.doctorSpeciality[key]
  // }
  // console.log(doctorsSpecialityList)
    // $scope.doctorsSpecialityList = Object.values(doctorsSpecialityList)
    // console.log($scope.doctorsSpecialityList)

  })
})
