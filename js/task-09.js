function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const backgroundBody = document.querySelector("body");
const buttonColor = document.querySelector(".change-color");
const saveColor = document.querySelector(".change-color");

buttonColor.addEventListener("click", (event) => {
  let color = getRandomHexColor();

  backgroundBody.style.backgroundColor = color;

  saveColor.textContent = color;
});
