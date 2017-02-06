capstone.controller ("PublicCtrl", function ($http,$scope) {
   $('.parallax').parallax();

   // $http.get (`https://api.betterdoctor.com/2016-03-01/specialties?user_key=cc89a9786eb0b9f8f2a731a37cb8800e`)
   // .then((data)=>{
   //    $scope.specialities =  data.data.data
   //    var specialtityArray = {}
   //    for (var key in $scope.specialities){
   //      specialtityArray[$scope.specialities[key].name]=null
   //    }
   //    console.log(specialtityArray)
   //    $('#autocomplete-inputSpeciality').autocomplete({
   //    data: specialtityArray,
   //    limit: 10 // The max amount of results that can be shown at once. Default: Infinity.
   //    });

   // })
   // .then (()=>{
    $http.get(`https://api.betterdoctor.com/2016-03-01/insurances?user_key=cc89a9786eb0b9f8f2a731a37cb8800e`)
      .then((data)=>{
        $scope.insurance = data.data.data
        var insurance = {}
        for (var key in $scope.insurance){
          insurance[$scope.insurance[key].uid] = null
        }
        console.log(insurance)
        $('#autocomplete-inputInsurance').autocomplete({
          data: insurance,
          limit: 10 // The max amount of results that can be shown at once. Default: Infinity.
          });
      })
   // })

  $http.get(`states.json`)
    .then((data)=>{
      $scope.states = data.data
      $('#autocomplete-inputStates').autocomplete({
      data: $scope.states,
      limit: 10 // The max amount of results that can be shown at once. Default: Infinity.
    });
  })



  $scope.getDoctor = ()=>{
    console.log($scope.zipcode)

    $http.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${$scope.zipcode}&key=AIzaSyCrXqSQFiIX6Xvdz6LEgxHHL9ERKyToE40`)
    .then((data)=>{
      $scope.lat = data.data.results[0].geometry.location.lat
      $scope.long = data.data.results[0].geometry.location.lng
      console.log($scope.lat , $scope.long)
      $http.get(`https://api.betterdoctor.com/2016-03-01/doctors?specialty_uid=${$scope.speciality}&insurance_provider=${$scope.insurance}&location=${$scope.lat}%2C${$scope.long}%2C100&skip=0&limit=10&user_key=cc89a9786eb0b9f8f2a731a37cb8800e`)
      .then(console.log)
    })
  }
})
