const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
};
  
const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};
  
  const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

function changeTurno(objeto, chave, valor) {
  objeto[chave] = valor;
};

function keys (objeto) {
	const chaves = Object.keys(objeto);
	return chaves;
}

function tamanho(objeto) {
	const tam = Object.entries(objeto)
	return tam.length;
}

function values(objeto) {
	const value = Object.values(objeto);
	return value
}

changeTurno(lesson2, 'turno', 'noite');

const allLessons = Object.assign({},{lesson1, lesson2, lesson3});

console.log(lesson2);
console.log(keys(lesson1));
console.log(tamanho(lesson3));
console.log(values(lesson1));
console.log(allLessons);

