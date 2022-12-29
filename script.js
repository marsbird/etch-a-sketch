// select elements
const btn = document.querySelector("button")
const container = document.querySelector(".container");

// set default number of rows
let numRows = 10;

// listen for button click
btn.addEventListener("click", () => {
    let userInput = prompt("How many rows? (max 100)");
    let errorMessage = "Please input a number between 1 and 100"

    // check input and assign to numRows
    if (isNaN(userInput)) {
        alert(errorMessage);
    } else {
        let number = parseInt(userInput);

        if (number < 1 || number > 100) {
            alert(errorMessage);
        } else {
            numRows = number;
        };
    };

    // reorganize grid with new number of rows
    container.setAttribute("style", `grid-template-columns: repeat(${numRows}, 1fr); grid-template-rows: repeat(${numRows}, 1fr)`);

    // recreate grid
    createGrid();
});

function createGrid() {

    // append divs to container div
    for (i = 0; i < numRows ** 2; i++) {
        const box = document.createElement("div");
        container.appendChild(box);
    };

    // select divs
    const divs = document.querySelectorAll(".container > div");

    // remove existing classes
    divs.forEach((div) => {
        div.classList.remove("dark");
    });

    // listen for hover on divs
    divs.forEach((div) => {
        div.addEventListener("mouseover", () => {
            div.classList.add("dark");
        });
    });
};

// run default parameters
createGrid()

