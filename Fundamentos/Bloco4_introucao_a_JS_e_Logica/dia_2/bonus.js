let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

/*for (let index = 1; index < numbers.length; index += 1) {
  for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
    if (numbers[index] < numbers[secondIndex]) {
      let position = numbers[index];
      numbers[index] = numbers[secondIndex];
      numbers[secondIndex] = position;
    }
  }
}
console.log(numbers);

for (let index = 1; index < numbers.length; index += 1){
  for (let secondIndex = 0; secondIndex < index; secondIndex +=1){
      if(numbers[index] > numbers[secondIndex]){
        let position = numbers[index];
        numbers[index] = numbers[secondIndex];
        numbers[secondIndex] = position;
    }
  }
}

console.log(numbers);*/
let numbersX = [];
for(let index = 1; index < numbers.length; index+= 1) {
  for(let secondIndex = index - 1 ; secondIndex <  index; secondIndex += 1) {
    numbersX.push(numbers[secondIndex]*numbers[index])
  if( index === numbers.length - 1){
    numbersX.push(numbers[index]* 2)
  }
  }
}
console.log(numbersX);

