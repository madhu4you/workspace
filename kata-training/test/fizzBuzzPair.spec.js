describe("Test case for FizzBuzzPair", function () {
    it("Returns string when input is number", function () {
       expect(typeof fizzBuzzPair(3)).toEqual("string");
    });
    it("Returns `1` when integer is 1", function(){
        expect(fizzBuzzPair(1)).toEqual("1");
    });
    it("Returns fizz when integer is divisible by 3", function(){
        expect(fizzBuzzPair(3)).toEqual("fizz");
    });
    it("Returns buzz when integer is divisible by 5", function () {
        expect(fizzBuzzPair(5)).toEqual("buzz");
    });
    it("Returns fizzbuzz when integer is divisible by both 3 and 5", function(){
        expect(fizzBuzzPair(15)).toEqual("fizzbuzz");
    });
    it("Returns NAN when pass string as a input", function () {
        expect(fizzBuzzPair("foo")).toBeNaN();
    });
    it("Returns an error message if int is less than zero", function(){
        expect(fizzBuzzPair(0)).toEqual("Please enter a value between 1 and 100");
    });
    it("Returns an error message if int is grater then 100", function(){
        expect(fizzBuzzPair(101)).toEqual("Please enter a value between 1 and 100");
    });
})