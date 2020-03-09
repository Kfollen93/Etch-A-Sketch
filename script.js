//On website load, starting grid
document.addEventListener('DOMContentLoaded', webpageLoad());
function webpageLoad()
{
   for (let d = 0; d < 1024; d++)
    {
        let newDivCol = document.createElement('div');
        newDivCol.className = "newDivCol";
        newDivCol.style.border = '1px solid black';
        document.getElementById('container').appendChild(newDivCol);

        newDivCol.addEventListener("mouseover", function(){
            event.target.style.backgroundColor= "black";
        });
    }

    container.style.gridTemplateColumns = `repeat(32, 1fr)`;
    container.style.gridTemplateRows = `repeat(32, 1fr)`;
}


// -------------------------------------------------------------

//enter your grid here
function createGrid(gridSizeHere)
{
    userInput = prompt ("Please enter how many squares you would like per side.");
    gridSizeHere = userInput * userInput;

    for (let d = 0; d < gridSizeHere; d++)
    {
        let newDivCol = document.createElement('div');
        newDivCol.className = "newDivCol";
        newDivCol.style.border = '1px solid black';
        document.getElementById('container').appendChild(newDivCol);

        newDivCol.addEventListener("mouseover", function(){
            event.target.style.backgroundColor= "black";
        });
    }

    container.style.gridTemplateColumns = `repeat(${userInput}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${userInput}, 1fr)`;

    let knobOne = document.createElement('span');
    knobOne.className = "leftknob";
    document.getElementById('container').appendChild(knobOne);

    let knobTwo = document.createElement('span');
    knobTwo.className = "rightknob";
    document.getElementById('container').appendChild(knobTwo);
}
// -----------------------------------------------------------------

//clear grid function to run before picking new size
function clearGrid()
{
    document.getElementById('container').innerHTML = '';
}

//Rainbow color function
const random256 = () => {
    return Math.floor(Math.random() * 256);
}
//used arrow function here for learning
function colorRainbow()
{
    let rainbowColors = document.querySelectorAll('.newDivCol');
    rainbowColors.forEach(element => {
        element.addEventListener('mouseover', () => {
            element.style.backgroundColor = `rgb(${random256()}, ${random256()}, ${random256()})`;
        });
    });
}
//Didnt use arrow function this time to write it
function colorBlue()
{
    let blueColor = document.querySelectorAll('.newDivCol');
    blueColor.forEach(function(element){
        element.addEventListener('mouseover', function(){
            element.style.backgroundColor = 'blue';
        });
    });
}

function colorBlack()
{
    let blackColor = document.querySelectorAll('.newDivCol');
    blackColor.forEach(element => {
        element.addEventListener('mouseover', () => {
            element.style.backgroundColor = 'black';
        });
    });
}

function colorWhite()
{
    let colorWhite = document.querySelectorAll('.newDivCol');
    colorWhite.forEach(element => {
        element.addEventListener('mouseover', () => {
            element.style.backgroundColor = 'white';
        });
    });
}

