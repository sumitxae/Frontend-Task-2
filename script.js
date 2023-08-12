function locoScroll(){
        gsap.registerPlugin(ScrollTrigger);

        // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

        const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
        });
        // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
        locoScroll.on("scroll", ScrollTrigger.update);

        // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
        ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
        });

        // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
        ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

        // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
        ScrollTrigger.refresh();

}

locoScroll();

gsap.to(".shp,#shapes",{
    rotate: 360,
    duration:7,
    repeat: -1,
    ease: "none"
})

gsap.to(".elem",{
    x: "-100%",
    duration: 9,
    ease :"none",
    repeat: -1
})

gsap.to("#pleft img",{
    scrollTrigger:{
        trigger: "#page2",
        start: "top70%",
        scroller: "#main",
        // markers: true,
        end: "top -70%",
        scrub: 2
    },
    ease: "none",
    rotate: 360,
    duration: 10,
})


gsap.to("#sp",{
    x: "-45%",
    duration: 5,
    stagger: 1.5,
    scrollTrigger:{
        trigger:"#sp2",
        scroller:"#main",
        start:"top 60%",
        end : "top -10%",
        scrub: 2,
        // markers: true
    }  
})
gsap.to("#sp2",{
    x: "42%",
    duration: 5,
    stagger: 1.5,
    scrollTrigger:{
        trigger:"#sp2",
        scroller:"#main",
        start:"top 60%",
        end : "top -10%",
        scrub: 2,
        // markers: true
    }
},"a")

var imageSelector = [
    "https://www.thecraftsmen.tech/img/Gostolen.jpg",
    "https://www.thecraftsmen.tech/img/dream-well-logo.svg",
    "https://www.thecraftsmen.tech/img/creanntiv-logo.jpg",
    "https://www.thecraftsmen.tech/img/Gjerde-camping.svg",
]
var i = 0
var bot = document.querySelectorAll(".b4p")
bot.forEach(element => {
    element.style.backgroundImage = `url("${imageSelector[i]}")`;
    i++;
});

gsap.from(".b4p",{
    scale: 0.95,
    duration : 0.5, 
    scrollTrigger:{
        trigger: "#bottom4",
        scroller: "#main",
        start: "top 90%"
    }
})

let devImg = [
    "https://www.thecraftsmen.tech/img/tibo.png",
    "https://www.thecraftsmen.tech/img/dev-2.png",
    "https://www.thecraftsmen.tech/img/dev-3.png",
    "https://www.thecraftsmen.tech/img/jhoanna.png"
]
var j = 0
let frame = document.querySelectorAll("#dev");
frame.forEach(element => {
    element.style.backgroundImage = `url("${devImg[j]}")`;
    // console.log(element)
    j++;
});

gsap.to(".ip1",{
    x:15,
    duration:6,
    scrollTrigger:{
        trigger: "#ip",
        scroller: "#main",
        scrub:2,
        // end: "top 50%",
        // markers:true,
        start: "top 95%"
    }  
})
gsap.to(".ip2",{
    x: "-15%",
    duration:6,
    scrollTrigger:{
        trigger: "#ip",
        scroller: "#main",
        scrub:2,
        // end: "top 50%",
        // markers:true,
        start: "top 95%"
    } 
})

var col = document.querySelectorAll("#color")
var cont = document.querySelectorAll(".cob")
cont.forEach(element => {
    element.addEventListener("mouseleave",()=>{
        col.forEach(element => {
            element.style.top = "100%"
            element.style.backgroundColor = "transparent" 
        });
        setTimeout(() => {
            col.forEach(element => {
                element.style.top = "-100%",
                element.style.height = "100%" 
            });
        }, 400);
    })
});
cont.forEach(element => {
    element.addEventListener("mouseenter",function(){
        col.forEach(element => {
            element.style.backgroundColor = "#FFF480" 
        });
    })
});

gsap.to("#page6 #br img",{
    scrollTrigger:{
        trigger: "#page6",
        start: "top70%",
        scroller: "#main",
        // markers: true,
        end: "top -70%",
        scrub: 0.5
    },
    ease: "none",
    rotate: 360,
    duration: 10,
})

let crc = document.querySelector("#crc")
let tri = document.querySelector("#tri")
let sqr = document.querySelector("#sqr")
let scrlr = document.querySelector("#overlay #scroller") 
let obot = document.querySelector("#obot")

document.querySelector(".tp1").addEventListener("mouseenter",()=>{
    scrlr.style.display = "none"
    obot.style.top = "65%"
    sqr.style.scale = 1.5
    sqr.style.zIndex = "99"
    sqr.style.backgroundColor = "white"
    sqr.style.
    crc.style.scale = 0.7
    tri.style.scale = 0.7
})