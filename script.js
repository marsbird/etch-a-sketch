// select container div
const container = document.querySelector(".container");

// append 16 divs to container div
for (i = 0; i < 16; i++) {
    const test = document.createElement("div");
    test.textContent = i;
    container.appendChild(test);
}

// listen for hover on divs
const divs = document.querySelectorAll(".container > div");
divs.forEach((div) => {
    div.addEventListener("mouseover", () => {
        div.classList.add("dark")
    });
});

