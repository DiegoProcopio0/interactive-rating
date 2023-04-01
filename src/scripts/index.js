const buttons = document.querySelectorAll(".buttons button");
const submit = document.querySelector("#submeter");
const numberSelected = document.querySelector("#numberSelected");
const error = document.querySelector("#errorMsg");
const box1 = document.querySelector("#box1");
const box2 = document.querySelector("#box2");
let selected = "";

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    selected = e.target.textContent;
    addHidden(error);
  });
});

submit.addEventListener("click", () => {
  if (selected === "") {
    removeHidden(error);
    setTimeout(() => {
      addHidden(error);
    }, 3000);
    return;
  }

  numberSelected.textContent = selected;
  removeHidden(box2);
  addHidden(box1);
});

function removeHidden(element) {
  element.classList.remove("hidden");
}

function addHidden(element) {
  element.classList.add("hidden");
}
