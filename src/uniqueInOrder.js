// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.
// For example:
// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]

function uniqueInOrder(arr) {

    let checkedArr = (typeof arr === 'string') ? arr.split('') : arr;
    let currentChar = null;
    let result = [];

    for (let char of checkedArr) {
        if (char !== currentChar) {
            result.push(char);
            currentChar = char;
        }
    }

    return result;
}

module.exports = {uniqueInOrder};