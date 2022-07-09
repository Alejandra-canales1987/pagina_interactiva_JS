let nombreIngresado = prompt("Ingresa tu nombre");
let apellidoIngresado= prompt ("Ingresa tu apellido");

console.log (nombreIngresado  + "" +  apellidoIngresado);


if (nombreIngresado != "" && (nombreIngresado == "ALE" ||  nombreIngresado == "Alejandra")) {
    console.log ("Bienvenida Ale, que bueno verte");
} else if (nombreIngresado != "" ) {
    console.log ("Bienvenido " + nombreIngresado+  " mucho gusto");
} else {
    alert ("Por favor, ingrese su nombre");
}

// Ciclo con condicionales

let NotaObtenida = parseInt (prompt ("Ingresa tu nota"));

if (NotaObtenida == 1) {
    console.log ("La nota que obtuviste es muy baja");
} else if (NotaObtenida < 3.9) {
    console.log ("La nota obtenida es aún muy baja");
} else if (NotaObtenida < 5) {
    console.log ("La nota que obtuviste es buena, pero podría mejorar");
} else if (NotaObtenida < 7) {
    console.log ("La nota obtenida es bastante buena");
} else if (NotaObtenida < 10) {
    console.log ("La nota que obtuviste, esta casi perfecta");
} else if (NotaObtenida == 10) {
    console.log ("Felicidades obtuviste la nota más alta");

} else if (NotaObtenida >=10) {
    console.log ("Ups ese puntaje excede la nota máxima");


} else {
    console.log ("Porfavor ingresa tu nota");
}

//eventos en JS

let inputsubmit = document.getElementById('ingreso');

let botonEnviar = document.getElementById('enviar');

let p = document.getElementById('p');

botonEnviar.addEventListener('click', () => {

    if (inputsubmit.value === '') {

        p.innerHTML='Por favor ingrese un usuario válido'

    } else {

        p.innerHTML = `Bienvenido/a ${inputsubmit.value}`;

    }

});






