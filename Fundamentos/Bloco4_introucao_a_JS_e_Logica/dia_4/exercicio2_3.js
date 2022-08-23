function repete (array){
    let vezes = 0;
    let numRepete = 0;
    for(let index = 0; index < array.length ; index += 1){
         let sum = 0;
        for(let cont = 0; cont < array.length ; cont += 1){
            if(array[index] === array[cont]){
                sum += 1;
            }
        }
        if( vezes < sum){
        vezes = sum;
        numRepete = array[index];
        }
    }
    return numRepete;
}

let numbers = [2, 3, 2, 5, 8, 2, 3];

console.log(repete(numbers));