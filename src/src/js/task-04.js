const valueEl = document.querySelector('#value');
const btnAdd = document.querySelector('button[data-action="increment"]');
const btnMinus = document.querySelector('button[data-action="decrement"]');

btnAdd.addEventListener('click', onBtnAdd);
btnMinus.addEventListener('click', onBtnMinus);
let counterValue = 0;
function onBtnAdd(){
    counterValue += 1;
    console.log(counterValue);
    valueEl.textContent = counterValue

}
function onBtnMinus(){
    counterValue -= 1;
    console.log(counterValue);
    valueEl.textContent = counterValue

}