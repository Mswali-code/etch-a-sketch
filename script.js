const container = document.querySelector(".container");
const maxSize = 60;

function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
}

function createDivSquares(numOfSquares) {

    container.innerHTML = "";

    container.style.gridTemplateColumns = `repeat(${numOfSquares}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${numOfSquares}, 1fr)`;

    for (let i = 1; i <= numOfSquares * numOfSquares; i++) {
        const square = document.createElement("div");
        square.className = "square";

        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = getRandomColor();
        });

        container.appendChild(square);
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

const resizeSlider = document.querySelector("#resize-slider");
const sliderValueSpan = document.querySelector("#slider-value")

resizeSlider.addEventListener("input", () => {
    const newSize = resizeSlider.value;
    sliderValueSpan.textContent = newSize; 

    const sliderWidth = resizeSlider.offsetWidth;
    const sliderMin = parseInt(resizeSlider.min);
    const sliderMax = parseInt(resizeSlider.max);
    const percent = (newSize - sliderMin) / (sliderMax - sliderMin);
    
    const newPosition = percent * sliderWidth;
    sliderValueSpan.style.left = newPosition + "px";

    createDivSquares(newSize);
});

const resetButton = document.querySelector("#reset-button");

resetButton.addEventListener("click", () => {
    container.innerHTML = ""; 
    createDivSquares(16);
});