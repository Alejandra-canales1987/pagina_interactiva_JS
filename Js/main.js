
// variables
let inputUsuario = document.getElementById ("ingreso");

let inputContraseña = document.getElementById ("clave");

let inputMail= document.getElementById ("email");

let botonEnviar = document.getElementById('enviar');

let p = document.getElementById('p');



//Funciones para crear nuevos usuarios y guardarlos en el LS

const Usuarios= [];


function Usuario (nombre, contraseña, email) {
    
    this.nombre = nombre;
    this.contraseña= contraseña;
    this.email= email;
    
}

function limpiarCampos (nombre, contraseña, email) {
    nombre.value = "";
    contraseña.value = "";
    email.value= "";
}

function CrearUsuario (nombre, contraseña, email) {
    nombre= nombre.value;
    contraseña=contraseña.value;
    email=email.value;
    
    
    const nuevoUsuario = new Usuario (nombre, contraseña, email);
    return nuevoUsuario; 
}


function guardarUsuario (usuario) {
    let usuarioGuardado = Usuarios.push (usuario)
    return usuarioGuardado;
}

function Guardarstorage (elemento) {
    localStorage.setItem ("usuarios", JSON.stringify(elemento));
    
    
}


botonEnviar.addEventListener ("click", (e) => {
    e. preventDefault ()
    
    let nuevoUser = CrearUsuario (inputUsuario, inputContraseña, inputMail);
    guardarUsuario (nuevoUser);
    limpiarCampos (inputUsuario,inputContraseña,inputMail);
    Guardarstorage (Usuarios);
    
    
});

