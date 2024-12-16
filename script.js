const tl = gsap.timeline();

tl.from(".link-gsap",{
    opacity:0,
    y:-50,
    duration:1,
    stagger:0.2,
    ease:"power1.out"
})

tl.from(".gsap-text-heading",{
    opacity:0,
    y:-50,
    duration:1,
    stagger:0.2,
    ease:"power1.out"
},"-=1")

gsap.from(".gsap-ser-heading",{
    opacity:0,
    y:50,
    duration:1,
    scrollTrigger:{
        trigger:".gsap-ser-heading",
        scroller:"body",
        start:"top 50%"
    }
})
gsap.from(".gsap-card-box",{
    opacity:0,
    y:50,
    duration:1,
    stagger:0.4,
    scrollTrigger:{
        trigger:".gsap-card-box",
        scroller:"body",
        start:"top 80%",
        // markers:true
    }
})

gsap.from(".gsap-info",{
    opacity:0,
    y:50,
    duration:1,
    stagger:0.4,
    scrollTrigger:{
        trigger:".gsap-info",
        scroller:"body",
        start:"top 70%",
        
    }
})
gsap.from(".gsap-bus-heading",{
    opacity:0,
    y:50,
    duration:1,
    stagger:0.4,
    ease:"power3.out",
    scrollTrigger:{
        trigger:".gsap-bus-heading",
        scroller:"body",
        start:"top 50%",
    }
})
