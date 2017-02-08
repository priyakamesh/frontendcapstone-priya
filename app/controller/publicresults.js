capstone.controller("PublicresultsCtrl", function ($scope,doctors,$location){

  $scope.doctorList = doctors
  console.log($scope.doctorList)
  var doctorSpecialities = {}
  for (var speckey in $scope.doctorList){
    doctorSpecialities = $scope.doctorList[speckey].specialties

  }
  $scope.doctorSpeciality = Object.values(doctorSpecialities)

  console.log($scope.doctorSpeciality)

  // $scope.myDoctor = (key)=>{
  //   console.log(key)
  //   $scope.myDoctor = $scope.doctorList[key].practices
  //   console.log($scope.myDoctor)
  //   $location.path("/privateview")
  // }
})
