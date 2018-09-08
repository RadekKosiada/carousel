var currentPic = 0;
for (var i = 0; i <= 3; i++) {
    (function(index) {

        setTimeout(function() {
            currentPic++;
            console.log(currentPic);
        }, i*1000);
    })(i);
}

// (function () {
//     var pictures = document.getElementsByClassName('picture');
//     var currentPic = 0;
//
//     function movePic() {
//         pictures[i].classList.remove('onscreen');
//         pictures[i].classList.add('offscreen');
//         // currentPic++;
//         console.log(i);
//         // console.log(pictures.length);
//         // if(currentPic >=pictures.length) {
//         //     currentPic=0;
//         // }
//         //
//         console.log(i);
//         pictures[i].classList.add('onscreen');
//         pictures[i].classList.remove('offscreen');
//     }
//
//     for(var i =0; i<=pictures.length; i++) {
//         timeout(i);
//     }
//     function timeout(i) {
//         setTimeout(movePic, 1000);
//     }
//
//
//     // setTimeout(movePic, 1000);
// })();
//
// //
