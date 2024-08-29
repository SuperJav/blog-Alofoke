
document.cookie = "miCookie=valor; path=/; max-age=3600";

let icons = document.querySelectorAll(".icons-videos")
let buttonSedComentario=document.querySelectorAll(".button-enviar-comentario")
let containerInfo=document.querySelectorAll(".container-icon-video")
let containercomentario = document.querySelectorAll(".container-input-comentario-video")
let textMegusta = document.querySelectorAll(".text-megusta")
let textComentario = document.querySelectorAll(".text-comentario")
let inputComentario=document.querySelectorAll(".input-comentario")
let textcommet=document.querySelectorAll(".commet")
let nombreUsuario=document.querySelectorAll(".nombre-usuario")
let containerMusica=document.querySelectorAll(".item-container-musica")
let containerSpotify=document.querySelectorAll(".container-spotify")
containerMusica.forEach((element,index)=>{
    element.addEventListener("click",()=>{
        switch (index) {
            case 0:
                if (containerSpotify[0].style.top == "-90px") {
                    containerSpotify[0].style.top = "10px"
                    containerSpotify[0].style.opacity="1"
                }else{
                    containerSpotify[0].style.top = "-90px"
                    containerSpotify[0].style.opacity="0"
                }
                break;
            case 1:
                if (containerSpotify[1].style.top == "-90px") {
                    containerSpotify[1].style.top = "10px"
                    containerSpotify[1].style.opacity="1"
                }else{
                    containerSpotify[1].style.top = "-90px"
                    containerSpotify[1].style.opacity="0"
                }
                break;
            case 2:
                if (containerSpotify[2].style.top == "-90px") {
                    containerSpotify[2].style.top = "10px"
                    containerSpotify[2].style.opacity="1"
                }else{
                    containerSpotify[2].style.top = "-90px"
                    containerSpotify[2].style.opacity="0"
                }
                break;
            case 3:
                if (containerSpotify[3].style.top == "-90px") {
                    containerSpotify[3].style.top = "10px"
                    containerSpotify[3].style.opacity="1"
                }else{
                    containerSpotify[3].style.top = "-90px"
                    containerSpotify[3].style.opacity="0"
                }
                break;
            case 4:
                if (containerSpotify[4].style.top == "-90px") {
                    containerSpotify[4].style.top = "10px"
                    containerSpotify[4].style.opacity="1"
                }else{
                    containerSpotify[4].style.top = "-90px"
                    containerSpotify[4].style.opacity="0"
                }
                break;
            case 5:
                if (containerSpotify[5].style.top == "-90px") {
                    containerSpotify[5].style.top = "10px"
                    containerSpotify[5].style.opacity="1"
                }else{
                    containerSpotify[5].style.top = "-90px"
                    containerSpotify[5].style.opacity="0"
                }
                break; 
            case 6:
                if (containerSpotify[6].style.top == "-90px") {
                    containerSpotify[6].style.top = "10px"
                    containerSpotify[6].style.opacity="1"
                }else{
                    containerSpotify[6].style.top = "-90px"
                    containerSpotify[6].style.opacity="0"
                }
                break;
            case 7:
                if (containerSpotify[7].style.top == "-90px") {
                    containerSpotify[7].style.top = "10px"
                    containerSpotify[7].style.opacity="1"
                }else{
                    containerSpotify[7].style.top = "-90px"
                    containerSpotify[7].style.opacity="0"
                }
                break;
            case 8:
                if (containerSpotify[8].style.top == "-90px") {
                    containerSpotify[8].style.top = "10px"
                    containerSpotify[8].style.opacity="1"
                }else{
                    containerSpotify[8].style.top = "-90px"
                    containerSpotify[8].style.opacity="0"
                }
                break;
            case 9:
                if (containerSpotify[9].style.top == "-90px") {
                    containerSpotify[9].style.top = "10px"
                    containerSpotify[9].style.opacity="1"
                }else{
                    containerSpotify[9].style.top = "-90px"
                    containerSpotify[9].style.opacity="0"
                }
            default:
                break;
        }
    })
})


buttonSedComentario.forEach((element,index)=>{

   element.addEventListener("click",()=>{
    switch (index) {
        case 0:
                if (inputComentario[0].value.trim() =="") {
                    alert("Debes de colocar un comentario")
                }else{
                    textcommet[0].innerHTML=inputComentario[0].value
                    nombreUsuario[0].innerHTML="Anónimo"
                    inputComentario[0].value=""
                }   
            break;
        case 1:
                if (inputComentario[1].value.trim() =="") {
                    alert("Debes de colocar un comentario")
                }else{
                    textcommet[1].innerHTML=inputComentario[1].value
                    nombreUsuario[1].innerHTML="Anónimo"
                    inputComentario[1].value=""
                }   
            break;
        case 2:
                if (inputComentario[2].value.trim() =="") {
                    alert("Debes de colocar un comentario")
                }else{
                    textcommet[2].innerHTML=inputComentario[2].value
                    nombreUsuario[2].innerHTML="Anónimo"
                    inputComentario[2].value=""
                }   
            break;
        case 3:
                if (inputComentario[3].value.trim() =="") {
                    alert("Debes de colocar un comentario")
                }else{
                    textcommet[3].innerHTML=inputComentario[3].value
                    nombreUsuario[3].innerHTML="Anónimo"
                    inputComentario[3].value=""
                }   
            break;  
        case 4:
                if (inputComentario[4].value.trim() =="") {
                    alert("Debes de colocar un comentario")
                }else{
                    textcommet[4].innerHTML=inputComentario[4].value
                    nombreUsuario[4].innerHTML="Anónimo"
                    inputComentario[4].value=""
                }   
            break;
        case 5:
                if (inputComentario[5].value.trim() =="") {
                    alert("Debes de colocar un comentario")
                }else{
                    textcommet[5].innerHTML=inputComentario[5].value
                    nombreUsuario[5].innerHTML="Anónimo"
                    inputComentario[5].value=""
                }   
            break;
        default:
            break;
    }
   })
})

icons.forEach((elemento,indice)=>{

    if ((indice == 2)||(indice == 3)||(indice == 6)||(indice == 7)||(indice == 10)||(indice == 11)||(indice == 14)||(indice == 15)||(indice == 18)||(indice == 19)||(indice == 22)||(indice == 23)) {

        elemento.addEventListener("click",()=>{
        
        
            let key=indice
            switch (key) {
                case 2:
                        if (containercomentario[0].style.width == "100%") {
                             containercomentario[0].style.width="0%"
                             buttonSedComentario[0].style.opacity=0
                        }else{
                            containercomentario[0].style.width="100%"
                            buttonSedComentario[0].style.opacity=1
                        }
                    break;
                case 3:
                        navigator.clipboard.writeText("https://index/#1").then(function() {
                            alert('¡Link copiado al portapapeles!');
                        }).catch(function(error) {
                            console.error('Error al copiar el texto: ', error);
                        });
                        break;
                case 6:
                    if (containercomentario[1].style.width == "100%") {
                        containercomentario[1].style.width="0%"
                        buttonSedComentario[1].style.opacity=0
                   }else{
                       containercomentario[1].style.width="100%"
                       buttonSedComentario[1].style.opacity=1
                   }
                    break;
                case 7:
                        navigator.clipboard.writeText("https://index/#2").then(function() {
                            alert('¡Texto copiado al portapapeles!');
                        }).catch(function(error) {
                            console.error('Error al copiar el texto: ', error);
                        });
                        break;
                case 10:
                    if (containercomentario[2].style.width == "100%") {
                        containercomentario[2].style.width="0%"
                        buttonSedComentario[2].style.opacity=0
                   }else{
                       containercomentario[2].style.width="100%"
                       buttonSedComentario[2].style.opacity=1
                   }
                    break;
                case 11:
                    navigator.clipboard.writeText("https://index/#3").then(function() {
                        alert('¡Texto copiado al portapapeles!');
                    }).catch(function(error) {
                        console.error('Error al copiar el texto: ', error);
                    });
                    break;
                case 14:
                    if (containercomentario[3].style.width == "100%") {
                        containercomentario[3].style.width="0%"
                        buttonSedComentario[3].style.opacity=0
                   }else{
                       containercomentario[3].style.width="100%"
                       buttonSedComentario[3].style.opacity=1
                   }
                    break;
                case 15:
                    navigator.clipboard.writeText("https://index/#4").then(function() {
                        alert('¡Texto copiado al portapapeles!');
                    }).catch(function(error) {
                        console.error('Error al copiar el texto: ', error);
                    });
                    break;
                case 18:
                    if (containercomentario[4].style.width == "100%") {
                        containercomentario[4].style.width="0%"
                        buttonSedComentario[4].style.opacity=0
                   }else{
                       containercomentario[4].style.width="100%"
                       buttonSedComentario[4].style.opacity=1
                   }
                    break;
                case 19:
                    navigator.clipboard.writeText("https://index/#5").then(function() {
                        alert('¡Texto copiado al portapapeles!');
                    }).catch(function(error) {
                        console.error('Error al copiar el texto: ', error);
                    });
                    break;
                case 22:
                    if (containercomentario[5].style.width == "100%") {
                        containercomentario[5].style.width="0%"
                        buttonSedComentario[5].style.opacity=0
                   }else{
                       containercomentario[5].style.width="100%"
                       buttonSedComentario[5].style.opacity=1
                   }
                    break;
                case 23:
                        navigator.clipboard.writeText("https://index/#6").then(function() {
                            alert('¡Texto copiado al portapapeles!');
                        }).catch(function(error) {
                            console.error('Error al copiar el texto: ', error);
                        });
                        break;
                default:
                    break;
            }
        })
    }
    
})

containerInfo.forEach((element,index)=>{
    

    switch (index) {
        case 0:
            icons[0].addEventListener("click",()=>{textMegusta[0].innerHTML="1001 Me gustas"})
            icons[1].addEventListener("click",()=>{textMegusta[0].innerHTML="1000 Me gustas"})

            break;
        case 1:
            icons[4].addEventListener("click",()=>{textMegusta[1].innerHTML="1001 Me gustas"})
            icons[5].addEventListener("click",()=>{textMegusta[1].innerHTML="1000 Me gustas"})
            break;
        case 2:
            icons[8].addEventListener("click",()=>{textMegusta[2].innerHTML="1001 Me gustas"})
            icons[9].addEventListener("click",()=>{textMegusta[2].innerHTML="1000 Me gustas"})
            break;
        case 3:
            icons[12].addEventListener("click",()=>{textMegusta[3].innerHTML="1001 Me gustas"})
            icons[13].addEventListener("click",()=>{textMegusta[3].innerHTML="1000 Me gustas"})
            break;
        case 4:
            icons[16].addEventListener("click",()=>{textMegusta[4].innerHTML="1001 Me gustas"})
            icons[17].addEventListener("click",()=>{textMegusta[4].innerHTML="1000 Me gustas"})
            break;
        case 5:
            icons[20].addEventListener("click",()=>{textMegusta[5].innerHTML="1001 Me gustas"})
            icons[21].addEventListener("click",()=>{textMegusta[5].innerHTML="1000 Me gustas"})
            break;
    
        default:
            break;
    }
})




