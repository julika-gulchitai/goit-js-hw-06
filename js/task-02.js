// Напиши скрипт, який для кожного елемента масиву ingredients:
// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

 const ingredientsList = document.querySelector('ul#ingredients');
for (let ingredient of ingredients) {
  const ingredientsListLi = document.createElement('li');
  ingredientsListLi.textContent = ingredient;
  ingredientsListLi.className = 'item';
  ingredientsList.append(ingredientsListLi);
}

/* Another way */
//  const mappedIngredients = ingredients.map(ingredient => `<li = class="item"> ${ingredient.textContent} </li>` ). join('');
//  ingredientsList.insertAdjacentHTML('beforeend', `<ul>${mappedIngredients}</ul>`);
