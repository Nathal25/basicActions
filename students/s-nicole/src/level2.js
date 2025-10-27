//Generar un arreglo con numeros pares desde 0 hasta n
function generateEvenNumbers(n){
  const result = [];
  for(let i=0; i <= n; i++){
    if( i%2===0) result.push(i);
  }
  return result;
}

//Verifica si un número es positivo o negativo
function checkNumber(num){
  if(num>=0){
    return 'positivo';
  }
  return 'negativo';

}

//Verifica si un número se encuentra en un rango
function isInRange(num, min, max){
  return num >= min && num <= max;
}

module.exports = { generateEvenNumbers, checkNumber, isInRange };
