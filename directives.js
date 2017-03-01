var app = angular.module("myMod");
app.directive("footDir", function(){
  return{
    restrict: "EA",
    replace:true,
    templateUrl:"footer.html",
  };
});

app.directive("headDir", function(){
  return{
    restrict: "EA",
    replace:true,
    templateUrl:"header.html",
  };
});
