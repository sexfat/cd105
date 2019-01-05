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


document.getElementById('btn_to').onclick =function (){
  
    TweenMax.to(window, 2, {scrollTo:{y:"#arch"}});

}


var controller = new ScrollMagic.Controller();

var scene = new ScrollMagic.Scene({
    triggerElement: '#trigger01'
    // triggerHook: 0.5,
    // reverse: false
}).setTween(tl)
.addIndicators()
.addTo(controller);

















console.log('end ok');