const jugadores = {

    andres: {
        nombre: "ANDRÉS",
        posicion: "CAPITÁN",
        descripcion: "Capitán de Chapala Pigs. Líder dentro y fuera de la cancha.",
        foto: "fotos/andres.jpg",
        instagram: "https://www.instagram.com/andres_zent7890/"
    },

    karla: {
        nombre: "KARLA",
        posicion: "JUGADORA",
        descripcion: "Jugadora de Chapala Pigs.",
        foto: "fotos/karla.jpg",
        instagram: "https://www.instagram.com/karlita_lve/"
    },

    gabriel: {
        nombre: "GABRIEL",
        posicion: "JUGADOR",
        descripcion: "Jugador de Chapala Pigs.",
        foto: "fotos/user.jpg",
        instagram: ""
    },

    damian: {
        nombre: "DAMIÁN",
        posicion: "JUGADOR",
        descripcion: "Jugador de Chapala Pigs.",
        foto: "fotos/user.jpg",
        instagram: ""
    }

};


/* =========================
   CARGAR FOTOS DE TARJETAS
========================= */

function cargarFotos() {

    const tarjetas =
        document.querySelectorAll(".player-card");

    tarjetas.forEach(function(tarjeta) {

        const id =
            tarjeta.getAttribute("data-player");

        const jugador =
            jugadores[id];

        if (!jugador) {
            return;
        }

        const imagen =
            tarjeta.querySelector(".player-photo");

        if (!imagen) {
            return;
        }

        imagen.src =
            jugador.foto;

        imagen.alt =
            jugador.nombre;

    });

}


/* =========================
   ABRIR TARJETA
========================= */

function abrirJugador(id) {

    const jugador =
        jugadores[id];

    if (!jugador) {
        return;
    }


    const modal =
        document.getElementById("jugadorModal");

    const imagen =
        document.getElementById("jugadorImagen");

    const nombre =
        document.getElementById("jugadorNombre");

    const posicion =
        document.getElementById("jugadorPosicion");

    const descripcion =
        document.getElementById("jugadorDescripcion");

    const instagram =
        document.getElementById("jugadorInstagram");


    if (!modal) {
        return;
    }


    /*
       IMPORTANTE:
       La misma foto del objeto jugadores
       se usa tanto en la tarjeta como
       dentro del modal.
    */

    imagen.src =
        jugador.foto;

    imagen.alt =
        jugador.nombre;


    nombre.textContent =
        jugador.nombre;


    posicion.textContent =
        jugador.posicion;


    descripcion.textContent =
        jugador.descripcion;


    if (jugador.instagram !== "") {

        instagram.href =
            jugador.instagram;

        instagram.style.display =
            "inline-block";

    } else {

        instagram.removeAttribute("href");

        instagram.style.display =
            "none";

    }


    modal.classList.add("activo");

    document.body.style.overflow = "hidden";

}


/* =========================
   CERRAR TARJETA
========================= */

function cerrarJugador() {

    const modal =
        document.getElementById("jugadorModal");

    if (!modal) {
        return;
    }

    modal.classList.remove("activo");

    document.body.style.overflow = "";

}


/* =========================
   CERRAR AL HACER CLIC FUERA
========================= */

document.addEventListener("click", function(event) {

    const modal =
        document.getElementById("jugadorModal");

    if (!modal) {
        return;
    }

    if (event.target === modal) {

        cerrarJugador();

    }

});


/* =========================
   CERRAR CON ESC
========================= */

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        cerrarJugador();

    }

});


/* =========================
   PROGRESO DEL SORTEO
========================= */

function actualizarProgreso() {

    const actual = 6474;

    const objetivo = 10000;

    const porcentaje =
        (actual / objetivo) * 100;

    const faltante =
        objetivo - actual;


    const numeroActual =
        document.getElementById("numeroActual");

    const porcentajeElemento =
        document.getElementById("porcentaje");

    const cantidadFaltante =
        document.getElementById("cantidadFaltante");

    const barra =
        document.getElementById("barraProgreso");


    if (numeroActual) {

        numeroActual.textContent =
            actual.toLocaleString("es-MX");

    }


    if (porcentajeElemento) {

        porcentajeElemento.textContent =
            porcentaje.toFixed(2) + "%";

    }


    if (cantidadFaltante) {

        cantidadFaltante.textContent =
            faltante.toLocaleString("es-MX");

    }


    if (barra) {

        barra.style.width =
            porcentaje + "%";

    }

}


/* =========================
   CONTADOR
========================= */

function actualizarContador() {

    const fechaObjetivo =
        new Date("2026-09-14T23:59:59").getTime();

    const ahora =
        new Date().getTime();

    const diferencia =
        fechaObjetivo - ahora;


    const diasElemento =
        document.getElementById("dias");

    const horasElemento =
        document.getElementById("horas");

    const minutosElemento =
        document.getElementById("minutos");

    const segundosElemento =
        document.getElementById("segundos");


    if (diferencia <= 0) {

        if (diasElemento) {
            diasElemento.textContent = "00";
        }

        if (horasElemento) {
            horasElemento.textContent = "00";
        }

        if (minutosElemento) {
            minutosElemento.textContent = "00";
        }

        if (segundosElemento) {
            segundosElemento.textContent = "00";
        }

        return;
    }


    const dias =
        Math.floor(
            diferencia /
            (1000 * 60 * 60 * 24)
        );


    const horas =
        Math.floor(
            (diferencia %
                (1000 * 60 * 60 * 24)) /
            (1000 * 60 * 60)
        );


    const minutos =
        Math.floor(
            (diferencia %
                (1000 * 60 * 60)) /
            (1000 * 60)
        );


    const segundos =
        Math.floor(
            (diferencia %
                (1000 * 60)) /
            1000
        );


    if (diasElemento) {

        diasElemento.textContent =
            String(dias).padStart(2, "0");

    }


    if (horasElemento) {

        horasElemento.textContent =
            String(horas).padStart(2, "0");

    }


    if (minutosElemento) {

        minutosElemento.textContent =
            String(minutos).padStart(2, "0");

    }


    if (segundosElemento) {

        segundosElemento.textContent =
            String(segundos).padStart(2, "0");

    }

}


/* =========================
   INICIAR TODO
========================= */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        cargarFotos();

        actualizarProgreso();

        actualizarContador();


        setInterval(
            actualizarContador,
            1000
        );

    }
);