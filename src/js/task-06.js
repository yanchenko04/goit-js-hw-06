const colorInput = document.querySelector('#validation-input');
colorInput.addEventListener('blur', onBlur);

function onBlur(event){
    const input = event.currentTarget;
    const inputLength = Number(input.dataset.length);
    if(input.value.length === inputLength){
        input.classList.remove('invalid');
        input.classList.add('valid');    
    }
    else{
        input.classList.remove('valid');
        input.classList.add('invalid')
    }


}