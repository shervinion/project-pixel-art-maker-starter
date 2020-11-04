// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

const form = document.querySelector("#sizePicker");
const canvasTable = document.querySelector('#pixelCanvas');
const cellColor = document.querySelector('#colorPicker');


function makeGrid() {
    // Clear table
    canvasTable.innerHTML = "";

    // Get Height and Width
    let dimensions = getGridDimension();
    let inputHeight = dimensions.inputHeight;
    let inputWidth = dimensions.inputWidth;

    // Test adding a paragraph
    //let para1 = document.createElement('p');
    //para1.textContent = "right now";
    //canvasTable.appendChild(para1);

    // Build table
    for (r = 1; r <= inputHeight; r++){
        let row = document.createElement('tr');
        //row.textContent = "i" + r;
        canvasTable.appendChild(row);
        for (c = 1; c<= inputWidth; c++){
            let cell = document.createElement('td');
            //cell.textContent = r + ',' + c;
            row.appendChild(cell);
            cell.addEventListener('click', function(event){
            event.target.style.backgroundColor = cellColor.value;
            // TODO - How to drag mouse and fill colors instead of clicking on each cell individually?
            })
        }
        }
}

function getGridDimension() {
    // Probably it's an overkill to have a function to return querySelector's value
    // but it's fun to refactor, and also to use arrays!
    const inputHeight = document.querySelector('#inputHeight').value;
    const inputWidth = document.querySelector('#inputWidth').value;
    console.log(inputHeight);
    console.log(inputWidth);
    return {inputWidth, inputHeight};
}


form.addEventListener('submit', function(event) {
    // submit button's default behaviour would refresh the page so we have to use prevenetDefault.
    event.preventDefault();
    makeGrid();
    })