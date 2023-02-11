// data - length = "6"
// blur втрата фокусу;
// border стає зеленим якщо +
// valid і invalid для додавання стилів

const textInput = document.querySelector("#validation-input");
const dataLength = textInput.getAttribute("data-length");

textInput.addEventListener("focus", (event) => {
  textInput.value = event.target.value;
});

textInput.addEventListener("blur", (event) => {
  if (event.target.value.length === dataLength) {
    elem.classList.add("valid");
  }
  elem.classList.add("invalid");
});
