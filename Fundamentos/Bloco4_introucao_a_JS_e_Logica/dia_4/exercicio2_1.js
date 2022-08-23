function maiorValor (array) {
  let maior = 0;
  let maiorIndex = 0;
  for(let index = 0; index < array.length; index += 1 ){
    if (maior < array[index]) {
      maior = array[index];
      maiorIndex = index;
    }
  }
  return maiorIndex;
}

function menorValor (array) {
  let menor = array[0];
  let menorIndex = 0;
  for ( let index = 0; index < array.length ; index += 1){
    if (menor > array[index]){
      menor = array[index];
      menorIndex = index;
    }
  }
  return menorIndex;
}

let numbers = [5, 3, 6, 22, 10, 7];

console.log(maiorValor(numbers));
console.log(menorValor(numbers));


