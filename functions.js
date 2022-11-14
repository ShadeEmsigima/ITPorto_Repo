const cGreet = document.getElementById('greet');

function loadGreeting(){
    console.log("welcome")
    cGreet.style.opacity = 1;

}

function checkPos(){
    //save all sections in const
    
    const cIntroduction = document.getElementById('introduction');
    const cCards = document.getElementById('cards');
    
    //track the middle of user's current view
    var userPos = visualViewport.pageTop + (visualViewport.height/2)

    //track which is the currently viewed element
    var elem

    //calc if pos is within element's bottom and top
    // if(userPos <= cGreet.offsetHeight && userPos >= cGreet.offsetTop){
    //     elem = cGreet  
    //     console.log(elem.id)
    // }
    /*else */if (userPos <= cIntroduction.offsetTop + cIntroduction.offsetHeight && userPos >= cIntroduction.offsetTop){
        elem = cIntroduction
        console.log(elem.id)
    }
    else {
        elem = cCards
        console.log(elem.id)
    }
    
    elem.style.opacity = 1;

    console.log("--------------------" + visualViewport.pageTop + " - " + visualViewport.height) //determine element pos
   // console.log("top: " + elem.offsetTop + " offset height: " + elem.offsetHeight)  //determen user's position
}



function hi(){
    //console.log("HERE! OVER HERE!")
    //html: onwheel="hi()"
}