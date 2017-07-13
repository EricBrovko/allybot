(function () {
  'use strict';

  angular.module('BlurAdmin.pages.login')
    .controller('LoginPageCtrl', LoginPageCtrl);

  /** @ngInject */
  function LoginPageCtrl($scope, $http, UserService, toastr) {
    console.log('login');

    console.log(UserService.GetAll());

    $scope.showSuccessMsg = function() {
      toastr.success('Your information has been saved successfully!');
    };


    $scope.showSuccessMsg1 = function() {
    	console.log(toastr);

      toastr.warning('Your information has been saved successfully!');
    };

  }

})();