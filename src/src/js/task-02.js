const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const IngredientsEl = document.querySelector('#ingredients');
const ul = []
for(let i = 0; i < ingredients.length; i += 1){
  const li = document.createElement('li')
  li.textContent = ingredients[i];
  ul.push(li)
}
  IngredientsEl.append(...ul)

