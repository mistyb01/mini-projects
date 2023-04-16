let btn = document.querySelector('.bg-change-btn');
let container = document.querySelector('.container');

let currMode = "light";

btn.addEventListener("click", () => {
    container.removeChild(container.lastChild);

    let circ = document.createElement("div");
    circ.classList.add("circle");
    container.appendChild(circ);

    let size = 50;
    circ.style.width = size + "vw";
    circ.style.height = size + "vw";

    if (currMode === "light") {
        document.body.style.color = "azure"; 
        document.body.style.background = 'azure';
        document.documentElement.style.setProperty('--circle-color', 'blue');
        currMode = "dark";
    } else {
        document.body.style.color = "black";
        document.body.style.background = 'blue';
        document.documentElement.style.setProperty('--circle-color', 'azure');
        currMode = "light";
    }

    let transition = setInterval(() => {
        size+=3;
        circ.style.width = size + "vw";
        circ.style.height = size + "vw";
        if (size > 160) { clearInterval(transition) }
    }, 10)
})