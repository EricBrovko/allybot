(function () {
  'use strict';

  angular.module('BlurAdmin.pages', [
    'ui.router',

    'BlurAdmin.pages.dashboard',
    'BlurAdmin.pages.charts',
    'BlurAdmin.pages.profile',

    'BlurAdmin.pages.general',
    'BlurAdmin.pages.login'
  ])
      .config(routeConfig)

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

    $urlRouterProvider.otherwise('/general');
  }
})();
