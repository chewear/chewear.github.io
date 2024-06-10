gsap.registerPlugin(ScrollTrigger);

window.onload = function() {
    const gallery = document.querySelector(".gallery");
    const previewImage = document.querySelector(".preview-img img");

    document.addEventListener("mousemove", function(event) {
        const x = event.clientX;
        const y = event.clientY;

        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;

        const percentX = (x - centerX) / centerX;
        const percentY = (y - centerY) / centerY;

        const rotateX = 55 + percentY * 2;
        const rotateY = percentX * 2;

        gsap.to(gallery, {
            duration: 1,
            ease: "power2.out",
            rotateX: rotateX,
            rotateY: rotateY,
            overwrite: "auto",
        });
    });

    // Function to shuffle an array
    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    // Create an array of image indices from 1 to 189
    let imageIndices = [];
    for (let i = 1; i <= 189; i++) {
        imageIndices.push(i);
    }

    // Shuffle the array of indices
    imageIndices = shuffle(imageIndices);

    // Select the first 70 indices
    let selectedIndices = imageIndices.slice(0, 70);

    // Append the selected images to the gallery
    for (let i = 0; i < 70; i++) {
        const item = document.createElement("div");
        item.className = "item";
        const img = document.createElement("img");
        img.src = "showcase_img/img_" + selectedIndices[i] + ".jpg";
        item.appendChild(img);
        gallery.appendChild(item);
    }


    // //show 70 pictures
    // for (let i = 0; i < 70 /* change this number to change the number of pictures to be shown */; i++) {
    //     const item = document.createElement("div");
    //     item.className = "item";
    //     const img = document.createElement("img");
    //     img.src = "showcase_img/img_" + (i + 1) + ".jpg";
    //     item.appendChild(img);
    //     gallery.appendChild(item);
    // }

    const items = document.querySelectorAll(".item");
    const numberOfItems = items.length;
    const angleIncrement = 360 / numberOfItems;

    items.forEach((item, index) => {
        gsap.set(item, {
            rotationY: 90,
            rotationZ: index * angleIncrement - 90,
            transformOrigin: "50% 400px",
        });

        item.addEventListener("mouseover", function() {
            const imgInsiteItem = item.querySelector("img");
            previewImage.src = imgInsiteItem.src;

            gsap.to(item, {
                x: 10,
                z: 10,
                y: 10,
                ease: "power2.out",
                duration: 0.5,
            });
        });

        item.addEventListener("mouseout", function() {
            const ranNum = Math.floor(Math.random() * 190);
            previewImage.src = "showcase_img/img_" + ranNum +".jpg";
            gsap.to(item, {
                x: 0,
                y: 0,
                z: 0,
                ease: "power2.out",
                duration: 0.5,
            });
        });
    });

    ScrollTrigger.create({
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
        onRefresh: setupRotation,
        onUpdate: (self) => {
            const rotationProgress = self.progress * 360 * 1;
            items.forEach((item, index) => {
                const currentAngle = index * angleIncrement - 90 + rotationProgress;
                gsap.set(item, {
                    rotationZ: currentAngle,
                    duration: 2,
                    ease: "power3.out",
                    overwrite: "auto",
                });
            });
        },
    });
};

function setupRotation() {
    // Initialize any state here if needed
}
