/**
 * Array [1, 2, 3]
 * Array [2, 2, 2]
 *
 * Output [2, 0, 1]
 * return 1 => Array 1 value > Array 2 value
 * return 2 => Array 2 value > Array 1 value
 * return 0 => Both values tie Array 1 === Array 2
 */

function compareNumbers(num1, num2) {
    if (num1 > num2) return 1;
    if(num1 == num2) return 0;
    return 2;
}

function compareArray(arr1, arr2) {
    let output = [];
    output = [compareNumbers(arr1[0], arr2[0])];
    return output;
}