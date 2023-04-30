const gridContainer = document.querySelector(".grid-container");
const sizePicker = document.querySelector("#size-picker");

const DEFAULT_SIZE = 16;

sizePicker.addEventListener("mouseup", () => {
  createGrid(sizePicker.value);
});

function createGrid(size) {
  gridContainer.innerHTML = "";

  for (let i = 0; i < size * size; i++) {
    let cell = document.createElement("div");
    cell.classList.add("cell");

    gridContainer.append(cell);
  }

  gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
}

window.onload = () => {
  createGrid(DEFAULT_SIZE);
};
