let mouseClickedStatus = 0;
const slider = document.querySelector('.slider');
const sliderValue = document.querySelector('.slider-value');
const clearBtn = document.querySelector('button');


slider.addEventListener('input', () => {
  sliderValue.innerHTML = `${slider.value} x ${slider.value}`;
  setGrid(slider.value);
});

clearBtn.addEventListener('click', clear);


document.body.onmousedown = () => mouseClickedStatus = 1;
document.body.onmouseup = () => mouseClickedStatus = 0;

function mouseoverHandler(e) {
  if (mouseClickedStatus)
    e.target.style.backgroundColor = 'black';
}

function setGrid(length) {
  const gridContainer = document.querySelector('.grid-container');
  gridContainer.innerHTML = '';
  for (let r = 0; r < length; ++r) {
    const row = document.createElement('div');
    row.classList.add('row');
    for (let c = 0; c < length; ++c) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      cell.addEventListener('mouseover', mouseoverHandler);
      row.appendChild(cell);
    }
    gridContainer.appendChild(row);
  }
}

function clear() {
  const cells = document.querySelectorAll('.cell');
  cells.forEach(cell => cell.style.backgroundColor = 'white');
}

function init() {
  slider.value = 64;
  sliderValue.innerHTML = `${slider.value} x ${slider.value}`;
  setGrid(slider.value);
}

init();