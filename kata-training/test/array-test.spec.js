describe("Array test", function () {
   it("compare numbers method should defined", function () {
      expect(compareNumbers).toBeDefined();
   });

   it('should compare 1 & 2 and return 2', () => {
       expect(compareNumbers(1, 2)).toBe(2);
   });

   it('should compare 2 & 1 and return 1', () => {
      expect(compareNumbers(2, 1)).toBe(1);
   });
   it('should return 0 for compare 2 & 2', () => {
       expect(compareNumbers(2, 2)).toBe(0);
   });

   it("compare arrays method should be defined", () => {
        expect(compareArray).toBeDefined();
   });

   it('compare arrays returns an array', () =>{
       expect(Array.isArray(compareArray())).toBe(true);
   });

   it("should return [2] when input array [1] [2]", () => {
       expect(compareArray([1], [2])).toEqual([2]);
   });

    it("should return [1] when input array [2] [1]", () => {
        expect(compareArray([2], [1])).toEqual([1]);
    });
});