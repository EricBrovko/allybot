(function () {
  'use strict';

  angular.module('BlurAdmin.pages.general', [

  ])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('general', {
          url: '/general',
          templateUrl : 'app/pages/general/main.html',
        });
  }

})();
