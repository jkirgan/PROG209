//initilize timeline 1 and set variables
        let txt1 = '#txt1';
        let txt2 = '#txt2';
        let txt3 = '#txt3';
        let startBtn = '#startBtn';
        let tl1 = new TimelineMax();

        (function () {

            //sets above items image to hidden
            TweenMax.set(txt1, { autoAlpha: 0 });
            TweenMax.set(txt2, { autoAlpha: 0 });
            TweenMax.set(txt3, { autoAlpha: 0 });
            TweenMax.set(startBtn, { autoAlpha: 0 });
                   

            //time line will reveal the text block by block and then the start button
            tl1.to(txt1, 1.25, { autoAlpha: 1})
                .to(txt2, 1.5, { autoAlpha: 1 })
                .to(txt3, 2, { autoAlpha: 1 })
                .to(startBtn, 3, { autoAlpha: 1 });
                
                
                
        }());

function hideGame() {
    let startScreen = '#startScreen';
    TweenMax.set(startScreen, { autoAlpha: 0 });
    

    
        
    
}