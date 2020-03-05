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
            event.target.style.backgroundColor= "blue";
        });
    }

    container.style.gridTemplateColumns = `repeat(${userInput}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${userInput}, 1fr)`;
}