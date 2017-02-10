capstone.controller("ProfileCtrl", function($http,$scope,AuthFactory){
  $scope.uid = AuthFactory.getUid().uid
  console.log($scope.uid)
  $http.get(`https://frontendcapstone.firebaseio.com/users/${$scope.uid}.json`)
  .then((data)=>{
    console.log(data.data)
    $scope.userKey = Object.values(data.data)
    $scope.user = $scope.userKey[0]
    var userDob = $scope.userKey[0].DOB.split("T",2)
    $scope.userDob = userDob[0]
  })


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
  })
  $scope.delete = (key1)=>{
    console.log("delete")
    // $scope.key = key1
    // console.log($scope.key)
    $http.delete(`https://frontendcapstone.firebaseio.com/users/${$scope.uid}/favoriteDoc/${key1}.json`)
    .then((data)=>{
      $("#key1").remove()
    })
  }
 $scope.updateInfo = ()=>{
  console.log($scope.user_Firstname)
 }

})
