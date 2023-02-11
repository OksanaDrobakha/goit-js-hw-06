// input#font-size-control (подія input) і змінює інлайн-стиль span#text

const fontSizeEl = document.querySelector("#font-size-control");
const changeSize = document.querySelector("#text");

fontSizeEl.addEventListener("input", (event) => {
  changeSize.style.fontSize = `${event.target.value}px`;
});
