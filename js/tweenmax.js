// TweenMax.to('.box_01', 1, {
//     x: 300,
//     ease: Back.easeOut,
//     scale: 1.5,
//     opacity: 0

// })

TweenMax.fromTo('.section_01 .box_01', 2, {
    x: 0,
    opacity: 0
}, {
    x: 0,
    opacity: 1,
    ease: Back.easeOut,
    rotation: 360,
    transformOrigin: 'right bottom',
    backgroundColor: '#f20',
    repeat: 1,
    repeatDelay: 1
});

TweenMax.set('.section_01 .box_02', {
    x: 200,
    y: 100,
    rotation: 90
});


var _btn = document.getElementById('btn');
_btn.onclick = function () {
    TweenMax.staggerFromTo('.section_01 .box_03', 1, {
        x: 0
    }, {
        x: 100,
        ease: Elastic.easeOut
    }, 0.3);
};


TweenMax.fromTo('.section_01 .text-inner', .5, {
    y: -100,
    textShadow: "0px 0px 50px #000",
    color: "none"
}, {
    y: 0,
    textShadow: "0px 0px 0px #000"
});

// TweenMax.to('.box_04',1,{
//     boxShadow: '1px 1px 20px #000' 
// })



// TweenMax.to('.section_01 .width', 1, {
//     width: '500px',
//     backgroundColor: '#333',
//     repeat: 2
// });

TweenMax.fromTo('.box_04', 1, {
    boxShadow: '2px 2px 40px #333',
}, {
    boxShadow: '2px 2px 40px #f20',
    repeat: -1,
    yoyo: true
})



TweenMax.to('.box_05', 2, {
    rotationY: 360,
    transformOrigin: "left 50% -200",
    transformPerspective: 600,
    repeat: -1,
    borderRadius: '100%',
    ease: Power0.easeNone,

});





var tl = new TimelineMax({
    repeat: 1,
    // onComplete: callback 
    // yoyo: true
});

tl.to('.section_02 .box_02', 1, {
    y: 100
}).to('.section_02 .box_01', 1, {
    x: 100
});


// tl.play();
// tl.stop();
// tl.timeScale(1);
// tl.pause();
// tl.reverse(0);





// function callback() {
//     alert('完成動畫');
//   }





//tl.add(
// 動畫
//)


document.getElementById('btn_to').onclick = function () {

    TweenMax.to(window, 2, {
        scrollTo: {
            y: "#arch"
        }
    });

}


//1
var controller = new ScrollMagic.Controller();





var an01 = TweenMax.to('.scrollbox', .7, {
    // x : 100
    rotation: 720,
    ease: Power0.easeNone,
    transformOrigin: "center center",
    // repeat:-1
})


var scene01 = new ScrollMagic.Scene({
        triggerElement: '#aaa',
        offset: 0,
        // duration: '100%'
        // triggerHook: 0.5,
        // reverse: true
    }).setTween(an01)
    .addIndicators({
        name: 'scence 01'
    })
    .addTo(controller);




var animation_02 = new TimelineMax();



animation_02.fromTo('.title', 1, {
    opacity: 0,
    y: -30
}, {
    opacity: 1,
    y: 0
}).fromTo('.slogan', 1, {
    opacity: 0,
    x: -100
}, {
    opacity: 1,
    x: 0
})


var btns = new TimelineMax();
var btnss = new TimelineMax();

btns.set('.u-btns', {
    rotationX: -90
}).to('.u-btns', 1, {
    rotationX: 0,
    transformOrigin: "center top",
    transformPerspective: 900,
    ease: Power0.easeNone,
})

btnss.set('.btns', {
    rotationX: 0
}).to('.btns', 1, {
    rotationX: 90,
    transformOrigin: "center bottom",
    transformPerspective: 900,
    ease: Power0.easeNone,
})

var scene02 = new ScrollMagic.Scene({
        triggerElement: '#bbb',
        offset: 0,
        duration: 400,
        // triggerHook: 0.5,
        reverse: true
    }).setTween([btns, btnss, animation_02])
    .addIndicators({
        name: 'scence 02'
    })
    .addTo(controller);




var scene03 = new ScrollMagic.Scene({
        triggerElement: '#ccc',
     
        // triggerHook: 0.5,
        // reverse: true
    }).setClassToggle('.setclass' , 'on')
    .addIndicators({
        name: 'scence 03'
    })
    .addTo(controller);



















console.log('end ok');