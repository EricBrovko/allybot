/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.theme.components')
      .directive('pageTop', pageTop);

  /** @ngInject */
  function pageTop() {
    return {
      restrict: 'E',
      templateUrl: 'app/theme/components/pageTop/pageTop.html',
      controller: function ($scope) {
        // Add Ajax query for init page
        $scope.profileAvatar = $scope.loadedAvatar || 'Nasta';
      },
      link: function ($scope) {
        $scope.updateProfile = function (avatar) {
          return $scope.avatar = avatar;
        };
      }
    };
  }
})();
