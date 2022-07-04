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


// Simulador carrito de compras con bucle WHILE, objetos, funciones y array para calcular valor total

let producto1 = {
    nombre: "Cuaderno",
    precio: 500,
    color: "Azul" 
}

let producto2 = {
    nombre: "Lápiz",
    precio: 300,
    color: "Negro"
}

let producto3 = {
    nombre: "Goma de borrar",
    precio: 250,
    color: "blanco"
}

let producto4 = {
    nombre: "Libro interactivo",
    precio: 1000,
    color: "Rojo con estampado"
}

let producto5 = {
    nombre: "Crayones",
    precio: 700,
    color: "Multicolor"
}

const ListadeCompra = [producto1, producto2, producto3, producto4, producto5];


ListadeCompra.push ({nombre: "Libro de colorear", precio: 800, color: "Blanco y negro"});
const Productos = ListadeCompra.filter ((el) => el.precio < 400);
const existe = ListadeCompra.some ((el) => el.nombre == "Libro interactivo"); 

console.log (Productos);
console.log (existe);
console.log (ListadeCompra);


let user = prompt ("Ingrese su usuario");

let total = 0;

let carritoCompras = prompt (
    "Bienvenido/a" + user +  " " +  "a nuestra tiendita virtual, por favor seleccione uno de nuestros artículos para agregar a su carrito: \n"
     + "1. Cuaderno = " + producto1.precio + "\n"
     + "2. Lápiz grafito = " + producto2.precio + "\n"
     + "3. Goma de borrar = " + producto3.precio + "\n"
     + "4. Libro interactivo = " + producto4.precio + "\n"
     + "5. Caja de crayones de colores = " + producto5.precio + "\n"
     + "Si no desea seguir con la compra, por favor presione ESC"
    
);

function TotalProductos(carritoCompras) {
    return ListadeCompra[carritoCompras - 1].precio;
}

function NombreProductos(carritoCompras) {
    return ListadeCompra[carritoCompras - 1].nombre;
}

console.log (user + "ha agregado " + NombreProductos(carritoCompras) + " al carrito de compras");
total = total + TotalProductos (carritoCompras);

while (carritoCompras != "" && carritoCompras != "ESC") {
    carritoCompras = prompt ("Porfavor ingrese otro producto al carrito", "");
    let parseado = parseInt(carritoCompras);
    if (!isNaN(parseado)) {
        // parseado es un numero
        if (parseado >= 6) {
            console.log ("La opción ingresada no existe en la lista de productos");
        } else {
            total = total + TotalProductos(carritoCompras); 
            console.log( user + "agrego", NombreProductos(carritoCompras), "al carrito de compras");
        }
    }
}

const preciosConDescuento = ListadeCompra.map ((el) => {
    return {
        nombre: el.nombre,
        precio: el.precio -1.2,
    }
});

console.log (preciosConDescuento);

alert(total = "su total es de = " + total);
alert ("¡¡Muchas gracias, por comprar con nosotros que tenga buen día!!");

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




