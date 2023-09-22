
// SOLUTION 3
const reverse = (str) => {
    debugger;
    return str.split('').reduce((rev, char) => char + rev, '');
}

reverse('asdf');

// SOLUTION 2
// const reverse = (str) => {
//     return str.split('').reverse().join('');
// }

// SOLUTION 1
// const reverse = (str) => {
//     let reversedStr = ''
//     for (let i = str.length-1; i > -1; i--) {
//         reversedStr += str[i]
//     }
//     return reversedStr;
// }

module.exports = reverse;
