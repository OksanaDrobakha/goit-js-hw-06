const sumCategory = document.querySelectorAll(".item");
console.log(`Number of categories:`, sumCategory.length);

sumCategory.forEach((item) => {
  console.log(`Category:`, item.firstElementChild.textContent);
  console.log(`Elements:`, item.lastElementChild.children.length);
});
