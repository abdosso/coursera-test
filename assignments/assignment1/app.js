(function () {
'use strict';

angular.module("LunchCheck", [])
.controller("LunchCheckController", LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {

  $scope.checkIfTooMuch = function ( ) {


   if ($scope.list == undefined || $scope.list == "")
     {
         $scope.css="is";
      return  $scope.messageToShow = "Please enter data first";
     }
     else{
         var result=$scope.list.split(',');
         $scope.css="not";
         if (result.length  > 3) {

             return  $scope.messageToShow = "Too much !";
         }
         else {

           return   $scope.messageToShow= "Enjoy !";
         }

 }

  };
}

})();
