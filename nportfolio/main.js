gsap.registerPlugin(ScrollTrigger);


window.addEventListener("load", function() {
  var boxes = document.querySelectorAll(".box"),
      stage = document.querySelector(".stage"),
      rotationDirection = 1; // 1 for right, -1 for left

  gsap.set(stage, {
    perspective: 2400,
    transformStyle: "preserve-3d"
  });

  boxes.forEach(function(element, index) {
    gsap.set(element, {
      rotationY: index * 360 / 13,
      transformOrigin: "50% 50% -1000"
    });
  });

  window.addEventListener('wheel', function(event) {
    rotationDirection = event.deltaY > 0 ? 1 : -1;

    /*gsap.to(boxes, {
      rotationY: "+=" + (rotationDirection * 10), // Adjust the rotation speed here
      duration: 0.6,
      ease: "power1.out"
    });*/


gsap.to(boxes,{
  scrollTrigger: {
        trigger: ".demoWrapper",
        start: "top 70%",
        toggleActions: "play pause play pause",
        scrub: 1,
        // markers: true,
      },
      rotationY: function () {
        return "+=" + rotationDirection * 12;
      },
      ease: "power1.out",
    });
  });
});



gsap.to(".stage",{
  rotation:-12,
  duration: 1,
  scrollTrigger: {
    trigger: ".stage",
    start: "top 20%",
    end: "2000px",
    // markers: true,
    toggleActions: "restart none none none",
    scrub: 2,
    pin: true
  }
})

/*
function showBottomText() {
  var bottomText = document.querySelector('.BottomCarouselText');
  bottomText.style.display = 'block';
  let myText = new SplitType('.BottomCarouselText');
    gsap.from(myText.chars, {
      y:'100%',
      stagger: 0.05,
      ease: 'back.out',
      duration: 0.5
  })
}
 
function hideBottomText() {
  let myText = new SplitType('.BottomCarouselText');

  gsap.to(myText.chars, {
    y: '100%',
    stagger: 0.05,
    ease: 'back.in',
    duration: 0.5,
    onComplete: function () {
      bottomText.style.display = 'none';
      gsap.set(myText.chars, { y: 0 });
    },
    onCompleteParams: [myText.chars]
  });
}
*/


/*
function showBottomText() {
  var bottomText = document.querySelector('.BottomCarouselText');
  bottomText.style.display = "block";
  let myText = new SplitType('.BottomCarouselText');
  gsap.from(myText.chars, {
    y: '100%',
    stagger: 0.1,
    ease: 'back.in',
    duration: 0.5,
  });
  console.log("hovered element");
}

function hideBottomText() {
  var bottomText = document.querySelector('.BottomCarouselText');
  let myText = new SplitType('.BottomCarouselText');

  gsap.to(myText.chars, {
    y: '100%',
    stagger: 0.05,
    ease: 'back.in',
    duration: 0.3,
    onComplete: function () {
      gsap.set(myText.chars, { y: 0 });
      bottomText.style.display = 'none';
    },
    onCompleteParams: [myText.chars]
    
  });
  console.log("unhovered element");
}

*/
function changeText(newText) {
  document.getElementById('dynamicText').textContent = newText;
}
function addHoverClass() {
  document.querySelector('.BottomCarouselText span').classList.add('hovered');
}
function removeHoverClass() {
  document.querySelector('.BottomCarouselText span').classList.remove('hovered');
}

// REVEAL //
gsap.utils.toArray(".TopCarouselText").forEach(function (elem) {
  ScrollTrigger.create({
    trigger: ".textContainer",
    start: "10% 20%",
    end: "110% 80%",
    // markers: true,
    pin: true,
    onEnter: function () {
      gsap.fromTo(
        elem,
        { y: 100, autoAlpha: 0 },
        {
          duration: 0.6,
          y: 0,
          autoAlpha: 1,
          ease: "power2",
          overwrite: "auto"
        }
      );
    },
    // onLeave: function () {
    //   gsap.fromTo(elem, { autoAlpha: 1 }, { autoAlpha: 1, overwrite: "auto" });
    // },
    // onEnterBack: function () {
    //   gsap.fromTo(
    //     elem,
    //     { y: -100, autoAlpha: 0 },
    //     {
    //       duration: 1.25,
    //       y: 0,
    //       autoAlpha: 1,
    //       ease: "power2",
    //       overwrite: "auto"
    //     }
    //   );
    // },
    onLeaveBack: function () {
      gsap.fromTo(elem, { autoAlpha: 1 }, { 
        autoAlpha: 0, 
        overwrite: "auto",
        duration:0.3,
       });
    }
  });
});



gsap.registerPlugin(ScrollTrigger);

      let sections = gsap.utils.toArray(".panel");

      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: ".container",
          pin: true,
          scrub: 1,
          // snap: 1 / (sections.length - 1),
          end: () => "+=" + document.querySelector(".container").offsetWidth
        }
});



gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded',function() {
  
    const imgHolderHeight = window.innerHeight;
    const additionalScrollHeight = window.innerHeight;

    const totalBodyHeight =   imgHolderHeight + additionalScrollHeight;
    document.body.style.height = `${totalBodyHeight}px`; 
})

ScrollTrigger.create({
    trigger: ".website-content",
    start: "top top",
    end: () => "+=100%", 
    onEnter: () => {
        gsap.set(".website-content", { position: "sticky"});
    },
    onLeaveBack: () => {
        gsap.set(".website-content", { position: "fixed", top: '0' });
    },
    // markers: true, // Add markers for debugging
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

ScrollTrigger.create({
  trigger: ".website-content",
  start: "-10% top",
  end: "110% top",
  scrub: 1,
  onEnter: () => {
      gsap.set(".header", { zIndex: "1000" });
  },
  onLeave: () => {
      gsap.set(".header", { display: "none" });
  },
  onEnterBack: () => {
      gsap.set(".header", { display: "flex" });
  }
  
});

const copies = document.querySelectorAll(".title");

function setupSplits() {
    Array.from(copies).forEach((copy) => {
        const splitTypeInstance = new SplitType(copy, {
            types: ["lines", "words", "chars"],
            lineClass: "split-line",
        });

        const lines = copy.querySelectorAll(".split-line");
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".tr",
                toggleAction: "restart pause resume",
                start: "200% -170%",
                // markers: {startColor: "black", endColor: "black", fontSize: "18px", fontWeight: "bold", indent: 20},
                scrub: 2,
              },
        });

        tl.from(lines, {
            duration: 2,
            ease: "power4.inOut",
            yPercent: 100,
            stagger: 0.1,
        });
    });
}

setupSplits();


gsap.to(".arrow", {
  scrollTrigger: {
      trigger: ".paboutme", // Element that triggers the animation
      start: "40% center",   // Start the animation when the top of the trigger element reaches the center of the viewport
      end: "bottom center",  // End the animation when the bottom of the trigger element reaches the center of the viewport
      
      // markers:true,         // Smoothly animate the property over the duration of the scroll
  },
  rotation: 0,              // Target rotation value
});


gsap.to(".pinfod p", {
  backgroundPositionX: "0%",
  stagger: 0.7,
  scrollTrigger: {
    trigger: ".pinfod",
    toggleActions: "play none none none",
    scrub: 1,
    start: "bottom 25%",
    end: "300% top",
    // markers: {startColor: "blue", endColor: "blue", fontSize: "18px", fontWeight: "bold", indent: 20},
  },
})

gsap.to(".skill_title", {
  scrollTrigger: {
    trigger: ".skill_title",
    start: "220% top", // Adjust the start trigger as needed
    end: "120% top", // Adjust the end trigger as needed
    scrub: 1,
    duration:2.5,
    ease: "elastic.out(1,0.3)",
    // markers: {startColor: "purple", endColor: "purple", fontSize: "18px", fontWeight: "bold", indent: 50},
  },
  rotation: 0,
});

gsap.to(".srect", {
  scrollTrigger: {
    trigger: ".skill_title",
    start: "225% top", // Adjust the start trigger as needed
    end: "120% top", // Adjust the end trigger as needed
    scrub: 1,
    // markers: {startColor: "purple", endColor: "purple", fontSize: "18px", fontWeight: "bold", indent: 50},
  },
  translateY: 0,
});

// let boxes = document.querySelectorAll('.p3c');

// gsap.to(boxes, {
//   y: 0,
//   scrollTrigger: {
//       trigger: ".p3c",
//       start: "700% top", // Adjust the start trigger as needed
//       end: "800% top", // Adjust the end trigger as needed
//       stagger: 1,
//       scrub: 1,
//       markers: {
//           startColor: "purple",
//           endColor: "purple",
//           fontSize: "18px",
//           fontWeight: "bold",
//           indent: 50
//       },
//   },
// });

gsap.to(".aa", {
  y: 0,
  scrollTrigger: {
      trigger: ".aa",
      start: "750% top", // Adjust the start trigger as needed
      end: "850% top", // Adjust the end trigger as needed
      stagger: 1,
      scrub: 1,
      // markers: {
      //     startColor: "purple",
      //     endColor: "purple",
      //     fontSize: "18px",
      //     fontWeight: "bold",
      //     indent: 50
      // },
  },
});

gsap.to(".ss", {
  y: 0,
  scrollTrigger: {
      trigger: ".ss",
      start: "800% top", // Adjust the start trigger as needed
      end: "950% top", // Adjust the end trigger as needed
      stagger: 1,
      scrub: 1,
      // markers: {
      //     startColor: "purple",
      //     endColor: "purple",
      //     fontSize: "18px",
      //     fontWeight: "bold",
      //     indent: 50
      // },
  },
});

gsap.to(".dd", {
  y: 0,
  scrollTrigger: {
      trigger: ".dd",
      start: "900% top", // Adjust the start trigger as needed
      end: "1000% top", // Adjust the end trigger as needed
      stagger: 1,
      scrub: 1,
      // markers: {
      //     startColor: "purple",
      //     endColor: "purple",
      //     fontSize: "18px",
      //     fontWeight: "bold",
      //     indent: 50
      // },
  },
});

gsap.to(".ff", {
  y: 0,
  scrollTrigger: {
      trigger: ".ff",
      start: "1000% top", // Adjust the start trigger as needed
      end: "1150% top", // Adjust the end trigger as needed
      stagger: 1,
      scrub: 1,
      // markers: {
      //     startColor: "purple",
      //     endColor: "purple",
      //     fontSize: "18px",
      //     fontWeight: "bold",
      //     indent: 50
      // },
  },
});

gsap.to(".p3title", {
  y: 0,
  scrollTrigger: {
      trigger: ".aa",
      start: "750% top", // Adjust the start trigger as needed
      end: "850% top", // Adjust the end trigger as needed
      scrub: 1,
      // markers: {
      //     startColor: "purple",
      //     endColor: "purple",
      //     fontSize: "18px",
      //     fontWeight: "bold",
      //     indent: 50
      // },
  },
});

gsap.to(".c_h1",{
  y:0,
  scrollTrigger: {
    trigger: ".p4",
    start: "775% top", // Adjust the start trigger as needed
      end: "600% top", // Adjust the end trigger as needed
      scrub:1,
      // markers: {
      //     startColor: "purple",
      //     endColor: "purple",
      //     fontSize: "18px",
      //     fontWeight: "bold",
      //     indent: 50
      // },
  }
});

gsap.to(".p4c-cont", {
  scale: 1, // Set the scale factor to 1 for no scaling
  scrollTrigger: {
    trigger: ".p4",
    start: "775% top",
    end: "600% top",
    scrub: 1,
    // markers: {
    //   startColor: "purple",
    //   endColor: "purple",
    //   fontSize: "18px",
    //   fontWeight: "bold",
    //   indent: 50,
    // },
  },
});

let currentScroll = 0;
let isScrollingDown = true;

let tween = gsap.to(".marquee__part", {xPercent: -100, repeat: -1, duration: 30, ease: "linear"}).totalProgress(0.5);

gsap.set(".marquee__inner", {xPercent: -50});

window.addEventListener("scroll", function(){
  
  if ( window.pageYOffset > currentScroll ) {
    isScrollingDown = true;
  } else {
    isScrollingDown = false;
  }
   
  gsap.to(tween, {
    timeScale: isScrollingDown ? 1 : -1
  });
  
  currentScroll = window.pageYOffset
});

gsap.to(".marquee", {
  y: 0, 
  scrollTrigger: {
    trigger: ".marquee",
    start: "-150% top",
    end: "bottom top",
    scrub: 1,
    // markers: {
    //   startColor: "purple",
    //   endColor: "purple",
    //   fontSize: "18px",
    //   fontWeight: "bold",
    //   indent: 50,
    // },
  },
});
