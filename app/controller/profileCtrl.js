capstone.controller("ProfileCtrl", function($http,$scope,AuthFactory,$location){
  $('.collapsible').collapsible({
    // accordion: false, // A setting that changes the collapsible behavior to expandable instead of the default accordion style
    // onOpen: function(el) { alert('Open'); }, // Callback for Collapsible open
    // onClose: function(el) { alert('Closed'); } // Callback for Collapsible close
  });

  $scope.uid = AuthFactory.getUid().uid
  console.log($scope.uid)
  $http.get(`https://frontendcapstone.firebaseio.com/users/${$scope.uid}.json`)
  .then((data)=>{

    console.log(data.data)
    $scope.key = Object.keys(data.data)
    console.log("key", $scope.key[0])
    $scope.userKey = Object.values(data.data)
    $scope.user = $scope.userKey[0]
    console.log($scope.user)
    var userDob1 = $scope.userKey[0].DOB.split("T",2)
    $scope.userDob = userDob1[0]
    console.log("userDob",$scope.userDob)
  })
$scope.date = new Date();
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
      $(`#${$scope.key}`).remove()
    })
  }
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
    console.log("filelist[0]", fileList[0])
    storageRef.child(fileList[0].name).put(fileList[0])
      .then(function(snapshot) {
        console.log('Uploaded a blob or file!');


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
 $scope.save = ()=>{
  console.log($scope.user.Firstname)
   console.log($scope.key[0])
   console.log($scope.uid)
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

    console.log(data.data)
    $scope.key = Object.keys(data.data)
    console.log("key", $scope.key[0])
    $scope.userKey = Object.values(data.data)
    $scope.user = $scope.userKey[0]
    console.log($scope.user)
    var userDob1 = $scope.userKey[0].DOB.split("T",2)
    $scope.userDob = userDob1[0]
    console.log("userDob",$scope.userDob)
  })
  })
  $("#modal3").modal("close")
 }


})
