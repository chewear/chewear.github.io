const allItems = [
    { img: "1/1.jpg", parllaxSpeed: 0.065 },
    { img: "1/2.jpg", parllaxSpeed: 0.05 },
    { img: "1/3.jpg", parllaxSpeed: 0.08 },
    { img: "1/4.jpg", parllaxSpeed: 0.1 },
    { img: "1/5.jpg", parllaxSpeed: 0.07 },
    { img: "1/6.jpg", parllaxSpeed: 0.085 },
    { img: "1/7.jpg", parllaxSpeed: 0.06 },
    { img: "1/8.jpg", parllaxSpeed: 0.04 },
    { img: "1/9.jpg", parllaxSpeed: 0.1 },
    { img: "1/10.jpg", parllaxSpeed: 0.065 },
    { img: "1/11.jpg", parllaxSpeed: 0.075 },
    { img: "1/12.jpg", parllaxSpeed: 0.09 },
    { img: "1/13.jpg", parllaxSpeed: 0.065 },
    { img: "1/14.jpg", parllaxSpeed: 0.05 },
    { img: "1/15.jpg", parllaxSpeed: 0.08 },
    { img: "1/16.jpg", parllaxSpeed: 0.1 },
    { img: "1/17.jpg", parllaxSpeed: 0.07 },
    { img: "1/18.jpg", parllaxSpeed: 0.085 },
    { img: "1/19.jpg", parllaxSpeed: 0.06 },
    { img: "1/20.jpg", parllaxSpeed: 0.04 },
    { img: "1/21.jpg", parllaxSpeed: 0.1 },
    { img: "1/22.jpg", parllaxSpeed: 0.065 },
    { img: "1/23.jpg", parllaxSpeed: 0.075 },
    { img: "1/24.jpg", parllaxSpeed: 0.09 },
    { img: "1/25.jpg", parllaxSpeed: 0.065 },
    { img: "1/26.jpg", parllaxSpeed: 0.05 },
    { img: "1/27.jpg", parllaxSpeed: 0.08 },
    { img: "1/28.jpg", parllaxSpeed: 0.1 },
    { img: "1/29.jpg", parllaxSpeed: 0.065 },
    { img: "1/30.jpg", parllaxSpeed: 0.05 },
    { img: "1/31.jpg", parllaxSpeed: 0.08 },
    { img: "1/32.jpg", parllaxSpeed: 0.1 },
    { img: "1/33.jpg", parllaxSpeed: 0.07 },
    { img: "1/34.jpg", parllaxSpeed: 0.085 },
];

// Function to shuffle an array and return the first n elements
function getRandomItems(arr, count) {
    const shuffled = arr.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

// Function to ensure at least 10 items, allowing duplicates if necessary
function ensureTenItems(arr, count) {
    const result = [];
    while (result.length < count) {
        result.push(...getRandomItems(arr, count - result.length));
    }
    return result.slice(0, count);
}

const items = ensureTenItems(allItems, 10);

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
