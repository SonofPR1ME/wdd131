const hexidecimal = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"]

const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P",
     "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

const nouns = ["cat", "dog", "cow", "boy", "girl", "apple", "car", "house", "tree", "burrito", 
    "box", "dragon", "home", "horse", "zebra", "chimpanzee", "giraffe", "unicorn", "phone", 
    "computer", "floor", "hole", "bat", "french fry", "taco"]

const verbs = ["combine", "run", "cry", "eat", "sleep", "jump", "climb", "walk", "drive", 
    "drink", "went", "play", "turn", "look", "scream", "say", "think", "read", "roar", "hide", 
    "try", "catch", "kick", "steal", "buy", "cook", "grab", "mix"]

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

let randomLetter = {
    letter: undefined,
}

let randomList = {
    originalList: [],
    newList: [],
}

let randomNoun = {
    noun: undefined,
}

let randomVerb = {
    verb: undefined,
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
    document.querySelector("#random-grid").innerHTML = "R" + randomGrid.row + "C" +
     randomGrid.column;
}

function generateRandomLetter() {
    randomLetter.letter = letters[Math.floor(Math.random() * letters.length)];
    document.querySelector("#random-letter").innerHTML = randomLetter.letter;
}

function generateRandomList() {
    randomList.originalList = document.querySelector("#original-list").value.split(", ");
    randomList.newList = [];
    let listNumber = randomList.originalList.length;
    while (listNumber > 0)
    {
        let currentList = randomList.originalList.filter(item =>
             !randomList.newList.includes(item));
        let randomIndex = Math.floor(Math.random() * currentList.length);
        randomList.newList.push(currentList[randomIndex]);
        listNumber = listNumber - 1;
    }
    document.querySelector("#random-list").innerHTML = randomList.newList.join(", ");
    }

function generateRandomNoun() {
    randomNoun.noun = nouns[Math.floor(Math.random() * nouns.length)];
    document.querySelector("#random-noun").innerHTML = randomNoun.noun;
}

function generateRandomVerb() {
    randomVerb.verb = verbs[Math.floor(Math.random() * verbs.length)];
    document.querySelector("#random-verb").innerHTML = randomVerb.verb;
}

let numberBtn = document.querySelector("#number-btn");
numberBtn.addEventListener("click", generateRandomNumber);

let colorBtn = document.querySelector("#color-btn");
colorBtn.addEventListener("click", generateRandomColor);

let gridBtn = document.querySelector("#grid-btn");
gridBtn.addEventListener("click", generateRandomGrid);

let letterBtn = document.querySelector("#letter-btn");
letterBtn.addEventListener("click", generateRandomLetter);

let listBtn = document.querySelector("#list-btn");
listBtn.addEventListener("click", generateRandomList);

let nounBtn = document.querySelector("#noun-btn");
nounBtn.addEventListener("click", generateRandomNoun);

let verbBtn = document.querySelector("#verb-btn");
verbBtn.addEventListener("click", generateRandomVerb);