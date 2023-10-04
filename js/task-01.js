const allCategories = document.querySelectorAll(".item");
console.log("Number of categories:", allCategories.length);

const category = function (categorys) {
  categorys.forEach((element) => {
    const title = element.querySelector("h2");
    const el = element.querySelectorAll("li");

    console.log(`Category: ${title.textContent}`);
    console.log(`Elements: ${el.length}`);
  });
};

category(allCategories);
