function menuMain(){
    document.getElementById('magic-line').style.left =  '77px';    
    let element = document.getElementById('menu').getElementsByTagName("li");
    removeClass(element);
    element[1].classList.add("current_page_item");
}

function menuExp(){
    document.getElementById('magic-line').style.left = '197px'
    let element = document.getElementById('menu').getElementsByTagName("li");
    removeClass(element);
    element[2].classList.add("current_page_item");
}

function menuClie(){
    document.getElementById('magic-line').style.left = '315px'
    let element = document.getElementById('menu').getElementsByTagName("li");
    removeClass(element);
    element[3].classList.add("current_page_item");
}

function menuCont(){
    document.getElementById('magic-line').style.left = '430px'
    let element = document.getElementById('menu').getElementsByTagName("li");
    removeClass(element);
    element[4].classList.add("current_page_item");
}

function removeClass(element){
    for (i = 0; i < element.length; i++) {
        element[i].classList.remove("current_page_item");
      }
}