capstone.controller("RegisterCtrl", function($scope,$http,AuthFactory,$location,user1){
// $(".button-collapse").sideNav();
$http.get(`states.json`)
.then((data)=>{
  $scope.stateName = data.data
  console.log($scope.stateName)
 $('input.autocomplete').autocomplete({
    data: $scope.stateName,
    limit: 10 // The max amount of results that can be shown at once. Default: Infinity.
  });
 })
$scope.date = new Date();


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
  $scope.register = () => {
    console.log("img.src", $scope.img)
    console.log("im register")
    AuthFactory.getter($scope.user_email,$scope.user_password)
    .then ((data)=> {
            console.log(data)
            $scope.UID = data
            // $http.post(`https://frontendcapstone.firebaseio.com/users/.json`,{
            //   uid: $scope.UID
            // })

            $http.post(`https://frontendcapstone.firebaseio.com/users/${$scope.UID}.json`,{
                    uid: $scope.UID,
                    Firstname: $scope.firstName,
                    Lastname: $scope.lastName,
                    email: $scope.user_email,
                    password: $scope.user_password,
                    DOB: $scope.user_dob,
                    imageUrl : $scope.img,
                    Address: {Address1: $scope.user_addressLine1,
                              Address2: $scope.user_addressLine2,
                              City: $scope.user_city,
                              state: $scope.user_state,
                              zipcode: $scope.user_zipcode}
    })
         Materialize.toast("registered successfully", 1000)
        $location.path(`/`)

})

}


})
