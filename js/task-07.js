const range = document.querySelector("#font-size-control");
const abra = document.querySelector("#text");
abra.style.fontSize = range.value + "px";

range.addEventListener("input", onFontChenge);

function onFontChenge(element) {
  abra.style.fontSize = element.currentTarget.value + "px";
}
