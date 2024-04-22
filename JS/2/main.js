// Завдання: створіть 5 різних елементів використовуючи DOM js
// Видаліть 2 останніх створенних елемента
// Першому елементу дайте клас “first”
// Другому елементу дайте Id “second”

const elementNames = ["p", "span", "div", "article", "h1"];
const elements = elementNames.map((tag) => document.createElement(tag));

elements.forEach((element, index) => {
  element.textContent = index;
  document.body.appendChild(element);
});

elements.slice(-2).forEach((element) => document.body.removeChild(element));

elements.at(0).className = "first";

elements.at(1).id = "second";