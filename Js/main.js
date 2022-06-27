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


// Simulador carrito de compras con bucle WHILE y funciones para calcular valor total

let producto1 = 500; // cuaderno
let producto2 = 300; // lápiz
let producto3 = 250; // goma
let producto4 = 1000; // libro interactivo
let producto5 = 700; // crayones

let user = prompt ("Ingrese su usuario");

let total = 0;

let carritoCompras = prompt (
    "Bienvenido/a" + user +  " " +  "a nuestra tiendita virtual, por favor seleccione uno de nuestros artículos para agregar a su carrito: \n"
     + "1. Cuaderno = " + producto1 + "\n"
     + "2. Lápiz grafito = " + producto2 + "\n"
     + "3. Goma de borrar = " + producto3 + "\n"
     + "4. Libro interactivo = " + producto4 + "\n"
     + "5. Caja de crayones de colores = " + producto5 + "\n"
     + "Si no desea seguir con la compra, por favor presione ESC"
    
)

function nombreProducto(numeroProducto) {
    switch(parseInt(numeroProducto)) {
        case 1: return "Cuaderno";
        case 2: return "Lapiz Grafito";
        case 3: return "Goma de borrar";
        case 4: return "Libro interactivo";
        case 5: return "Caja de crayones de colores";
        default: return "";
    }
}

function precioProducto(numeroProducto) {
    switch(parseInt(numeroProducto)) {
        case 1: return producto1;
        case 2: return producto2;
        case 3: return producto3;
        case 4: return producto4;
        case 5: return producto5;
        default: return 0;
    }
}

console.log (user + "ha agregado " + nombreProducto(carritoCompras) + " al carrito de compras");
total = total + precioProducto(carritoCompras);

while (carritoCompras != "" && carritoCompras != "ESC")  {
    carritoCompras = prompt ("Porfavor ingrese otro producto al carrito", "");
    total = total + precioProducto(carritoCompras);
    console.log (user + "ha agregado " + nombreProducto(carritoCompras) + " al carrito de compras");
}

alert("Su total es de " + total);
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

//funciones varias

function sumar (numero1, numero2) {
    return numero1 + numero2;
}

let resultado = sumar (7,3);
console.log (resultado);

function generarSaludo (nombreIngresado) {
    return ("Hola " + nombreIngresado + " que bueno verte, por acá :3");
}

function IVA (numero1, numero2) {
    return numero1 * (numero2/100);
}

console.log (IVA (5000, 19));
console.log(generarSaludo("Juan"));




