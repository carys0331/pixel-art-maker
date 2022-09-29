// Select color input
const color = document.getElementById("colorPicker");
// Select size input
const height = document.getElementById("inputHeight");
const width = document.getElementById("inputWidth");
const table = document.getElementById("pixelCanvas");
const size = document.getElementById("sizePicker");
// When size is submitted by the user, call makeGrid()
size.addEventListener('submit', function(event) {
	event.preventDefault();
	makeGrid();
})

function makeGrid() {
	table.innerHTML = "";
	let tr, td;

	for (let row = 0; row < height.value; row++) {
		let tableRow = document.createElement("tr");

		for (let cell = 0; cell < width.value; cell++) {
			let tableCell = document.createElement("td");
			tableRow.appendChild(tableCell);
		}
		table.appendChild(tableRow);
	}

	table.addEventListener('click', function(event) {
		event.preventDefault();
		if (event.target.tagName === 'TD') {
			event.target.style.backgroundColor = color.value;
		}
	});
}

makeGrid();
