//accedo al array de productos del cliente desde el LS
let productosAsString = localStorage.getItem ("productos");
let productosDelcarrito = JSON.parse(productosAsString);
let total = 0;

const boleta = document.createElement ("main");


//aplico desestrucuturar al iterar el array "productosDelcarrito" que recupere del LS

for (const producto of productosDelcarrito) {
    const {nombre, precio} = producto
    let li = document.createElement ("li")
    li.innerHTML= `nombre: ${nombre} $ ${precio}`
    document.getElementById ("productos").appendChild (li);
    total = total + producto.precio

    let botonQuitar = document.createElement ("button")
    botonQuitar.innerHTML= "Quitar del carrito"
    li.appendChild (botonQuitar)
    botonQuitar.onclick = () => {
        li.remove();
        boleta.innerHTML = `su total es de = ${total}`
        productosDelcarrito.splice(productosDelcarrito.findIndex((p) => {
            return p.nombre == producto.nombre
        }), 1)
        localStorage.setItem("productos", JSON.stringify(productosDelcarrito));
    }
}

// operador lógico AND &&

productosDelcarrito.length === 0 && alert("¡El carrito esta vacío!");

document.getElementById("article").appendChild (boleta);
boleta.innerHTML = `su total es de = ${total}`