// select elements
const btn = document.querySelector("button")
const container = document.querySelector(".container");

// set default number of rows
let numRows = 10;

// listen for button click
btn.addEventListener("click", () => {
    let userInput = prompt("How many rows? (max 100)");
    let errorMessage = "Please input a number between 1 and 100"

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
});

// append divs to container div
for (i = 0; i < 100; i++) {
    const box = document.createElement("div");
    container.appendChild(box);
};

// listen for hover on divs
const divs = document.querySelectorAll(".container > div");
divs.forEach((div) => {
    div.addEventListener("mouseover", () => {
        div.classList.add("dark")
    });
});

