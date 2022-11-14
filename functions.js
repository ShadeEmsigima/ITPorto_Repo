function checkPos(){
    //save all sections in const
    const cGreet = document.getElementById('greet');
    const cIntroduction = document.getElementById('introduction');
    const cCards = document.getElementById('cards');
    
    //track where the user is currently viewing
    var userPos = visualViewport.pageTop

    //track which is the currently viewed element
    var elem

    if(userPos <= cGreet.offsetHeight && userPos >= cGreet.offsetTop){
        elem = cGreet  
        console.log(elem.id)
    }
    else if (userPos <= cIntroduction.offsetHeight && userPos >= cIntroduction.offsetTop){
        elem = cIntroduction
        console.log(elem.id)
    }
    else if (userPos <= cCards.offsetHeight && userPos >= cCards.offsetTop){
        elem = cCards
        console.log(elem.id)
    }
    //elem.document.style.setProperty.opacity(1)


    //console.log(visualViewport.pageTop) //determine element pos
   // console.log("top: " + elem.offsetTop + " offset height: " + elem.offsetHeight)  //determen user's position
}

function updateDot{
    SVGAElement.re
}

function hi(){
    //console.log("HERE! OVER HERE!")
    //html: onwheel="hi()"
}