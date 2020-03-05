function createGrid()
{
    for (let d = 0; d < 256; d++)
    {
        let newDivCol = document.createElement('div');
        newDivCol.className = "newDivCol";
        newDivCol.style.border = '1px solid black';
        document.getElementById('container').appendChild(newDivCol);

        newDivCol.addEventListener("mouseover", function(){
            event.target.style.backgroundColor= "blue";
        });
    }

}
