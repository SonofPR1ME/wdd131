const hexidecimal = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"]

let randomNumber = {
    min: 1,
    max: 10,
    value: undefined,
}

let randomColor ={
    color: undefined,
    num1: undefined,
    num2: undefined,
    num3: undefined,
    num4: undefined,
    num5: undefined,
    num6: undefined,
}

let randomGrid = {
    rowmax: 5,
    columnmax: 5,
    row: undefined,
    column: undefined,
}

function generateRandomNumber() {
    randomNumber.min = parseInt(document.querySelector("#min").value) || 1
    randomNumber.max = parseInt(document.querySelector("#max").value) || 10
    randomNumber.value = Math.floor(Math.random() * (randomNumber.max - randomNumber.min + 1)) + 
        randomNumber.min;
    document.querySelector("#random-number").innerHTML = randomNumber.value;
}

function generateRandomColor() {
    randomColor.num1 = hexidecimal[Math.floor(Math.random() * hexidecimal.length)];
    randomColor.num2 = hexidecimal[Math.floor(Math.random() * hexidecimal.length)];
    randomColor.num3 = hexidecimal[Math.floor(Math.random() * hexidecimal.length)];
    randomColor.num4 = hexidecimal[Math.floor(Math.random() * hexidecimal.length)];
    randomColor.num5 = hexidecimal[Math.floor(Math.random() * hexidecimal.length)];
    randomColor.num6 = hexidecimal[Math.floor(Math.random() * hexidecimal.length)];
    randomColor.color = "#" + randomColor.num1 + randomColor.num2 + randomColor.num3 + 
        randomColor.num4 + randomColor.num5 + randomColor.num6
    document.querySelector("#random-color").innerHTML = randomColor.color;
}

function generateRandomGrid() {
    randomGrid.rowmax = parseInt(document.querySelector("#rowmax").value) || 5
    randomGrid.columnmax = parseInt(document.querySelector("#columnmax").value) || 5
    randomGrid.row = Math.floor(Math.random() * randomGrid.rowmax) + 1;
    randomGrid.column = Math.floor(Math.random() * randomGrid.columnmax) + 1;
    document.querySelector("#random-grid").innerHTML = "R" + randomGrid.row + "C" + randomGrid.column;
}

let numberBtn = document.querySelector("#number-btn");
numberBtn.addEventListener("click", generateRandomNumber);

let colorBtn = document.querySelector("#color-btn");
colorBtn.addEventListener("click", generateRandomColor);

let gridBtn = document.querySelector("#grid-btn");
gridBtn.addEventListener("click", generateRandomGrid);