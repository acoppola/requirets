/// <reference path="typings/tsd.d.ts" />
// requires routes, config, run they implicit requiring the app
requirejs([
    'ionic',
    'config',
    'run'
], function () {
    'use strict';
    // Here you have to set your app name to bootstrap it manually
    angular.bootstrap(document, ['app']);
});
