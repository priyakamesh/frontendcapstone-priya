capstone.controller("LogoutCtrl", function($scope){
  // $(".button-collapse").sideNav();
// $('#modal4').modal({
//           dismissible: true, // Modal can be dismissed by clicking outside of the modal
//           opacity: .5, // Opacity of modal background
//           inDuration: 300, // Transition in duration
//           outDuration: 200, // Transition out duration
//           startingTop: '4%', // Starting top style attribute
//           endingTop: '10%', // Ending top style attribute
//           ready: function(modal, trigger) { // Callback for Modal open. Modal and trigger parameters available.
//             console.log(modal, trigger);
//           } // Callback for Modal close
//           })
  $scope.logout=()=>{
    firebase.auth().signOut()
    Materialize.toast("logged out", 1000)
    // $('#modal4').modal('close')
    $('.logoutButton').addClass('ng-hide')
    $('.profileButton').addClass('ng-hide')
      $('.logInButton').removeClass("ng-hide")
      $('.registerButton').removeClass("ng-hide")
  }
  $scope.cancel = ()=>{
    // $('#modal4').modal('close')
    $location.url("/")
  }
})
