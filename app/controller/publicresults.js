capstone.controller("PublicresultsCtrl", function ($scope,doctors,$location,user){
  $scope.doctorList = doctors
  console.log(doctors)
  if($scope.doctorList === null){
    alert("Sorry no doctors found in the area")

  }
  console.log($scope.doctorList)
  var doctorSpecialities = {}
  for (var speckey in $scope.doctorList){
    doctorSpecialities = $scope.doctorList[speckey].specialties

  }
  $scope.doctorSpeciality = Object.values(doctorSpecialities)

  console.log($scope.doctorSpeciality)
  var doctorPractices = {}
  for (var locKey in $scope.doctorList){
    doctorPractices = $scope.doctorList[locKey].practices
  }
  // $scope.doctorPractices = Object.values(doctorPractices)
  // console.log($scope.doctorPractices)
  // $scope.myDoctor = (key)=>{
  //   console.log(key)
  //   $scope.myDoctor = $scope.doctorList[key].practices
  //   console.log($scope.myDoctor)
  //   $location.path("/privateview")
  // }
$scope.uid = user
$scope.moreInfo = (value)=>{
  console.log("value" , value)
  $scope.currentValue = value
  $scope.doctorPractices = Object.values(doctorPractices)
  console.log($scope.doctorPractices)
      console.log("i have a user")
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

      // $("#modal2").modal("open")

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


  $scope.docSave = ()=>{
  console.log("im docSave")

  console.log($scope.uid)
  $http.post(`https://frontendcapstone.firebaseio.com/users/${$scope.uid}/favoriteDoc/.json`,
  {
    Title : $scope.doctorList.profile.title ,
    first_name: $scope.doctorList.profile.first_name,
    last_name:$scope.doctorList.profile.last_name,
    Speciality : $scope.doctorSpeciality,
    office_address : $scope.doctorPractices
  })
  .then((data)=>{
    $location.path("#/profile")
  })
  // console.log($scope.favoriteDoc)
}
})
