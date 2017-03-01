var app = angular.module("myMod");

app.factory('apiFactory', function($http){
  var apiKey ={};

  return {
    grabData: function(){
     var promise = $http({
        url:"https://andruxnet-random-famous-quotes.p.mashape.com/?cat=movies",
        method:'GET',
        headers:{
          "X-Mashape-Key":"zHqf4maixdmshYyJMQVV9RIB3hHsp1Ljh3XjsnZyi6bBzSefK3",
          "Content-Type": "application/x-www-form-urlencoded",
           "Accept": "application/json"
          }
       }).then(function success(response){
         console.log(response);

        return response;
      },  function(error) {
        console.log(error);
      });
      return promise;
    }
  }
});
