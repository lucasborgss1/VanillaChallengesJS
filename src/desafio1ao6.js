const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Desafio 1
// Escreva um código que imprima um por um de todos os elementos de um array.
function printsElements(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}
printsElements(array);

// Desafio 2
// Escreva um código que encontre o maior elemento de um array.
function biggerNumber(array) {
  if (array.length === 0){
    return null ;
  }
  let maxNumero = array[0];

  for (let i = 1; i  < array.length ; i++) {
   if (array[i] > maxNumero) {
    maxNumero = array[i];
   }
  }

  return maxNumero;
}

const result = biggerNumber(array);
console.log ("O maior número é:", result);



// Desafio 3
// Escreva um código que imprima todos os elementos de um array, exceto o primeiro e o último.
// Caso o array tenha um tamanho menor que 3 imprima a mensagem: 'Tamanho do array inválido'
function ignoreFirstAndLastElement(array) {
  if (array.length < 3) {
    console.log('Tamanho do array inválido');
    return;
  }

  for (let i = 1; i < array.length - 1; i++) {
    console.log(array[i]);
  }
  
}

ignoreFirstAndLastElement(array);





// Desafio 4
// Escreva um código que inverta a ordem dos elementos de um array.
function invertElementsArray(array) {
const invertedArray = [];
for (let i = array.length -1; i >= 0; i-- ) {
  invertedArray.push(array[i]);
}
return invertedArray;
}

const invertedArray =
invertedArray(array);
// Desafio 5
//  Escreva um código que recebe uma string por parâmetro e imprima a sua versão invertida.
function invertString(string) {

}

// Desafio 6
// Escreva um código que receba um array de números por parâmetro e retorne
// o array com os elementos duplicados removidos.
function noDuplicates(array) {
  
}

module.exports = {
  biggerNumber,
  printsElements,
  ignoreFirstAndLastElement,
  invertElementsArray,
  invertString,
  noDuplicates
}
