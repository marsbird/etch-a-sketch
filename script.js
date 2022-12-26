// select container div
const container = document.querySelector(".container");

// append 16 divs to container div
for (i=0; i<16; i++) {
    const test = document.createElement("div")
    test.textContent = i
    container.appendChild(test)
}
