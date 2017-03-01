var app = angular.module("myMod");
app.controller("apiController", function($scope, apiFactory) {
    $scope.answer={};
    $scope.quoteArray=[];

    $scope.randomQuote = function() {

        $scope.output = apiFactory.grabData().then(function(resultOfPromise) {
            console.log(resultOfPromise);
            $scope.answer = resultOfPromise;
            $scope.quoteArray.push({
              author: $scope.answer.data.author,
              quote: $scope.answer.data.quote
            });
        });

    }


});
