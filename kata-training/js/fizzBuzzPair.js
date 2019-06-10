function fizzBuzzPair(int){
    let output = "";
    if(isNaN(int)) return Number (int);
    if (0 >= int || 101 <= int) return  "Please enter a value between 1 and 100";

    if (int % 3 === 0) output += "fizz";
    if (int % 5 === 0) output += "buzz";
    if (output != "") return output;
    else
        return output += int;


}