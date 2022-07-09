// Simulador carrito de compras con bucle WHILE, objetos, funciones y array para calcular valor total

let producto1 = {
    nombre: "Cuaderno",
    precio: 500,
    color: "Azul",
    imagen: "../img/notebook.png"
}

let producto2 = {
    nombre: "Lápiz",
    precio: 300,
    color: "Negro",
    imagen: "../img/pencil.png"
}

let producto3 = {
    nombre: "Goma de borrar",
    precio: 250,
    color: "blanco",
    imagen: "../eraser.png"
}

let producto4 = {
    nombre: "Libro interactivo",
    precio: 1000,
    color: "Rojo con estampado",
    imagen: "../librointeractivo.jpg"
}

let producto5 = {
    nombre: "Crayones",
    precio: 700,
    color: "Multicolor",
    imagen: "../crayola.jfif"
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

let mensajeCarrito =  "Bienvenido/a" + user +  " " +  "a nuestra tiendita virtual, por favor seleccione uno de nuestros artículos para agregar a su carrito: \n"
+ "1. Cuaderno = " + producto1.precio + "\n"
+ "2. Lápiz grafito = " + producto2.precio + "\n"
+ "3. Goma de borrar = " + producto3.precio + "\n"
+ "4. Libro interactivo = " + producto4.precio + "\n"
+ "5. Caja de crayones de colores = " + producto5.precio + "\n"
+ "Si no desea seguir con la compra, por favor presione ESC";

function TotalProductos(carritoCompras) {
    return ListadeCompra[carritoCompras - 1].precio;
}

function NombreProductos(carritoCompras) {
    return ListadeCompra[carritoCompras - 1].nombre;
}

carritoCompras = prompt(mensajeCarrito);

while (carritoCompras != "" && carritoCompras != "ESC") {
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
    carritoCompras = prompt(mensajeCarrito);
}

const preciosConDescuento = ListadeCompra.map ((el) => {
    return {
        nombre: el.nombre,
        precio: el.precio -1.2,
    }
});

console.log (preciosConDescuento);

alert("su total es de = " + total);
alert ("¡¡Muchas gracias, por comprar con nosotros que tenga buen día!!");


// manipulando el DOM

for (const producto of ListadeCompra) {
    let li = document.createElement ("li")
    li.innerHTML= `nombre: ${producto.nombre} $ ${producto.precio}`
    document.getElementById ("productos").appendChild (li);
}

const boleta = document.createElement ("main");

boleta.innerHTML = `su total es de = ${total}`
document.getElementById("article").appendChild (boleta);

