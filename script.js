const gridContainer = document.querySelector(".grid-container");
const sizePicker = document.querySelector("#size-picker");
const sizeLabel = document.querySelector(".size-label");

const DEFAULT_SIZE = 16;

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

    gridContainer.append(cell);
  }

  updateSizeLabel(size);
  gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
}

function updateSizeLabel(size) {
  sizeLabel.textContent = `${size} X ${size}`;
}

window.onload = () => {
  createGrid(DEFAULT_SIZE);
};
