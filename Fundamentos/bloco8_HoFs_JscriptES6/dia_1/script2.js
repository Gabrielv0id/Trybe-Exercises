const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const nota = (correct, student) => {
  let pontos = 0;
  for (let index = 0; index < correct.length; index += 1){
    if (correct[index] === student[index]) {
      pontos += 1
    } else if (student[index] === 'N.A') {

    } else {
      pontos -= 0.5
    }
  }
  return pontos;
}
const corretor = (correct, student, callback) => {
  return callback(correct,student);
}

console.log(corretor(RIGHT_ANSWERS, STUDENT_ANSWERS, nota));