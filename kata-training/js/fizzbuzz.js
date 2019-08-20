function fizzbuzz(number) {
    var output = "";
    if (!isNaN(number)) {
        if (number % 3 === 0)
            output += "fizz";
        if (number % 5 === 0)
            output += "buzz";
        if (output) return output;
        return number;
    }
    return parseInt(number);
}