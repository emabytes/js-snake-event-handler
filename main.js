let field = document.getElementById("snakeField");

for (let i = 0; i < 100; i++) {
    let block = document.createElement("div")
    block.className = "item"
    field.appendChild(block)
    block.addEventListener("mouseover", mouseOverEventHandler);
}

function mouseOverEventHandler(mouseOverEvent) {
    mouseOverEvent.target.style.background = "pink";    
    setTimeout(() => {
        mouseOverEvent.target.style.background = "lightblue";
    }, 500)
}