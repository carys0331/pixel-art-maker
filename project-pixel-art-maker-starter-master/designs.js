// Select color input
const color = document.getElementById ('colorPicker');

// Select size input
const height = document.getElementById ('inputHeight');
const width = document.getElementById ('inputWidth');
const table = document.getElementById ('pixelCanvas');
const size = document.getElementById ('sizePicker');


// When size is submitted by the user, call makeGrid()
size.addEventListener('submit', function(event) {
    event.preventDefault();
    makeGrid();
})

function makeGrid() {
  table.innerHTML = '';
  let tr,td;
  
  for (let row = 0; row < height; row++) {
    const tr = document.createElement('tr');
    table.appendChild(tr);
    for (let cell = 0; cell < width; cell++) {
      const td = document.createElement('td');
      tr.appendChild(td);
    }
  }
