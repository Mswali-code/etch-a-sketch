const userInput = prompt("Enter number of squares per side for the grid.");
const inputButton = document.querySelector("#button");

function createUserGrid() {
    array.forEach(element => {
        
    });
};

const container = document.querySelector(".container");
const size = 30;

function createDivSquares () {
    for(let i = 1; i <= 16; i ++) {
        let row = document.createElement("div");

        for (let j = 1; j <= 16; j ++) {
            const square = document.createElement("div");
            square.style.width = size + "px";
            square.style.height = size + "px";
            square.style.border = "1px solid gray";

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
createDivSquares();

