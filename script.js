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
    document.getElementById('container').innerHTML = ''
}









/* I want the webpage() function to run when the website first loads. Displaying the default
grid. Then make another function, that clears the grid to 0.
Then have the createGrid() function work so that you can make a new grid to your size.
I would then attach the two functions clearGrid() createGrid() to the button.
My thought is that when you click the button it first clears it, and then prompts for new grid.*/