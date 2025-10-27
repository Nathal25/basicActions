//Verificar si el numero es par
function isEven(num){
  return num % 2 === 0;
}

// Da la longitud de una palabra
function wordLength(word) {
  if (typeof word !== 'string') return 0;
  return word.length;
}

// Invierte un array
function reverseArray(arr) {
  return arr.slice().reverse();
}

module.exports = {isEven, wordLength, reverseArray};
