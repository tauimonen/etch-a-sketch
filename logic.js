const container = document.getElementById("container");
var color = '#000000';
let hasEventListener = false;

/**
 * Creates a grid value * value.
 * @param {*} value int
 */
function makeRows(value) {
  container.style.setProperty('--grid-rows', value);
  container.style.setProperty('--grid-cols', value);
  while (container.firstChild) {
    container.removeChild(container.lastChild);
  }
  for (c = 0; c < (value * value); c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
  };
};

/**
 * Gets a color from color picker.
 */
function changeColor() {
  color = document.getElementById('color-picker').value;
}

/**
 * Start the app and adds event listeners.
 */
function start() {
  const nodelist = document.querySelectorAll('.grid-item');
  const cells = Array.from(nodelist);
  const ch = document.querySelector('.change');
  const size = document.querySelector('.size');

  if (!hasEventListener) {
    ch.addEventListener('click', (e) => {
      changeColor();
      start();
    })  

    size.addEventListener('click', e => {
      const val = prompt('Submit new size (2-50): ');
      if (val > 1 && val <= 50) {
        makeRows(val);
        console.log(val);
        start();
      }
    })
  hasEventListener = true;
}
cells.forEach(cell => {
  cell.addEventListener('mouseover', (e) => {
    e.target.style.backgroundColor = color;
  })
})
}

makeRows(30);
start();




