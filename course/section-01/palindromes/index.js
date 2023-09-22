


// SOLUTION 2 - using every()

const palindrome = (str) => {
    return str.split('').every((char, i) => {
        return char === str[str.length - i - 1];
    })
}


// SOLUTION 1
// const palindrome = (str) => {
//     return str === str.split('').reverse().join('');
// }

module.exports = palindrome;

