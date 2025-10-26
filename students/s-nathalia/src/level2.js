//this function receives an array of numbers and returns the sum of the even numbers
function sumEvenNumbers(array){
  return array.filter(num => num % 2 === 0).reduce((a, b) => a + b, 0);
}
//this function receives a string and converts all vowels to uppercase
function convertVowelsToUpperCase(text){
  var vowel='';
  for (var i=0; i<text.length; i++){
    vowel = text.charAt(i);
    if (vowel == 'a' || vowel == 'e' || vowel == 'i' || vowel == 'o' || vowel == 'u'){
      text = text.replace(vowel, vowel.toUpperCase());
    }}
  return text;
}


function checkAnagram(str1, str2){
  const normalize = str => str.toLowerCase().split('').sort().join('');
  return normalize(str1) === normalize(str2);
}

module.exports = {sumEvenNumbers, convertVowelsToUpperCase, checkAnagram};
