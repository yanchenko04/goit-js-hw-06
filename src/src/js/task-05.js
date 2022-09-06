const input = document.querySelector('#name-input');
const span = document.querySelector('#name-output');

input.addEventListener('input', inputEL);

function inputEL(event){
        span.textContent = event.currentTarget.value;
        if(event.currentTarget.value === ""){
            span.textContent = "Anonymous"
        }
}