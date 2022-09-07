const input = document.querySelector('#font-size-control');
const span = document.querySelector('#text');
span.style.fontSize = `${input.value}px`;


input.addEventListener('input', onSize);

function onSize(event){
    span.style.fontSize = event.currentTarget.value + 'px'
}