angular.module('starter.controllers', [])

.controller('HomeCtrl', function($scope, $q, $ionicModal, $ionicPopup) {

  // Modal declaration
  $ionicModal.fromTemplateUrl('modals/default-modal.html', {
      id: '1',
      scope: $scope,
      animation: 'slide-in-up',
      backdropClickToClose: false
  }).then(function (modal) {
      $scope.modal = modal;
  });

  // Cleanup the modal when we're done with it!
  $scope.$on('$destroy', function() {
    $scope.modal.remove();
  });

  $scope.openModal = function() {
    $scope.modal.show();
  };

  $scope.closeModal = function() {
    $scope.modal.hide();
    $scope.showAlert('ionic');
  };



  // My Factory
  var initialiseModal = function() {
    // if modal is already initialized return it
    if ($scope.customModal) {
      return $q.when();
    } else { // initialize the modal
      return $ionicModal.fromTemplateUrl('modals/custom-modal.html', {
          id: '1',
          scope: $scope,
          backdropClickToClose: false
      }).then(function(modal) {
          $scope.customModal = modal;
      });
    }
  };

  $scope.customOpenModal = function () {
    initialiseModal().then(function() {
        $scope.customModal.show();
    });
  };

  $scope.customCloseModal = function() {
    // Cleanup the modal
    if ($scope.customModal) {
      $scope.customModal.remove().then(function() {
        $scope.customModal = null;
        $scope.showAlert();
      });
    }
  };

  // An alert dialog
  $scope.showAlert = function(val) {
   let title = 'Modal Removed from DOM';
   if(val) title = 'Modal still on the DOM';

   var alertPopup = $ionicPopup.alert({
     title: `${title}`,
     template: 'Open the inspector tool and look for the modal-backdrop.'
   });

   alertPopup.then(function(res) {
     console.log('Thank you for testing.');
   });
  };

});
