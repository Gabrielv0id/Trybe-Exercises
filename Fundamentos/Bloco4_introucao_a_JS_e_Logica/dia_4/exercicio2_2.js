function maiorNome(array){
  let maior = 0;
  let nome;
  for( let key in array){
    if (array[key].length > maior){
      maior = array[key].length;
      nome = array[key];
    }
  }
  return nome;
}

let nomes = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

console.log(maiorNome(nomes));