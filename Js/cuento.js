let pagina = 0;
let niño = document.getElementById ("niño");
let niña = document.getElementById ("niña");
let trompo = document.getElementById ("trompo");
let yoyo = document.getElementById ("yoyo");
let dad = document.getElementById ("dad");
let mom = document.getElementById ("mom");
let estante = document.getElementById ("estante");
let cajones = document.getElementById ("cajones");
let cesta = document.getElementById ("cesta");

function rellenarSpans(eleccion) {
    if (eleccion == "niño") {
        for (let span of document.getElementsByClassName("personaje-con-articulo-indef")) {
            span.innerHTML = "un niño"
        } 
        
    } else if (eleccion == "niña") {
        for (let span of document.getElementsByClassName ("personaje-con-articulo-indef")) {
            span.innerHTML = "una niña"
        }
    }
}

function seleccionJuguete(eleccion) {
    if (eleccion == "trompo") {
        for (let span of document.getElementsByClassName("juguete-con-articulo-indef")) {
            span.innerHTML = "un trompo que le encantaba"
        } 
        
    } else if (eleccion == "yoyo") {
        for (let span of document.getElementsByClassName ("juguete-con-articulo-indef")) {
            span.innerHTML = "un yoyo que le gustaba mucho"
        }
    }
}

function Seleccionpadre(eleccion) {
    if (eleccion == "dad") {
        for (let span of document.getElementsByClassName("articulo-padre")) {
            span.innerHTML = "a su papá. Él le dijo: recoge tu cuarto y verás como aparece"
            
        }
        
    } else if (eleccion == "mom") {
        for (let span of document.getElementsByClassName ("articulo-padre")) {
            span.innerHTML = "a su mamá. Ella le dijo: recoge tu cuarto y verás como aparece"
        }
            
        }
    }


    function seleccionMueble(eleccion) {

        if (eleccion == "cesta") {
    
            document.getElementById("articulos-ropa-sucia").innerHTML = "cesta"
    
        } else if (eleccion == "cajones") {
    
            document.getElementById("articulos-ropa-limpia").innerHTML = "cajones"
    
        } else if (eleccion == "estantes") {
    
            document.getElementById("articulos-juguetes").innerHTML = "estantes"
    
        }
    
    }



niño.onclick = () => {
        
    rellenarSpans("niño")
    setTimeout(() => {
        document.getElementById("pag1").classList.add("invisible")
        document.getElementById("pag2").classList.remove("invisible")
    }, 3000);
   
    
};
niña.onclick = () => {
   
    rellenarSpans("niña")
    setTimeout(() => {
        document.getElementById("pag1").classList.add("invisible")
        document.getElementById("pag2").classList.remove("invisible")
    }, 3000);

};

trompo. onclick = () => {

    seleccionJuguete ("trompo")
    setTimeout(() => {
        document.getElementById ("pag2").classList.add ("invisible")
        document.getElementById ("pag3").classList.remove ("invisible")
    }, 3000);
}

yoyo. onclick = () => {
    seleccionJuguete ("yoyo")
    setTimeout (() => {
    document.getElementById ("pag2").classList.add ("invisible")
    document.getElementById ("pag3").classList.remove ("invisible")
}, 3000);

}
dad.onclick = () => {
    Seleccionpadre ("dad")
    setTimeout (() => {
    document.getElementById ("pag3").classList.add ("invisible")
    document.getElementById ("pag4").classList.remove ("invisible")
}, 3000);

}

mom.onclick = () => {
    Seleccionpadre ("mom") 
    setTimeout (() => {
    document.getElementById ("pag3").classList.add ("invisible")
    document.getElementById ("pag4").classList.remove ("invisible")
}, 3000);

}

// variables de los objetos seteadas en false, para ordenarlos

let juguetesOrdenados = false

let ropaSuciaOrdenada = false

let ropaLimpiaOrdenada = false

cesta.onclick = () => {

    console.log("Haz seleccionado la cesta")
    seleccionMueble("cesta")
    ropaSuciaOrdenada = true
    ChequearOrden ();

}

cajones.onclick = () => {

    console.log("Haz seleccionado los cajones")
    seleccionMueble("cajones")
    ropaLimpiaOrdenada = true
    ChequearOrden ();

}

estante.onclick = () => {
    console.log("Haz seleccionado el estante")
    seleccionMueble("estantes")
    juguetesOrdenados= true
    ChequearOrden ();

}


function ChequearOrden () {
    if (juguetesOrdenados && ropaSuciaOrdenada && ropaLimpiaOrdenada) {
    setTimeout (() =>{
            document.getElementById ("pag4").classList.add ("invisible")
            document.getElementById ("pag5").classList.remove ("invisible")
        }, 3000);

    }
}


