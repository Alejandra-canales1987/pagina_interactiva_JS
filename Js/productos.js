// recupero el usuario del local storage

sessionStorage.getItem ("usuarios");

// Simulador carrito de compras objetos y array de productos

async function obtenerproductos() {
    // ir a buscar el JSON con fetch y pasarlo a objeto con parse
    const respuesta = await fetch ("../data/productos.json");
    const datos = await respuesta.json();
    return datos;
}

function obtenerProductosPromise() {
    const respuestaPromise = fetch("../data/productos.json");
    const datosPromise = respuestaPromise.then((res) => res.json());
    return datosPromise;
}

obtenerproductos().then((ListadeCompra) => {
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

    // array del carrito y elementos creados con eventos y DOM, Recupero lo que ya tenía en el carrito desde LS

    let productosAsString = localStorage.getItem("productos");
    let productosDelcarrito = JSON.parse(productosAsString) ?? []


    const boleta = document.createElement ("main");

    boleta.innerHTML = `su total es de = ${total}`
    document.getElementById("article").appendChild (boleta);

    //aplico desestructuración al iterar el array de objetos "ListadeCompra"

    for (const producto of ListadeCompra) {
        const {nombre, precio} = producto
        let li = document.createElement ("li")
        li.innerHTML= `nombre: ${nombre} $ ${precio}`
        document.getElementById ("productos").appendChild (li);
        let botonAgregar = document.createElement ("button")
        botonAgregar.innerHTML = "Agregar al carrito"
        li.appendChild (botonAgregar)
        botonAgregar.onclick = () => {
            total = total + producto.precio

            boleta.innerHTML = `su total es de = ${total}`
            productosDelcarrito.push(producto)
            
            productosDelcarrito.innerHTML
            document.getElementById ("mis-compras")
            
            localStorage.setItem ("productos",JSON.stringify(productosDelcarrito));

            Swal.fire({
                title: 'Ha agregado un producto a su lista de compras',
                text: '¡Yipee!',
                imageUrl: "https://cdn1.iconfinder.com/data/icons/shopping-and-commerce-2-9/134/197-512.png",
                imageWidth: 200,
                imageHeight: 100,
                imageAlt: 'Custom image',
            })
            
        }
        
    }


    localStorage.setItem ("productos",JSON.stringify(productosDelcarrito));

    // duplicando un producto y cambiando sus propiedades con SPREAD ...

    const Spreadproducto4 = {
        ...producto4,
        nombre: "Cuento de tela",
        color: "Multicolor",
        precio: "1200" 
    };

    console.log (Spreadproducto4);


    function calcularCompra (total) {
        total + ListadeCompra.precio;
    }



    console.log (productosDelcarrito);
    calcularCompra (total);
    console.log (total);
});