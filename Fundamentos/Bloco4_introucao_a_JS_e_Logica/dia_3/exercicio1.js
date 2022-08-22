let array = [];
let sum = 0;

/*for(let index = 2; index <= 150 ; index += 1){
    array.p/ush(index);
}

for (let index = 0; index < array.length ; index += 1){
    if(array[index] % 3 === 0) {
        sum += 1
    }
}*/
for(let index = 2; index <= 150 ; index += 1){
    if(index % 3 === 0){
        sum += 1;
    }
}

if (sum >= 50){
    console.log('existem 50 ou mais numeros divisiveis por 3')
}

console.log(sum);