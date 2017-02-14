capstone.controller("FavoriteCtrl", function($scope,$http,AuthFactory){
  $scope.uid = AuthFactory.getUid().uid
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
    $scope.key = key1
    console.log($scope.key)
    $http.delete(`https://frontendcapstone.firebaseio.com/users/${$scope.uid}/favoriteDoc/${key1}.json`)
    .then((data)=>{
      console.log(data)
      $(`#${$scope.key}`).remove()
    })
  }
})
