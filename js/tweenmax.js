
// TweenMax.to('.box_01', 1, {
//     x: 300,
//     ease: Back.easeOut,
//     scale: 1.5,
//     opacity: 0

// })




TweenMax.fromTo('.box_01', .5, {
    x: 100,
    opacity: 0
}, {
    x: 300,
    opacity: 1,
    ease: Back.easeOut,
    scale: 1.5
});