capstone.controller("FavoriteCtrl", function($scope,$http,AuthFactory){
   // $('.collapsible').collapsible({});
  $scope.uid = AuthFactory.getUid().uid
  //GET FAVORITE DOCTORS
  $http.get(`https://frontendcapstone.firebaseio.com/users/${$scope.uid}/favoriteDoc.json`)
  .then((data)=>{
    $scope.doctorList = data.data
    var doctorSpecialities = {}
    for (var key in $scope.doctorList){
      doctorSpecialities[key] = $scope.doctorList[key].Speciality
    }
    $scope.doctorSpeciality = doctorSpecialities
  })

  //DELETE FUNCTION
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
