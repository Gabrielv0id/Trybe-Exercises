let word = 'Trybe';
let reserveWord = '';

// for (let index = 0; index < word.length; index += 1){
//     reserveWord += word[word.length - 1 - index];
// }

reserveWord = word.split('').reverse().join('');
console.log(reserveWord);