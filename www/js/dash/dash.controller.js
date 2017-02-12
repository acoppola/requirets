define([
  'app'
], function (app) {
  angular.module('dash',[]);
angular.module('dash').controller('DashCtrl', function($scope, $state, $window) {
  $scope.goAccount = function(){
    $window.location.reload(true);
    //$state.go("tab.account", {}, {reload:true});
  };
});
});