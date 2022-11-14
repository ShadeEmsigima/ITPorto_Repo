function easeIn(){
    console.log("doing a thing")
    const elem = document.getElementById('kip');
    
    if(visualViewport.pageTop<=elem.offsetHeight && visualViewport.pageTop>=elem.offsetTop){
        console.log("viewing " + elem.id)
        if(elem.children.opacity == 0) console.log("opacity = 0")
        else{console.log("opacity != 0")}
    }
        
    else
        console.log("not in view")


    //console.log(visualViewport.pageTop) //determine element pos
    //console.log("top: " + elem.offsetTop + " offset height: " + elem.offsetHeight)  //determen user's position
}