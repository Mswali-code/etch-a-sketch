const container = document.querySelector(".container");
const size = 50;

function createDivSquares () {
    for(let i = 1; i <= 16; i ++) {
        let row = document.createElement("div");

        for (let j = 1; j <= 16; j ++) {
            const square = document.createElement("div");
            square.style.width = size + "px";
            square.style.height = size + "px";
            square.style.backgroundColor = "blue";

            row.appendChild(square);
        }

        container.appendChild(row);
    }
};
createDivSquares();

