const button = document.querySelector("#enviar");

function enableDefault(event) {
 event.preventDefault();
}

button.addEventListener('click', enableDefault);