function codePen() {
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});
}
codePen()
function videoConFun() {
    let containerVideo = document.querySelector(".video_container")
let play = document.querySelector(".play")


containerVideo.addEventListener("mouseenter", () => {
    gsap.to(play, {
        scale: 1,
        opacity:1,
        
    })
 
})
containerVideo.addEventListener("mouseleave", () => {
    gsap.to(play, {
        scale: 0,
        opacity:0,
    })
 
})


containerVideo.addEventListener("mousemove", (dets) => {
    gsap.to(play, {
        left: dets.x-60,
        top:dets.y -60
    })
 
})

}
videoConFun()



function loadAnimationFun(){

    gsap.from(".page1 h1", {
        y: 100,
        duration: .6,
        stagger: 0.3,
        opacity: 0,
        delay:.5,
    
    })
    gsap.from(".page1 .video_container", {
        scale:0.8,
        opacity: 0,
        duration:0.8,
        delay:1,
    
    })
}
loadAnimationFun()



function cursorFun() {
    
document.addEventListener("mousemove", (dets) => {
    gsap.to("#cursor", {
        left: dets.x,
        top: dets.y,
    })
})


document.querySelectorAll(".page3-img")
    .forEach((dets) => {
        dets.addEventListener("mouseenter", () => {
            gsap.to("#cursor", {
                transform: `translate(-50% ,-50%) scale(1)`,
            })
        })
        dets.addEventListener("mouseleave", () => {
            gsap.to("#cursor", {
                transform: `translate(-50% ,-50%) scale(0)`,
            })
        })
    
})
}
cursorFun()



function navAnimation() {
    gsap.to(".nav-part1 svg", {
        transform: `translateY(-100%)`,
        scrollTrigger: {
            scroller: ".main",
            trigger: ".page1",
            start: "top 0%",
            end:"top -5%",
            scrub: true,
            
        }
    })
    
    gsap.to("#nav-part2 .manu", {
        transform: `translateY(-100%)`,
        opacity:0,
        scrollTrigger: {
            scroller: ".main",
            trigger: ".page1",
            start: "top 0%",
            end:"top -10%",
            scrub: true,
            
        }
    })
}
navAnimation()