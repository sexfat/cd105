// TweenMax.to('.box_01', 1, {
//     x: 300,
//     ease: Back.easeOut,
//     scale: 1.5,
//     opacity: 0

// })

TweenMax.fromTo('.box_01', 2, {
    x: 100,
    opacity: 0
}, {
    x: 300,
    opacity: 1,
    ease: Back.easeOut,
    scale: 1.5,
    rotation: 360,
    backgroundColor: '#f20',
    repeat: 1,
    repeatDelay: 1
});

TweenMax.set('.box_02', {
    x: 200,
    y: 100,
    rotation: 90
});


var _btn = document.getElementById('btn');
_btn.onclick = function () {
    TweenMax.staggerFromTo('.box_03', 1, {
        x: 0
    }, {
        x: 100,
        ease: Elastic.easeOut
    }, 0.3);
};


TweenMax.fromTo('.text-inner', .5, {
    y: -100
}, {
    y: 0
    // ease: Elastic.easeOut
});