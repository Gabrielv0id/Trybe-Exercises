let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = media = maior = impar = 0;
let menor = numbers[0];

for(let index = 0; index < numbers.length; index += 1){
    console.log(numbers[index]);
    soma += numbers[index];
    if(maior < numbers[index]){
        maior = numbers[index];  
    } 
    if ( menor > numbers[index]){
        menor = numbers[index]
    } 
    if (numbers[index] % 2 == 1){
        impar +=1;
    }
     
}
media = soma/(numbers.length);
if (media > 20){
    console.log('valor maior que 20');
} else{
    console.log('valor menor que 20');
}
console.log('a soma de todos os numeres e: ', soma);
console.log('a media dos numeros e: ', media);
console.log('o maior numera e: ', maior);
console.log('o menor numera e: ', menor);
console.log('temos ', impar, 'numeros impares');