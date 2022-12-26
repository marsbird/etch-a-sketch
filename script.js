const div = document.querySelector(".container");
const box = document.createElement("div");
box.textContent = "hello world"
div.appendChild(box)
box.classList.add("box")