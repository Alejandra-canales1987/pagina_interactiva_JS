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

} else {
    console.log ("Porfavor ingresa tu nota");
}

// Simulador carrito de compras con bucle WHILE

let user = prompt ("Ingrese su usuario");

alert (" Bienvenido/a  " + user + " a nuestra librería virtual" );

let carritoCompras = prompt ("Ingrese un producto al carrito, por favor!! para finalizar presione ESC");
console.log (user + " ha ingresado al carrito de compras ");
console.log (carritoCompras);

while (carritoCompras != "" && carritoCompras != "ESC") {

    carritoCompras = prompt ("Porfavor ingrese otro producto al carrito", "");
    console.log (user + " ha ingresado al carrito de compras ");
    console.log (carritoCompras);
}

console.log ("¡¡Muchas gracias, por comprar con nosotros que tenga buen día!!");
alert ("¡¡Muchas gracias, por comprar con nosotros que tenga buen día!!");

// Simulador de sumas con bucle FOR

let NumeroIngresado = parseInt (prompt ("Por favor " + nombreIngresado + " ingrese un número"));

if (NumeroIngresado == NaN) {

console.log ("El valor ingresado no es un número");
    } else {
        for (let i =1; i<=10; i++){
            console.log (NumeroIngresado + i);
        }
    }
