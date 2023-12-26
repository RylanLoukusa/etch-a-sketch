const container = document.querySelector('.container');
const clearButton = document.querySelector('.clear');
const colorButtons = document.querySelectorAll('.color-choice');
var slider = document.querySelector('#sizeRange');
var color = 'black'

function createGrid(gridNumber) {
  let gridSize = gridNumber * gridNumber
  for (let i=1; i <= gridSize; i++) {
    let gridItem = document.createElement('div')
    container.style.gridTemplateColumns = `repeat(${gridNumber}, 1fr)`;
    container.style.gridTemplateColumns = `repeat(${gridNumber}, 1fr)`;
    container.insertAdjacentElement('beforeend', gridItem);
  }
var gridPixels = container.querySelectorAll('div');
  gridPixels.forEach(gridPixel => gridPixel.addEventListener('mouseover',colorGrid));

}

function colorGrid() {
  switch(color) {
    
    case 'black':
      this.style.backgroundColor = '#000000';
      break;
    
    case 'rainbow':
      this.style.backgroundColor = `hsl(${Math.random()*360}, 100%, 50%)`
      break;
    case 'eraser':
        this.style.backgroundColor = '#ffffff'
        break;
    default:
        this.style.backgroundColor = color;
        break;
      
}
}

//Clear Button
function eraseBoard() {
    var gridPixels = container.querySelectorAll('div')
    gridPixels.forEach(gridPixel => gridPixel.style.backgroundColor = '#ffffff')
}

function changeColor(event) {
    switch(event.target.dataset.color) {
        case 'rainbow' :
            color = 'rainbow';
            break;
        case 'eraser' :
            color = 'eraser';
            break;
        default:
            color = 'black';
            break;
    }
}

function pixelSize() {
    let gridPixels = container.querySelectorAll('div');
    gridPixels.forEach(gridPixel => gridPixel.remove())
    createGrid(slider.value);
}

function userColorSelection(event) {
    color = event.targer.value;
}

//Size when page is loaded
createGrid(2)

clearButton.addEventListener('click',eraseBoard);
colorButtons.forEach(colorButton => colorButton.addEventListener('click', changeColor));
slider.addEventListener('mouseup', pixelSize)
