function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEl = document.querySelector('body');
const btn = document.querySelector('.change-color');
const span = document.querySelector('.color')
 
btn.addEventListener('click', onBodyColor);

function onBodyColor(){
  bodyEl.style.backgroundColor = getRandomHexColor();
  span.textContent = getRandomHexColor()

}
