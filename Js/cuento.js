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
            span.innerHTML = "a su papá" + "\n"
            span.innerHTML += "Él le dijo: recoge tu cuarto y verás como aparece"
            
        }
        
    } else if (eleccion == "mom") {
        for (let span of document.getElementsByClassName ("articulo-padre")) {
            span.innerHTML = " a su mamá" + "\n"
            span.innerHTML += "Ella le dijo: recoge tu cuarto y verás como aparece"
        }
    }
}

function seleccionMueble (eleccion) {
    if (eleccion == "cesta") {
        for (let span of document.getElementsByClassName("articulos-cuarto")) {
            span.innerHTML = "cesta"
        } 
        
    } else if (eleccion == "cajones") {
        for (let span of document.getElementsByClassName ("articulos-cuarto")) {
            span.innerHTML = "cajones"
        } 
    } else if (eleccion == "estantes") {
        for (let span of document.getElementsByClassName ("articulos-cuarto")) {
            span.innerHTML = "estantes"
            span.innerHTML += "Y de repente, cuando recogía un juguete de debajo de la cama, lo vió"
        }
    }
}



niño.onclick = () => {
    
    console.log ("Haz seleccionado al niño")
    
    rellenarSpans("niño")
    document.getElementById("pag1").classList.add("invisible")
    document.getElementById("pag2").classList.remove("invisible")
    
};
niña.onclick = () => {
    console.log ("Haz seleccionado a la niña")
    rellenarSpans ("niña")
    document.getElementById ("pag1").classList.add ("invisible")
    document.getElementById ("pag2").classList.remove ("invisible")
};

trompo. onclick = () => {
    console.log ("Haz seleccionado el trompo")
    seleccionJuguete ("trompo")
    document.getElementById ("pag2").classList.add ("invisible")
    document.getElementById ("pag3").classList.remove ("invisible")
}

yoyo. onclick = () => {
    console.log ("Haz seleccionado el yoyo")
    seleccionJuguete ("yoyo")
    document.getElementById ("pag2").classList.add ("invisible")
    document.getElementById ("pag3").classList.remove ("invisible")
}

dad.onclick = () => {
    console.log ("Haz elegido a papá")
    Seleccionpadre ("dad")
    document.getElementById ("pag3").classList.add ("invisible")
    document.getElementById ("pag4").classList.remove ("invisible")
}

mom.onclick = () => {
    console.log ("Haz elegido a mamá")
    Seleccionpadre ("mom") 
    document.getElementById ("pag3").classList.add ("invisible")
    document.getElementById ("pag4").classList.remove ("invisible")
}

cesta.onclick = () => {
    console.log ("Haz seleccionado la cesta")
    seleccionMueble ("cesta") 
    
}
cajones.onclick = () => {
    console.log ("Haz seleccionado los cajones")
    seleccionMueble ("cajones") 
}

estante.onclick = () => {
    console.log ("Haz seleccionado el estante")
    seleccionMueble ("estante") 
    document.getElementById ("pag4").classList.add ("invisible")
    document.getElementById ("pag5").classList.remove ("invisible")
}

