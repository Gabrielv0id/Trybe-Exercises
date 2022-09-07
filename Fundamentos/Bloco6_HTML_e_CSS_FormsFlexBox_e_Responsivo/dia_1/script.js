// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

function actionDefault(event){
    event.preventDefault();
}

HREF_LINK.addEventListener('click', actionDefault);
INPUT_CHECKBOX.addEventListener('click', actionDefault);
INPUT_TEXT.addEventListener('keypress', function(event){
    const character = event.key
    if(character !== 'a'){
        event.preventDefault();
    }
});