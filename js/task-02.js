const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const list = document.querySelector("#ingredients");

const getAllIngradients = function (ingredients) {
  return ingredients.map((ingredient) => {
    const element = document.createElement("li");
    element.classList.add(".item");
    element.textContent = ingredient;
    return element;
  });
};

const allIngredients = getAllIngradients(ingredients);

list.append(...allIngredients);
