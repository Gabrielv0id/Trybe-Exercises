
// const  testingScope = (escopo) => {
//     if (escopo === true) {
//       let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//       ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
//       console.log(ifScope);
//     } else {
//       let elseScope = 'Não devo ser utilizada fora do meu escopo (else)';
//       console.log(elseScope);
//     }
//   }

//   testingScope(true);


  const oddsAndEvens = [13, 3, 4, 10, 7, 2];

  const sortOddsAndEvens = (array) => {
    for(i = 1 ; i < array.length; i += 1){
      for(index = 0; index < i; index += 1){
        if(array[i] < array[index]){
          let position = oddsAndEvens[i];
          array[i] = array[index];
          array[index] = position;
        }
      }
    }
    return array;
  }
  console.log(sortOddsAndEvens(oddsAndEvens)); // será necessário alterar essa linha 😉