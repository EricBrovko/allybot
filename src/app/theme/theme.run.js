/**
 * @author v.lugovksy
 * created on 15.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.theme')
    .run(themeRun)

  /** @ngInject */
  function themeRun($timeout, $rootScope, layoutPaths, preloader, $q, baSidebarService, themeLayoutSettings, $state) {
    var notAdminPages = ['general', 'login'];
    $rootScope.$state = $state
      console.log('$initial', $state);


    $rootScope.$watch('$state.current.name', function (newValue, oldValue) {
      $rootScope.isAdminPage = notAdminPages.indexOf($state.current.name) === -1;
    });

    $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
      $rootScope.isAdminPage = notAdminPages.indexOf($state.current.name) === -1;
      // console.log('$stateChangeSuccess', $rootScope.isAdminPage);
    });

    if ($rootScope.isAdminPage) {
      console.log('isAdminPage loadAdmin() ', $rootScope.isAdminPage);
      loadAdmin()
    } else {
      console.log('isAdminPage', $rootScope.isAdminPage);
      $rootScope.$pageFinishedLoading = true;
    }

    function loadAdmin() {
      var whatToWait = [
        preloader.loadAmCharts(),
        $timeout(3000)
      ];

      var theme = themeLayoutSettings;
      if (theme.blur) {
        if (theme.mobile) {
          whatToWait.unshift(preloader.loadImg(layoutPaths.images.root + 'blur-bg-mobile.jpg'));
        } else {
          whatToWait.unshift(preloader.loadImg(layoutPaths.images.root + 'blur-bg.jpg'));
          whatToWait.unshift(preloader.loadImg(layoutPaths.images.root + 'blur-bg-blurred.jpg'));
        }
      }
    
      $q.all(whatToWait).then(function () {
        $rootScope.$pageFinishedLoading = true;
      });

      $timeout(function () {
        if (!$rootScope.$pageFinishedLoading) {
          $rootScope.$pageFinishedLoading = true;
        }
      }, 7000);

      $rootScope.$baSidebarService = baSidebarService;
    }

  }
})();
