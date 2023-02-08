const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const arrayIngridients = [];

ingredients.forEach(function (ingredient) {
  const addIngridients = document.createElement("li");
  addIngridients.textContent = ingredient;
  addIngridients.classList.add("item");
  arrayIngridients.push(addIngridients);
});

const listIngridients = document.querySelector("#ingredients");

listIngridients.append(...arrayIngridients);
