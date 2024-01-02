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
        markers: true,
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
  duration:2,
  scrollTrigger: {
    trigger: ".stage",
    start: "top 20%",
    end: "2000px",
    markers: true,
    toggleActions: "restart none none none",
    scrub: 3,
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
    markers: true,
    pin: true,
    onEnter: function () {
      gsap.fromTo(
        elem,
        { y: 100, autoAlpha: 0 },
        {
          duration: 1,
          y: 0,
          autoAlpha: 1,
          ease: "power2",
          overwrite: "auto"
        }
      );
    },
    onLeave: function () {
      gsap.fromTo(elem, { autoAlpha: 1 }, { autoAlpha: 0, overwrite: "auto" });
    },
    onEnterBack: function () {
      gsap.fromTo(
        elem,
        { y: -100, autoAlpha: 0 },
        {
          duration: 1.25,
          y: 0,
          autoAlpha: 1,
          ease: "power2",
          overwrite: "auto"
        }
      );
    },
    onLeaveBack: function () {
      gsap.fromTo(elem, { autoAlpha: 1 }, { autoAlpha: 0, overwrite: "auto" });
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
          snap: 1 / (sections.length - 1),
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

ScrollTrigger.create({
  trigger: ".website-content",
  start: "-10% top",
  end: "120% top",
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







