// recupero el usuario del local storage 

sessionStorage.getItem ("usuarios");



// Simulador carrito de compras objetos y array de productos

let producto1 = {
    nombre: "Cuaderno",
    precio: 500,
    color: "Azul",
    imagen: "../img/notebook.png",
    cantidad: 0
}

let producto2 = {
    nombre: "Lápiz",
    precio: 300,
    color: "Negro",
    imagen: "../img/pencil.png",
    cantidad: 0,
}

let producto3 = {
    nombre: "Goma de borrar",
    precio: 250,
    color: "blanco",
    imagen: "../eraser.png",
    cantidad: 0
}

let producto4 = {
    nombre: "Libro interactivo",
    precio: 1000,
    color: "Rojo con estampado",
    imagen: "../librointeractivo.jpg",
    cantidad: 0
}

let producto5 = {
    nombre: "Crayones",
    precio: 700,
    color: "Multicolor",
    imagen: "../crayola.jfif",
    cantidad: 0
}


const ListadeCompra = [producto1, producto2, producto3, producto4, producto5];


ListadeCompra.push ({nombre: "Libro de colorear", precio: 800, color: "Blanco y negro"});
const Productos = ListadeCompra.filter ((el) => el.precio < 400);
const existe = ListadeCompra.some ((el) => el.nombre == "Libro interactivo"); 

console.log (Productos);
console.log (existe);
console.log (ListadeCompra);


let total = 0;

const preciosConDescuento = ListadeCompra.map ((el) => {
    return {
        nombre: el.nombre,
        precio: el.precio -1.2,
    }
});

console.log (preciosConDescuento);

// array del carrito y elementos creados con eventos y DOM

const productosDelcarrito = [];


const boleta = document.createElement ("main");

boleta.innerHTML = `su total es de = ${total}`
document.getElementById("article").appendChild (boleta);

for (const producto of ListadeCompra) {
    let li = document.createElement ("li")
    li.innerHTML= `nombre: ${producto.nombre} $ ${producto.precio}`
    document.getElementById ("productos").appendChild (li);
    let botonAgregar = document.createElement ("button")
    let botonQuitar = document.createElement ("button")
    botonAgregar.innerHTML = "Agregar al carrito"
    botonQuitar.innerHTML= "Quitar del carrito"
    li.appendChild (botonAgregar)
    li.appendChild (botonQuitar)
    botonAgregar.onclick = () => {
        total = total + producto.precio
        boleta.innerHTML = `su total es de = ${total}`
        productosDelcarrito.push(producto)
        
        productosDelcarrito.innerHTML
        document.getElementById ("mis-compras")
        
        botonQuitar.onclick = () =>{
            total = total - producto.precio
            productosDelcarrito.pop (producto)
        }

        localStorage.setItem ("productos",JSON.stringify(productosDelcarrito));
        
    }
    
    
    
}


localStorage.setItem ("productos",JSON.stringify(productosDelcarrito));


function calcularCompra (total) {
    total + ListadeCompra.precio;
}



console.log (productosDelcarrito);
calcularCompra (total);
console.log (total);