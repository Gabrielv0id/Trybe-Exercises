function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
let decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function createDecemberDays (){
  const month = document.createElement('ul');
  const daysconteiner = document.querySelector('.days-container');
  month.id = 'days'
  for (let index = 0; index < decemberDaysList.length; index += 1){
    const day = document.createElement('li');
    day.innerText = decemberDaysList[index];
    if (decemberDaysList[index] === 24  || decemberDaysList[index] === 31){
      day.classList = 'day holiday';
    } else if (decemberDaysList[index] === 4 || decemberDaysList[index] === 11 || decemberDaysList[index] === 18){
      day.classList = 'day friday';
    } else if (decemberDaysList[index] === 25){
      day.classList = 'day holiday friday';
    }else {
      day.classList = 'day';
    }

    month.appendChild(day);
  }
  
  daysconteiner.appendChild(month);
}

createDecemberDays();

function holidayButton (name) {
  const buttonconteiner = document.querySelector('.buttons-container');
  const button = document.createElement('button');
  button.innerText = name;
  button.id = 'btn-holiday';
  buttonconteiner.appendChild(button);
}

holidayButton('Feriados');

function holidayColor () {
  const holidayBckGrnd = document.getElementsByClassName('holiday');
  const botao = document.querySelector('#btn-holiday');
  const background = 'rgb(238,238,238)';
  const newColor = 'white';
  

  botao.addEventListener('click', function (){
    for (let index = 0; index < holidayBckGrnd.length; index += 1){
      if (holidayBckGrnd[index].style.backgroundColor === newColor){
        holidayBckGrnd[index].style.backgroundColor = background;
      } else {
        holidayBckGrnd[index].style.backgroundColor = newColor;
      }
    }
  });
}

holidayColor();

function fridayButton(palavra){
  const containerButton = document.querySelector('.buttons-container');
  const button = document.createElement('button');
  button.id = 'btn-friday';
  button.innerText = palavra;
  containerButton.appendChild(button);
}

fridayButton('Sexta-feira')

function changeText (sextas) {
  const getButton = document.querySelector('#btn-friday');
  const sexta = document.getElementsByClassName('friday');
  const change = 'SEXTOU!!!';

  getButton.addEventListener('click', function(){
    for (let index = 0; index < sexta.length ; index += 1 ) {
      if (sexta[index].innerHTML !== change){
        sexta[index].innerHTML = change;
      } else {
        sexta[index].innerHTML = sextas[index];
      }
    }
  });
}

let sextasDezembro = [4, 11, 18, 25];
changeText(sextasDezembro);