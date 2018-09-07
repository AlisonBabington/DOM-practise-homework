document.addEventListener('DOMContentLoaded', () => {
  const FormInput = document.querySelector('#new-item-form');
  FormInput.addEventListener('submit', FormInputSubmit);

  const ButtonInput = document.querySelector('#delete-button');
  ButtonInput.addEventListener('click', handleDeleteButton)
});

const FormInputSubmit = function(event) {
  event.preventDefault();

  const newRecipeItem = createNewRecipeItem(event.target);
  const recipeList = document.querySelector('#recipe-form');
  recipeList.appendChild(newRecipeItem);

  event.target.reset();
}

const createNewRecipeItem = function (form) {
  const newRecipeItem = document.createElement('li');
  newRecipeItem.classList.add('recipe-item');

  const title = document.createElement('h2');
  title.textContent = form.title.value;
  newRecipeItem.appendChild(title);

  const meal = document.createElement('h3');
  meal.textContent = form.meal.value;
  newRecipeItem.appendChild(meal);

  const course = document.createElement('h3');
  course.textContent = form.course.value;
  newRecipeItem.appendChild(course);

  const allergens = document.createElement('p');
  allergens.textContent = form.allergens.value;
  newRecipeItem.appendChild(allergens);

  return newRecipeItem;
};


const handleDeleteButton = function (event) {
  const recipeList = document.querySelector('#recipe-form');
  recipeList.innerHTML = '';
};
