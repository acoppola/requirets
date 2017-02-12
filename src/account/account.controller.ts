define([
  'app',
], function (app) {

angular.module('account',[]);

angular.module('account').controller('AccountCtrl', function($scope,$window,$state,$stateParams) {
//SALUTIATE

  $scope.settings = {
    enableFriends: true
  };
});
});