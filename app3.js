const button= document.querySelector(".btn");
// const tree= document.querySelector(".tree");

const t1=new TimelineLite({paused:true})
t1.fromTo('.scene',2,{opacity:0},{opacity:1} )

t1.to('.tree',1,{
    opacity:"1",
    ease:Power2.easeOut
})
t1.fromTo('.slider',1, {x:'-100%'},{x:'0%',ease:Power2.easeInOut } ,'-=2.5')

t1.to(".santa",1,{
    left:"-60%",
    // top:"-100",
    ease:Power2.easeOut

} ) 

t1.fromTo(".text",1,{opacity:0,x:50},{opacity:1,x:0,delay:1})


button.addEventListener("click",()=>{
    t1.play()
})

// santa Fly 

const flightPath={
    curviness:1.25,
    autoRotate:true,
    values:[
        { x : 200, y : -20 },
        { x : 400, y : 10 },
        { x : 700, y : 100 },
        { x : 850, y : -100 },
        // { x : 600, y : 0 },
        { x : 450, y : -50 },
        { x : 700, y : 100 },
        { x : 900, y : 0 },
        { x : 1100, y : -50 },
        { x : 1300, y : -100 },
        { x:window.innerWidth+180, y:-250}
    ]
};



const flightPath1={
    curviness:1.25,
    autoRotate:true,
    values:[
        { x : 100, y : -100 },
        { x : 200, y : 100 },
        


        { x : 400, y : 100 },
        { x : 500, y : 100 },
        { x : 600, y : 100 },

        { x : 1000, y : 210 },
        { x : 1200, y : 210 },




    ]
};
// const tween = new TimelineLite();

t1.add(
    TweenLite.to('.paper-plane',4,{
        bezier:flightPath,
        // rotate:'60deg'
        delay:2,
        ease:Power1.easeInOut
    })
    
);
t1.add(
    TweenLite.to('.paper-plane',4,{
        bezier:flightPath1,
        // rotate:'60deg'
        delay:3,
        ease:Power1.easeInOut
    })
    
);