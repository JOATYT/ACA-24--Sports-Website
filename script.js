var items = document.querySelectorAll("li")

function isElementInViewport(el){
    var rect = el.getBoundingClientRect() 
    return(
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= innerHeight &&
        rect.right <= innerWidth 
    )
}


function callBackFunc(){
    for(var i = 0; i<items.length; i++){
        if(isElementInViewport(items[i])){
            items[i].classList.add('in-view')
        }
    }
}

window.addEventListener("scroll",callBackFunc)