/// <reference path="typings/tsd.d.ts" />
define([
    'app'
], function (app) {
    'use strict';
    // the run blocksf
    app.run(function ($ionicPlatform, $rootScope, $ionicHistory, $window) {
        $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
            //$ionicHistory.clearCache();
            //cancella la cache dei moduli che altrimenti rimarrebbero aperti
            console.log(toState, fromState);
            if (!toState.ischild) {
                if (toState.name != fromState.name && fromState.name !== "") {
                    $window.location.reload(true);
                }
            }
        });
        $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
            //se il cambio stato è ok
        });
        $ionicPlatform.ready(function () {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                cordova.plugins.Keyboard.disableScroll(true);
            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleDefault();
            }
        });
    });
});
