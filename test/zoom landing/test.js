gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded',function(){
    const contentHolderHeight = document.querySelector(".content-holder").offsetHeight;
    const imgHolderHeight = window.innerHeight;
    const addtionalScrollHeight = window.innerHeight;

    const totalBodyHeight = contentHolderHeight + imgHolderHeight + addtionalScrollHeight;
    document.body.style.height = `${totalBodyHeight}px`;

});

ScrollTrigger.create({
    trigger: ".website-content",
    start: "-0.1% top",
    end: "bottom bottom", 
    onEnter: () => {
        gsap.set(".website-content", { position: "absolute", top: "195%"});
    },
    onLeaveBack: () => {
        gsap.set(".website-content", { position: "fixed", top: '0' });
    },
     markers: true, // Add markers for debugging
});

gsap.to(".header .letters:first-child", {
    x: () => -innerWidth * 3,
    scale: 10,
    ease: "power2.inOut",
    scrollTrigger: {
        start: "top top",
        end: "+=200%",
        scrub: 1
    } 
});

gsap.to(".header .letters:last-child", {
    x: () => innerWidth * 3,
    scale: 10,
    ease: "power2.inOut",
    scrollTrigger: {
        start: "top top",
        end: "+=200%",
        scrub: 1
    } 
});

gsap.to(".image-holder", {
    rotate: 0,
    clipPath : 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
    ease: "power2.inOut",
    scrollTrigger: {
        start: "top top",
        end: "+=200%",
        scrub: 1,
    }
});

gsap.to(".image-holder img", {
    scale: 1,
    ease: "power2.inOut",
    scrollTrigger: {
        start: "top top",
        end: "+=200%",
        scrub: 1,
    }
});

