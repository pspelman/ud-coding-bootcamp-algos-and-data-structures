const reverseInt = (int) => {
    // numbers that start with zero when reversed should drop leading zeros (e.g., 500 becomes 5, not 005)
    // handle negative numbers
    // flag negative numbers to begin
    const isNegative = int < 0 ? -1 : 1;
    // in order to drop leading zeros, cast back to a number type
    const numAsStrRev = int.toString()
        .replace('-', '')
        .split('')
        .reverse()
        .join('')
    return numAsStrRev * isNegative;
}

module.exports = reverseInt;

