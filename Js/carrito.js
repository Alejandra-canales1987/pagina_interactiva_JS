//accedo al array de productos del cliente desde el LS

let productosAsString = localStorage.getItem ("productos");
let productosDelcarrito = JSON.parse(productosAsString);

for (const producto of productosDelcarrito) {
    let li = document.createElement ("li")
    li.innerHTML= `nombre: ${producto.nombre} $ ${producto.precio}`
    document.getElementById ("productos").appendChild (li);
}
