capstone.controller("PublicresultsCtrl", function ($scope,doctors){

  $scope.doctorList = doctors
  var doctorSpecialities = {}
  for (var key in $scope.doctorList){
    doctorSpecialities = $scope.doctorList[key].specialties

  }
  $scope.doctorSpeciality = Object.values(doctorSpecialities)

  console.log($scope.doctorSpeciality)
})
