const allItems = [
    { img: "1/1.jpg", parllaxSpeed: 0.065 },
    { img: "1/2.jpg", parllaxSpeed: 0.05 },
    { img: "1/3.jpg", parllaxSpeed: 0.08 },
    { img: "1/4.jpg", parllaxSpeed: 0.1 },
    { img: "1/5.jpg", parllaxSpeed: 0.07 },
    { img: "1/1.jpg", parllaxSpeed: 0.085 },
    { img: "1/2.jpg", parllaxSpeed: 0.06 },
    { img: "1/3.jpg", parllaxSpeed: 0.04 },
    { img: "1/4.jpg", parllaxSpeed: 0.1 },
    { img: "1/5.jpg", parllaxSpeed: 0.065 },

];

function getRandomItems(arr, count) {
    const shuffled = arr.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

const items = getRandomItems(allItems, 10);

const gallery = document.querySelector(".gallery");

const itemPositions = [
    { top: "-5%", left: "5%" },
    { top: "40%", left: "-5%" },
    { top: "25%", left: "20%" },
    { top: "60%", left: "40%" },
    { top: "70%", left: "10%" },
    { top: "-5%", left: "50%" },
    { top: "10%", left: "85%" },
    { top: "40%", left: "60%" },
    { top: "80%", left: "70%" },
    { top: "50%", left: "80%" },
];

items.forEach((itemData, index) => {
    const item = document.createElement("div");
    item.classList.add("item");

    const position = itemPositions[index];
    item.style.top = position.top;
    item.style.left = position.left;

    const img = document.createElement("img");
    img.src = itemData.img;
    item.appendChild(img);

    gallery.appendChild(item);
});

document.addEventListener("mousemove", (e) => {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    gallery.querySelectorAll(".item").forEach((item, index) => {
        const animationFactor = items[index].parllaxSpeed;

        const deltaX = (e.clientX - centerX) * animationFactor;
        const deltaY = (e.clientY - centerY) * animationFactor;

        gsap.to(item, {
            x: deltaX,
            y: deltaY,
            duration: 0.75
        });
    });
});
