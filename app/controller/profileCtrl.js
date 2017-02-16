capstone.controller("ProfileCtrl", function($http,$scope,AuthFactory,$location){
  //COLLAPSIBLE PLUGIN FROM MATERIALIZE
  $('.collapsible').collapsible({});

//AUTH CHECK TO GET PARTICULAR USER
  $scope.uid = AuthFactory.getUid().uid
  $http.get(`https://frontendcapstone.firebaseio.com/users/${$scope.uid}.json`)
  .then((data)=>{
    $scope.key = Object.keys(data.data)
    $scope.userKey = Object.values(data.data)
    $scope.user = $scope.userKey[0]
    var userDob1 = $scope.userKey[0].DOB.split("T",2)
    $scope.userDob = userDob1[0]
  })
  //THIS GIVES TODAY DATE
  $scope.date = new Date();
  $http.get(`https://frontendcapstone.firebaseio.com/users/${$scope.uid}/favoriteDoc.json`)
   .then((data)=>{
      $scope.doctorList = data.data
     var doctorSpecialities = {}
    for (var key in $scope.doctorList){
      doctorSpecialities[key] = $scope.doctorList[key].Speciality
    }
    $scope.doctorSpeciality = doctorSpecialities
  })
  //DELETE FUNCTION TO REMOVE DOCTOR FROM DOCTORLIST
  $scope.delete = (key1)=>{
    $scope.key = key1
    $http.delete(`https://frontendcapstone.firebaseio.com/users/${$scope.uid}/favoriteDoc/${key1}.json`)
    .then((data)=>{
      $(`#${$scope.key}`).remove()
    })
  }
  //EDIT PERSONAL INFORMATION
 $scope.updateInfo = ()=>{
  $('#modal3').modal({
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

  let storageRef = firebase.storage().ref();

  let inputElement = document.getElementById("fileInput");
  inputElement.addEventListener("change", handleFiles, false)
  function handleFiles() {
    var fileList = this.files; /* now you can work with the file list */
    storageRef.child(fileList[0].name).put(fileList[0])
      .then(function(snapshot) {
        storageRef.child(fileList[0].name).getDownloadURL()
        .then((url)=>{
          var img =document.getElementById("myImg")
          img.src = url;
          $scope.img = img.src;

        })
        .catch((error)=>{
          alert("error")
        })
      });
  }
  //SAVE CHANGES FUNCTION
 $scope.save = ()=>{
  $http.patch(`https://frontendcapstone.firebaseio.com/users/${$scope.uid}/${$scope.key[0]}.json`,{
                    Firstname: $scope.user.Firstname,
                    Lastname: $scope.user.Lastname,
                    imageUrl: $scope.img,
                    // DOB: $scope.user_dob,
                    Address: {Address1: $scope.user.Address.Address1,
                              Address2: $scope.user.Address.Address2,
                              City: $scope.user.Address.City,
                              state: $scope.user.Address.state,
                              zipcode: $scope.user.Address.zipcode}
  })
  .then((data)=>{
    $http.get(`https://frontendcapstone.firebaseio.com/users/${$scope.uid}.json`)
    .then((data)=>{
    $scope.key = Object.keys(data.data)
    $scope.userKey = Object.values(data.data)
    $scope.user = $scope.userKey[0]
    var userDob1 = $scope.userKey[0].DOB.split("T",2)
    $scope.userDob = userDob1[0]
  })
  })
  $("#modal3").modal("close")
 }
 //CANCEL CHANGES FUNCTION
$scope.cancel = ()=>{
  $location.url("/profile")
  $("#modal3").modal("close")
}

})
