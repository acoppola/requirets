define([
    'app'
], function (app) {
    app.config(function ($ocLazyLoadProvider, $stateProvider, $urlRouterProvider) {
        $ocLazyLoadProvider.config({
            loadedModules: ['app'],
            asyncLoader: require
        });
        // Ionic uses AngularUI Router which uses the concept of states
        // Learn more here: https://github.com/angular-ui/ui-router
        // Set up the various states which the app can be in.
        // Each state's controller can be found in controllers.js
        $stateProvider
            .state('tab', {
            url: '/tab',
            abstract: true,
            templateUrl: 'templates/tabs.html'
        })
            .state('tab.dash', {
            url: '/dash',
            resolve: {
                load: function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'Dash',
                        files: ['js/dash/module.js']
                    });
                }
            },
            views: {
                'tab-dash': {
                    templateUrl: 'templates/tab-dash.html',
                    controller: 'DashCtrl'
                }
            }
        })
            .state('tab.chats', {
            url: '/chats',
            resolve: {
                load: function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'Chats',
                        files: ['js/chats/module.js']
                    });
                }
            },
            views: {
                'tab-chats': {
                    templateUrl: 'templates/tab-chats.html',
                    controller: 'ChatsCtrl'
                }
            }
        })
            .state('tab.chat-detail', {
            url: '/chats/:chatId',
            ischild: true,
            views: {
                'tab-chats': {
                    templateUrl: 'templates/chat-detail.html',
                    controller: 'ChatDetailCtrl'
                }
            }
        })
            .state('tab.account', {
            url: '/account',
            resolve: {
                load: function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'Account',
                        files: ['js/account/module.js']
                    });
                }
            },
            views: {
                'tab-account': {
                    templateUrl: 'templates/tab-account.html',
                    controller: 'AccountCtrl'
                }
            }
        });
        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/tab/dash');
    });
});
