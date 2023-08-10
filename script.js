const container = document.querySelector(".container");
const maxSize = 100;

function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
}

function createDivSquares(numOfSquares) {
    for(let i = 1; i <= numOfSquares; i++) {
        let row = document.createElement("div");

        for (let j = 1; j <= numOfSquares; j++) {
            const square = document.createElement("div");
            square.className = "square";

            square.addEventListener("mouseover", () => {
                square.style.backgroundColor = getRandomColor();
            });

            row.appendChild(square);
        }

        container.appendChild(row);
    }
};
createDivSquares(16);

const resizeButton = document.querySelector("#resizeButton");

resizeButton.addEventListener("click", () => {
    const newSize = prompt("Enter number of squares per side for the new grid (maximum is 100):");
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