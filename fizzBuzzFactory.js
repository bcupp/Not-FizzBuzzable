var app = angular.module("myMod");
console.log("AAA")
app.factory("fizzBuzzFactory", function() {
    console.log("BBB")
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
            return answer;

        },
        inputReturn: function(){
          return answer;
        }

    }

});
