angular.module('starter.services', [])

  /*
      Modal Factory
  */
  .factory('ModalService', function ($ionicModal, $rootScope) {
      var service = this;

      service.openModal = function (id, modalUrl) {
          var $scope = $rootScope.$new(),
          myModalInstanceOptions = {
              id: id,
              scope: $scope,
              animation: 'slide-in-up',
              backdropClickToClose: false
          };

          var myModal = {
              open: open
          };

          $ionicModal.fromTemplateUrl(modalUrl, myModalInstanceOptions).
            then(function (modalInstance) {
                $scope.close = function () {
                    closeAndRemove(modalInstance);
                };
                return modalInstance.show();
            });

            function closeAndRemove(modalInstance) {
                return modalInstance.hide()
                    .then(function () {
                        return modalInstance.remove();
                    });
            }

          return myModal;

      };

      service.closeModal = function(id, modalUrl) {
        $ionicModal.fromTemplateUrl(modalUrl).
          then(function (modalInstance) {
              return modalInstance.hide()
                .then(function () {
                    return modalInstance.remove();
                });
          });
      };

      return service;
  });
