const container = document.querySelector(".container")
const body = document.querySelector("body")

function makeGrid(sideLength) {
    container.innerHTML = '';

    boxSize = 600/sideLength;

    for (let i = 0; i < sideLength; i++) {
        const row = document.createElement("div");
        row.classList.add("row");

        for (let i = 0; i < sideLength; i++) {
            const box = document.createElement("div")
            box.classList.add("box");

            box.style.width = `${boxSize}px`;
            box.style.height = `${boxSize}px`;

            box.addEventListener("mouseenter", () => {
               colorBox(box)
            })
            row.appendChild(box);
        }

        container.appendChild(row);

    }
        
        

}

function colorBox(box) {
    let nblue = 255 * Math.random() 
    let nred = 255 * Math.random()
    let ngreen = 255 * Math.random()

    box.style.backgroundColor = `rgb(${nred}, ${ngreen}, ${nblue})`
}



const button = document.querySelector("button")
button.addEventListener("click", () => {
    let gridSize = parseInt(prompt("Please type in the number of rows you want"));
    while (container.firstChild) {
        container.removeChild(container.lastChild)
    }
    makeGrid(gridSize)
})
body.appendChild(button)


