function inverse(text) {
    return text.split('').reverse().join('');
}

//This function returns the most frequent letter in a string
function mostFrequentLetter(text){
    const letterCount = {};
    for (const letter of text) {
        letterCount[letter] = (letterCount[letter] || 0) + 1;
    }
    
    return Object.keys(letterCount).reduce((a, b) => letterCount[a] > letterCount[b] ? a : b);
}

//This function returns the average of an array of numbers
function average(array){
    const sum = array.reduce((a, b) => a + b, 0);
    return sum / array.length;
}

module.exports = { inverse, mostFrequentLetter, average };
