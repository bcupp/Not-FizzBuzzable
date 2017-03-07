// Step 1: Start with a describe() that indicates what service we're testing.
// Everything else goes inside this function block.
describe("fizzBuzzFactory", function() {

    // Step 2: This tells it which module we're testing.
    beforeEach(module("myMod"));

    // Declare variables here that need to be shared between all the funcitons below.
    var fizzBuzzFactory;

console.log('hello');

    // Step 3: use inject() to grab angular dependencies
    // Here the dependencies should be surrounded by underscores.
    beforeEach(inject(function(_fizzBuzzFactory_) {
      console.log('bye');
      console.log(_fizzBuzzFactory_);
        // Assign each injected dependency to a variable declared above.
        fizzBuzzFactory = _fizzBuzzFactory_; // this is the real whatToWearService.
    }));

    // Step 4: Each test case calls a method on the service and asserts that
    // it returns the right thing.
    it("returns fizz if 3 is entered", function() {
        // Call getOuterwear with 53 degrees. It should return "a coat".
        expect(fizzBuzzFactory.fizzBuzz(3)).toBe('fizz');
    });

    it("returns fizz if 5 is entered", function() {
        // Call getOuterwear with 53 degrees. It should return "a coat".
        expect(fizzBuzzFactory.fizzBuzz(5)).toBe('buzz');
    });

    it("returns fizzBuzz if 15 is entered", function() {
        // Call getOuterwear with 53 degrees. It should return "a coat".
        expect(fizzBuzzFactory.fizzBuzz(15)).toBe('fizzBuzz');
    });
});
