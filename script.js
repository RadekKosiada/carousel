(function () {
    var pictures = document.getElementsByClassName('picture');
    // console.log(pictures[0].classList); //logs an array with 2 elem.: picture and onscreen;
    //https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
    var currentPic = 0;
    var dotClicked = false;
    // var nextPic=currentPic+1;

    // var elem = document.getElementById('dotNum0');
    // elem.style.backgroundColor = 'purple';
    // var dotClicked = false;

    var dots = document.getElementsByClassName('dot');
    for(var j=0; j<dots.length; j++) {
        console.log(dots[j].id);
        dots[j].id=j;
        console.log(dots[j].id);
        dots[j].addEventListener('click', function(e) {
            // dotClicked = true;
            console.log(dotClicked);
            // console.log(e.target.id);
            for(var l=0; l<dots.length; l++) {
                if(e.target.id ==l && !dotClicked) {
                    dotClicked= true;
                    console.log(l);
                    pictures[l].classList.add('onscreen');
                    pictures[l].classList.remove('offscreen');
                    dots[l].classList.add('current');
                } else {
                    dots[l].classList.remove('current');
                    dotClicked=false;
                }
            }
        });
    }

    function movePic() {
        //removing 'onscreen' class from the 1., 2., 3., etc. and adding 'offscreen' to it;
        pictures[currentPic].classList.remove('onscreen');
        // 'ofscreen' will be needed to make a shift to the left; in css left: -100%;
        pictures[currentPic].classList.add('offscreen');
        pictures[currentPic].classList.add('to-the-right');

        dotClicked=false;
        console.log(dotClicked);
        currentPic++;
        // console.log(currentPic);
        // zeroing currentPic to start carousel from the beginning
        if(currentPic >=pictures.length) {
            currentPic=0;
        }
        // adding 'onscreen' to the 1., 2., 3. etc and remvoing the 'offscreen'
        pictures[currentPic].classList.remove('to-the-right');
        pictures[currentPic].classList.add('onscreen');
        pictures[currentPic].classList.remove('offscreen');

        //recursion;
        setTimeout(movePic, 2000);
    }

    // document.body.addEventListener('transitionend', function(e) {
    //     console.log('transition ended');
    //     if(e.target.classList.contains('offscreen')) {
    //         e.target.classList.remove('offscreen');
    //     }
    // });
    setTimeout(movePic, 2000);


})();
