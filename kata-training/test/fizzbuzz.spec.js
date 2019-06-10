describe("Suit for FizzBuzz program", function f() {
    it("Return NAN when the number is sting", function () {
        var output = fizzbuzz("abc");
        expect(output).toBeNaN();
    });
    it("Return 1 when the number is 1", function () {
        var output = fizzbuzz(1);
        expect(output).toEqual(1);
    });
    it("Return -1 when the number is 1", function () {
        var output = fizzbuzz(-1);
        expect(output).toEqual(-1);
    });
    it("Return 4 when the number is 4", function () {
        var output = fizzbuzz(4);
        expect(output).toEqual(4);
    });
    it("Return fizz when the number is 3 ", function () {
        var output = fizzbuzz(3);
        expect(output).toEqual("fizz");
    });
    it("Return fizz when the number is -3 ", function () {
        var output = fizzbuzz(-3);
        expect(output).toEqual("fizz");
    });
    it("Return buzz when the number is 5", function () {
       var output = fizzbuzz(5);
       expect(output).toEqual("buzz");
    });
    it("Return fizz when the number is divisible by 3", function () {
        var output = fizzbuzz(6);
        expect(output).toEqual("fizz");
    });
    it("Return buzz when the number us divisible by 5", function () {
       var output = fizzbuzz(10);
       expect(output).toEqual("buzz");
    });
    it("Return fizzbuzz when the number is divisible by 3 & 5", function () {
        var output = fizzbuzz(15);
        expect(output).toEqual("fizzbuzz");
    });
});