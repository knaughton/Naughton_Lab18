var app = angular.module('myMod');

app.controller('outputCtrl', function($scope, apiService) {
  $scope.finalData = apiService.returnResults();
  console.log($scope.finalData);
});
