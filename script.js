const gridContainer = document.querySelector(".grid-container");
const sizePicker = document.querySelector(".size-picker");
const sizeLabel = document.querySelector(".size-label");

const DEFAULT_SIZE = 16;

let isDown = false;

gridContainer.addEventListener("mousedown", () => (isDown = true));
gridContainer.addEventListener("mouseup", () => (isDown = false));
gridContainer.addEventListener("mouseleave", () => (isDown = false));
gridContainer.addEventListener("mouseover", (e) => {
  if (isDown) {
    if (e.target.classList.contains("cell")) {
      paint(e);
    }
  }
});

sizePicker.addEventListener("mouseup", () => {
  createGrid(sizePicker.value);
});

sizePicker.addEventListener("mousemove", () => {
  updateSizeLabel(sizePicker.value);
});

function createGrid(size) {
  gridContainer.innerHTML = "";

  for (let i = 0; i < size * size; i++) {
    let cell = document.createElement("div");
    cell.classList.add("cell");
    cell.ondragstart = () => false;

    gridContainer.append(cell);
  }

  updateSizeLabel(size);
  gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
}

function paint(cell) {
  cell.target.style.background = "#000000";
}

function updateSizeLabel(size) {
  sizeLabel.textContent = `${size} X ${size}`;
}

window.onload = () => {
  createGrid(DEFAULT_SIZE);
};
