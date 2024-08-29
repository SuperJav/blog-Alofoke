let inputs = document.querySelectorAll(".input-fomulario")
let form = document.querySelector("form")

form.addEventListener('submit', (e) => {
    e.preventDefault();
})
function enviar() {

    if (validarFormulario()) {
        alert("Formulario enviado exitosamente.")
        enviarDatos()
    }
}
function validarFormulario() {
    let nombre=inputs[0].value;
    let email=inputs[1].value;
    let telefono=inputs[2].value;
    let asunto=inputs[3].value;
    let mensaje=inputs[4].value;

    const regexNombre = /^[a-zA-Z]+$/;
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const regexTelefono = /^\d{10}$/;

    if (nombre.length > 90) {
        alert("El número de caracteres debe ser menor a 90 caracteres.")
        return false
    }

    if (!regexNombre.test(nombre)) {
        alert("El nombre solo puede contener letras.")
        return false
    }

    if (!regexEmail.test(email)) {
        alert("Debes de ingresar un correo.")
        return false
    }

    if (!regexTelefono.test(telefono)) {
        alert("La cantidad de números debe tener una longitud de 10 exactamente y sin guion.")
        return false
    }

    if (asunto.length > 100) {
        alert("El asunto no puede tener más de 100 caracteres.")
        return false
    }

    if (mensaje.length > 300) {
        alert("El mensaje no puede tener más de 300 caracteres.")
        return false
    }

    return true
}
function enviarDatos() {
    const url ="https://us-central1-formsmetaitla.cloudfunctions.net/registrarContacto";
   
    const data={
        nombre:inputs[0].value,
        asunto:inputs[3].value,
        email:inputs[1].value,
        telefono:inputs[2].value,
        mensaje:inputs[4].value,
        nombre_estudiante:"Javielito Ramirez Brioso"
    };
    fetch(url,{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify(data)
    }).then(
        inputs.forEach((element,index)=>{
            element.value=""
        })
    )

}