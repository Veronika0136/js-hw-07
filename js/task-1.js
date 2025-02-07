const amountCategories = document.querySelectorAll('li.item');
console.log(`Number of categories: ${amountCategories.length}`);

for (const element of amountCategories) {
  const nameCaterory = element.firstElementChild.textContent;
  console.log(`Category: ${nameCaterory}`);
  const amountElem = element.querySelectorAll('li').length;
  console.log(`Elements: ${amountElem}`);
}
