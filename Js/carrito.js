//accedo al array de productos del cliente desde el LS
let productosAsString = localStorage.getItem ("productos");
let productosDelcarrito = JSON.parse(productosAsString);
let total = 0;

const boleta = document.createElement ("main");


//aplico desestructurar al iterar el array "productosDelcarrito" que recupere del LS

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

        Swal.fire({
            title: 'Oh no u_u',
            text: 'Ha eliminado este producto de su carrito de compras',
            imageUrl: 'https://media.istockphoto.com/vectors/basket-exclude-icon-vector-id480113583?b=1&k=20&m=480113583&s=170667a&w=0&h=vUMyHQrsIUw6wLcTamemRaQoCP2IEZI0rwwjxXXU-V0=',
            imageWidth: 200,
            imageHeight: 100,
            imageAlt: 'Custom image',
          })
    }
}

// operador lógico AND &&

productosDelcarrito.length === 0 && alert("¡El carrito esta vacío!");

document.getElementById("article").appendChild (boleta);
boleta.innerHTML = `su total es de = ${total}`