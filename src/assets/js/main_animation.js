const main_title = document.querySelector("#main-title")
// main_title.innerHTML = ""
const animated_title_main = "cd Cassio/Portifólio"
const title_list_main = animated_title_main.split("")
let time = 550;
let time2 = 100;



export function AnimationDot(text) {
    text.classList.toggle("disable");
    setTimeout('AnimationDot(document.querySelector(".underscore"))', time)
    
}


function animationTitle(lista, index, text) {

    if (index < lista.length) {
        text.innerHTML += lista[index];
        setTimeout(() => {
            animationTitle(lista, index + 1, text);
        }, time2);
    }
    else if (index == lista.length) {
        text.innerHTML += '<span class="underscore span-red ">▍</span>'
        AnimationDot(document.querySelector(".underscore"))

    }
}


animationTitle(title_list_main, 0, main_title)
