capstone.controller ("PublicCtrl", function ($http,$scope,doctorFactory,$location) {

  $scope.speciality = doctorFactory.getSpeciality();
  $scope.user_insurance = doctorFactory.getInsurance();
  $scope.getDoctor = ()=>{
    $http.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${$scope.zipcode}&key=AIzaSyCrXqSQFiIX6Xvdz6LEgxHHL9ERKyToE40`)
    .then((data)=>{
      $scope.lat = data.data.results[0].geometry.location.lat
      $scope.long = data.data.results[0].geometry.location.lng
      console.log($scope.lat , $scope.long)
      $http.get(`https://api.betterdoctor.com/2016-03-01/doctors?specialty_uid=${$scope.speciality}&insurance_provider=${$scope.user_insurance}&location=${$scope.lat}%2C${$scope.long}%2C5&skip=0&limit=10&user_key=cc89a9786eb0b9f8f2a731a37cb8800e`)
      .then((data)=>{
        $scope.doctorList = data.data.data
        console.log($scope.doctorList)
        $location.path("/publicresults")
      })
    })
  }
})
