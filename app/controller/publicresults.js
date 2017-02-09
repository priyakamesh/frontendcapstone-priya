capstone.controller("PublicresultsCtrl", function ($scope,doctors,$location,AuthFactory){

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

  // $scope.myDoctor = (key)=>{
  //   console.log(key)
  //   $scope.myDoctor = $scope.doctorList[key].practices
  //   console.log($scope.myDoctor)
  //   $location.path("/privateview")
  // }

  $scope.moreInfo = ()=>{
    if (firebase.auth().currentUser){
      console.log("i have a user")
      $scope.uid = AuthFactory.getUid()

      console.log($scope.uid)
    }
    else{
       $('.modal').modal({
          dismissible: true, // Modal can be dismissed by clicking outside of the modal
          // opacity: .5, // Opacity of modal background
          inDuration: 300, // Transition in duration
          outDuration: 200, // Transition out duration
          startingTop: '4%', // Starting top style attribute
          endingTop: '10%', // Ending top style attribute
          ready: function(modal, trigger) { // Callback for Modal open. Modal and trigger parameters available.
            console.log(modal, trigger);
          },
          complete: function () { $(".modal").modal("close") } // Callback for Modal close
          })

       $scope.cancel = ()=>{
        $("#modal1").modal("close")
        $location.path("/publicresults");
        }

    }
  }
  $scope.loginLink = ()=>{
    $("#modal1").modal("close")
    $location.path("/login")
  }
  $scope.registerLink = ()=>{
    $("#modal1").modal("close")
    $location.path("/register")
  }
})
