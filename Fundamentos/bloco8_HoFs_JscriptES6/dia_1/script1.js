const compare = (apost,sort) => apost === sort;


const random = (aposta, callback) => {
  const sorteio = Math.ceil(Math.random() * 5);
  return callback(aposta, sorteio) ? 'Parabens voce ganhou' : 'Tente de Novo!';
}
  
console.log(random(2, compare));