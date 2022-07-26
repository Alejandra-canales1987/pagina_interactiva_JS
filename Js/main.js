
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
    
    let nuevoUser = CrearUsuario (inputUsuario.value, inputContraseña.value, inputMail.value);
    guardarUsuario (nuevoUser);
    let u = inputUsuario.value;
    limpiarCampos (inputUsuario,inputContraseña,inputMail);
    Guardarstorage (Usuarios);

    
    Swal.fire({
      title: 'Bienvenido' + "" +  u,
      text: "Disfrute su pasar por nuestra página",
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    })
    
    
});

