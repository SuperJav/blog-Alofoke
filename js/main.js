

let iconMenu=document.getElementById("icon-menu")
let containerNav=document.getElementById("container-nav")
let list=document.querySelectorAll("li")
let containerMain=document.getElementById("container-main")
let containerSobreMi=document.getElementById("container-sobre-mi")
let containerContacto=document.getElementById("contacto")
//containerMain.style.display="block"


if (screen.width <= 550) {
    containerNav.style.top="-3.8em"
    containerNav.style.opacity="0"
}
function openMenu() {

    if (containerNav.style.top === "-3.8em") {
        containerNav.style.opacity="1"
        containerNav.style.top="4.2em"
        
    }else{
        containerNav.style.opacity="0"
        containerNav.style.top="-3.8em"
    }
}

iconMenu.addEventListener("click",openMenu)

list[0].addEventListener("click",()=>{
        containerMain.style.display="block"
         containerSobreMi.style.display="none"
         containerContacto.style.display="none"

})

list[1].addEventListener("click",()=>{
        containerSobreMi.style.display="block"
        containerMain.style.display="none"
        containerContacto.style.display="none"
    
})

list[2].addEventListener("click",()=>{
        containerContacto.style.display="flex"
        containerMain.style.display="none"
        containerSobreMi.style.display="none"
})

let buttomLuna= document.querySelector("#icon-luna")
let containerComentario=document.querySelectorAll(".container-comentarios")
let containerTopMuscia=document.getElementById("container-titulo-top")


