const gridContainer = document.querySelector(".grid-container");
const sizePicker = document.querySelector(".size-picker");
const sizeLabel = document.querySelector(".size-label");
const modeBtn = document.querySelectorAll(".mode-btn");
const colorPicker = document.querySelector("#color-picker");
const clearBtn = document.querySelector(".clear-btn");

const DEFAULT_SIZE = 16;
const DEFAULT_MODE = "color";

let isDown = false;
let currentMode = DEFAULT_MODE;

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

sizePicker.addEventListener("input", () => {
  updateSizeLabel(sizePicker.value);
});

modeBtn.forEach((button) => {
  button.addEventListener("click", handleButtonClick);
});

colorPicker.addEventListener("input", () => {
  setMode("color");
});

clearBtn.addEventListener("click", () => {
  clearGrid();
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

function handleButtonClick(e) {
  setMode(e.target.value);
}

function setMode(mode) {
  currentMode = mode;
  setActive(mode);
}

function setActive(mode) {
  modeBtn.forEach((button) => {
    button.classList.remove("active");
    if (button.value === mode) {
      button.classList.add("active");
    }
  });
}

function paint(cell) {
  switch (currentMode) {
    case "color":
      cell.target.style.background = colorPicker.value;
      break;
    case "rainbow":
      let r = random(0, 255);
      let g = random(0, 255);
      let b = random(0, 255);
      cell.target.style.background = `rgb(${r}, ${g}, ${b})`;
      break;
    case "eraser":
      cell.target.style.background = "#ffffff";
      break;
  }
}

function clearGrid() {
  gridContainer.childNodes.forEach(
    (cell) => (cell.style.background = "#ffffff")
  );
}

function random(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function updateSizeLabel(size) {
  sizeLabel.textContent = `${size} X ${size}`;
}

window.onload = () => {
  createGrid(DEFAULT_SIZE);
  setMode(DEFAULT_MODE);
};
