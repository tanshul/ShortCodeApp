// angular.module is a global place for creating, registering and retrieving Angular modules
// 'directory' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'directory.services' is found in services.js
// 'directory.controllers' is found in controllers.js
angular.module('directory', ['ionic', 'directory.controllers'])


    .config(function ($stateProvider, $urlRouterProvider,$httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        $httpProvider.defaults.headers.common = 'Content-Type: application/json';
        delete $httpProvider.defaults.headers.common["X-Requested-With"];
        // Ionic uses AngularUI Router which uses the concept of states
        // Learn more here: https://github.com/angular-ui/ui-router
        // Set up the various states which the app can be in.
        // Each state's controller can be found in controllers.js
        $stateProvider

            .state('directory', {
                url: '/directory',
                templateUrl: 'templates/directory.html',
                controller: 'DirectoryIndexCtrl'
            })

            .state('list', {
                url: '/directory/{listingtype}/',
                templateUrl: 'templates/list.html',
                controller: 'DirectoryListCtrl'
            })            

            .state('add', {
                url: '/directory/add',
                templateUrl: 'templates/add.html',
                controller: 'AddCtrl'
            })

            .state('help', {
                url: '/directory/help',
                templateUrl: 'templates/help.html',
                controller: 'HelpCtrl'
            });

        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/directory');

    });
