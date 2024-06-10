let elements = document.querySelectorAll(".text");

elements.forEach((element) => {
    let innerText = element.innerText;
    element.innerHTML = "";

    let textContainer = document.createElement("div");
    textContainer.classList.add("block");

    for(let letter of innerText){
        let span = document.createElement("span");
        span.innerText = letter.trim() === "" ? "\xa0" : letter;
        span.classList.add("letter");
        textContainer.appendChild(span);
    }
    element.appendChild(textContainer);
    element.appendChild(textContainer.cloneNode(true));
})

elements.forEach((element) => {
    element.addEventListener("mouseover", () => {
        element.classList.remove("play");
    })
})

function showImage(index) {
    let image = document.getElementById(`img-${index}`);
    image.style.transform = "translate(0)";
}

function hideImage(index) {
    let image = document.getElementById(`img-${index}`);
    switch(index) {
        case 1:
            image.style.transform = "translateX(100%)";
            break;
        case 2:
            image.style.transform = "translateY(100%)";
            break;
        case 3:
            image.style.transform = "translateX(-100%)";
            break;
        case 4:
            image.style.transform = "translateY(-100%)";
            break;
    }
}