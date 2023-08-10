const container = document.querySelector(".container");
const maxSize = 100;

function createDivSquares(numOfSquares) {
    for(let i = 1; i <= numOfSquares; i++) {
        let row = document.createElement("div");

        for (let j = 1; j <= numOfSquares; j++) {
            const square = document.createElement("div");
            square.className = "square";

            square.addEventListener("mouseover", () => {
                square.style.backgroundColor = "black";
            });

           /* square.addEventListener("mouseout", () => {
                square.style.backgroundColor = "";
            });*/

            row.appendChild(square);
        }

        container.appendChild(row);
    }
};
createDivSquares(16);

const resizeButton = document.querySelector("#resizeButton");

resizeButton.addEventListener("click", () => {
    const newSize = prompt("Enter number of squares per side for the new grid(maximum is 100):");
    if (newSize !== null) {
        const newSizeInt = parseInt(newSize);

        if (!isNaN(newSizeInt) && newSizeInt > 0 && newSizeInt <= maxSize) {
            container.innerHTML = "";
            createDivSquares(newSizeInt);    
        } else {
            alert("Please enter a valid positive number between 1 and 100.")
        }
    }
});
//COMING BACK TO WRITE A COMMIT FOR Add a button to the top of the screen that will send the user a popup asking for the number of squares per side for the new grid. Once entered, the existing grid should be removed and a new grid should be generated in the same total space as before (e.g. 960px wide) so that you’ve got a new sketch pad. Tip: Set the limit for the user input to a maximum of 100