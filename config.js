var app = angular.module("myMod");

app.config(function($routeProvider, $locationProvider){
  $routeProvider
  .when('/fizzBuzz', {
    controller: 'fizzBuzzController',
    templateUrl: 'fizzBuzz.html'
  })
  .when('/quoteGenerator', {
    controller: 'apiController',
    templateUrl: 'api.html'
  })
  .otherwise({
    redirectTo:'/',
  });
  // .when('')
  $locationProvider.hashPrefix('');
});
