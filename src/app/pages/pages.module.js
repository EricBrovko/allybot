/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages', [
    'ui.router',

    'BlurAdmin.pages.dashboard',
    'BlurAdmin.pages.charts',
    'BlurAdmin.pages.profile'
  ])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($urlRouterProvider, baSidebarServiceProvider) {
    baSidebarServiceProvider.addStaticItem({
      title: 'Profile',
      icon: 'ion-person',
      subMenu: [
        {
          title: 'User Profile',
          stateRef: 'profile'
        },
        {
          title: 'Sign out',
          fixedHref: 'auth.html',
          // blank: true
        },
        // {
        //   title: 'Sign In',
        //   fixedHref: 'auth.html',
        //   blank: true
        // },
        // {
        //   title: 'Sign Up',
        //   fixedHref: 'reg.html',
        //   blank: true
        // },
        // {
        //   title: '404 Page',
        //   fixedHref: '404.html',
        //   blank: true
        // }
      ]
    });

    $urlRouterProvider.otherwise('/dashboard');
  }
})();