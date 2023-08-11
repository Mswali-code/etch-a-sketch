const container = document.querySelector(".container");
const maxSize = 60;

function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
}

function createDivSquares(numOfSquares) {
    //container.style.setProperty('--numOfSquares', numOfSquares);
    //container.style.setProperty('--flexBasisValue', 100 / numOfSquares + 'px');
    
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

container.addEventListener("mouseout", () => {
    const squares = document.querySelectorAll(".square");

    if (!container.contains(event.relatedTarget)) {
        const squares = document.querySelectorAll(".square");
        squares.forEach(square => {
            square.style.backgroundColor = "";
        });
    }
});

const resizeButton = document.querySelector("#resize-button");

resizeButton.addEventListener("click", () => {
    const newSize = prompt("Enter number of squares per side for the new grid (maximum is 60):");
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

const resetButton = document.querySelector("#reset-button");

resetButton.addEventListener("click", () => {
    container.innerHTML = ""; 
    createDivSquares(16);
});