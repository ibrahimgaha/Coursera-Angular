(function() {
    'use strict';
  
    angular.module("LunchCheck", [])
      .controller('LunchCheckController', LunchCheckController);
  
    LunchCheckController.$inject = ['$scope'];
  
    function LunchCheckController($scope) {
      $scope.check = function() {
        if (!$scope.lunchItems) {
          $scope.message = "Please enter data first!";
        } else {
          var items = $scope.lunchItems.split(',');
          if (items.length <= 3) {
            $scope.message = "Enjoy!";
          } else {
            $scope.message = "Too much!";
          }
        }
      };
    }
  })();
  