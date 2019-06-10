function fizzbuzzGo(number) {
    if(!isNaN(number)) {
        let output = "";
        if(number % 3 === 0)
            output += "fizz";
        if(number % 5 ===0)
            output += "buzz";
        if(output === "")
            output += number;
        return output;
    }
    else {
        return "Not a number";
    }
}