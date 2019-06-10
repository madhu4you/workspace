describe("Suite for the fizzbuzzGo", function () {
    it("Returns NAN for strings", function () {
        expect(fizzbuzzGo("foo")).toEqual("Not a number");
    });
    it("Returns 1 when the number is 1", function () {
        expect(fizzbuzzGo(1)).toEqual("1");
    });
    it("Returns fizz when number is 3", function () {
        expect(fizzbuzzGo(3)).toEqual("fizz");
    });
    it("Returns buzz when number is 5", function () {
        expect(fizzbuzzGo(5)).toEqual("buzz");
    });
    it("Returns the fizz when the number is divisible 3", function () {
        expect(fizzbuzzGo(6)).toEqual("fizz");
    });
    it("Returns the buzz when the number is divisible by 5", function () {
        expect(fizzbuzzGo(10)).toEqual("buzz");
    });
    it("Returns the fizzbuzz when the number us divisible by 3 & 5 both", function () {
        expect(fizzbuzzGo(15)).toEqual("fizzbuzz");
    });
    it("Returns the number when number is not divisible by 3 & 5 both", function () {
       expect(fizzbuzzGo(107)).toEqual("107");
    });
    it("Returns the fizz when the number is -9", function () {
        expect(fizzbuzzGo(-9)).toEqual("fizz");
    });
})