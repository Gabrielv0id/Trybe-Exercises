let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};
let info2 = {
  personagem: 'Tio patinhas',
  origem: 'Christmas on Bear Mountain, Dells Four Color Comics #178',
  nota: 'O último MacPatinhas',
  recorrente: 'Sim'
};



info['recorrente'] = 'Sim';
console.log('Bem-Vinda! ' + info.personagem);
console.log(info);
for(let key in info){
  console.log(key);
}

for(let key in info, info2){
  if(key === 'recorrente' && info[key] === 'Sim' && info2[key] === 'Sim'){
    console.log('Ambos recorrentes')
  } else{
      console.log(info[key] + ' e ' + info2[key]);
  }
}
