// select container div
const container = document.querySelector(".container");

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

