var app = angular.module("myMod");
app.factory("fizzBuzzFactory", function() {
    var answer;
    return {
        fizzBuzz: function(userInput) {
            if (userInput % 3 === 0 && userInput % 5 === 0) {
                answer = "fizzBuzz";
            } else if (userInput % 3 === 0) {
                answer = "fizz";
            } else if (userInput % 5 === 0) {
                answer = "buzz";
            } else {
                answer = "Your number is not fizzBuzzable";
            }
            console.log(answer);

        },
        inputReturn: function(){
          return answer;
        }

    }

});
