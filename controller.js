var app = angular.module("myMod");
app.controller("fizzBuzzController", function($scope, fizzBuzzFactory){
  $scope.answer;
  $scope.userNum = function(num){
    console.log(num);
    fizzBuzzFactory.fizzBuzz(num);
    $scope.answer = fizzBuzzFactory.inputReturn();
  }


});
