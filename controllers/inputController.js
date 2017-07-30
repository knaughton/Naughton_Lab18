var app = angular.module('myMod');

app.controller('inputCtrl', function($scope, apiService, $location) {

  $scope.searchMath = function (userType, userNumberMax, userNumberMin) {
    if (userType == undefined || userNumberMax == undefined || userNumberMin == undefined) {
      console.log('boo');
    }

    var userInput = {
      type: userType,
      numberMax: userNumberMax,
      numberMin: userNumberMin
    }

    apiService.apiInfo(userInput).then(function() {
      $location.path('/output');
    });
  };
});
