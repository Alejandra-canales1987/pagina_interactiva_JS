const FormUsuarios= [];

let miFormulario = document.getElementById ("formulario");

miFormulario.addEventListener ("submit", validarFormulario);

function validarFormulario (e) {
    
    e.preventDefault ();
    let formulario= e.target
    
}

// variables
let nombreUsuario = document.getElementById ("validationCustom01");

let apellidoUsuario = document.getElementById ("validationCustom02");

let UserMail= document.getElementById ("inputGroupPrepend");

let botonMensaje= document.getElementById ("mensaje")

let botonEnviar = document.getElementById("btn-enviar");

let p = document.getElementById('p');



//Funciones para crear nuevos usuarios y guardarlos en el LS

const Usuarios= [];


function Usuario (nombre, apellido, email, mensaje) {
    
    this.nombre = nombre;
    this.apellido =apellido;
    this.email= email;
    this.mensaje=mensaje;
    
}

function limpiarCampos (nombre, apellido, email, mensaje) {
    nombre.value = "";
    apellido.value = "";
    email.value= "";
    mensaje.value="";
}

function CrearUsuario (nombre, apellido, email, mensaje) {
    const nuevoUsuario = new Usuario (nombre, apellido, email, mensaje);
    return nuevoUsuario; 
}


function guardarUsuario (usuario) {
    FormUsuarios.push (usuario)
}

function Guardarstorage (elemento) {
    localStorage.setItem ("usuarios", JSON.stringify(elemento));
}


botonEnviar.addEventListener ("click", (e) => {
    e. preventDefault ()
    let nuevoUser = CrearUsuario (nombreUsuario.value, apellidoUsuario.value, UserMail.value, botonMensaje.value);
    guardarUsuario (nuevoUser);
    Guardarstorage (FormUsuarios);
    
    
});
