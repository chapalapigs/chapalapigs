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
   FOTOS DE JUGADORES
========================= */

function cargarFotos() {

    const tarjetas =
        document.querySelectorAll(".player-card");

    tarjetas.forEach(function(tarjeta) {

        const id =
            tarjeta.getAttribute("data-player");

        const jugador =
            jugadores[id];

        if (!jugador) return;

        const imagen =
            tarjeta.querySelector(".player-photo");

        if (!imagen) return;

        imagen.src = jugador.foto;
        imagen.alt = jugador.nombre;

    });

}


/* =========================
   ABRIR JUGADOR
========================= */

function abrirJugador(id) {

    const jugador =
        jugadores[id];

    if (!jugador) return;

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

    if (!modal) return;


    imagen.src = jugador.foto;
    imagen.alt = jugador.nombre;

    nombre.textContent =
        jugador.nombre;

    posicion.textContent =
        jugador.posicion;

    descripcion.textContent =
        jugador.descripcion;


    if (jugador.instagram) {

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

    document.body.style.overflow =
        "hidden";

}


/* =========================
   CERRAR JUGADOR
========================= */

function cerrarJugador() {

    const modal =
        document.getElementById("jugadorModal");

    if (!modal) return;

    modal.classList.remove("activo");

    document.body.style.overflow = "";

}


/* =========================
   CERRAR AL TOCAR AFUERA
========================= */

document.addEventListener("click", function(event) {

    const modal =
        document.getElementById("jugadorModal");

    if (!modal) return;

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
   DATOS DEL SORTEO
========================= */

function actualizarProgreso() {

    /*
       ACTUALIZACIÓN MANUAL
       --------------------
       Seguidores: 6,571
       Meta: 10,000
       Actualizado: 14 AGO 2026 - 11:58
    */

    const actual =
        6571;

    const objetivo =
        10000;

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
   CONTADOR DE TIEMPO
========================= */

function actualizarContador() {

    /*
       FECHA FINAL:
       14 DE SEPTIEMBRE DE 2026
       23:59:59

       El mes 8 representa septiembre
       porque JavaScript empieza los meses
       desde 0.
    */

    const fechaObjetivo =
        new Date(
            2026,
            8,
            14,
            23,
            59,
            59
        );


    const ahora =
        new Date();


    let diferencia =
        fechaObjetivo.getTime() -
        ahora.getTime();


    const diasElemento =
        document.getElementById("dias");

    const horasElemento =
        document.getElementById("horas");

    const minutosElemento =
        document.getElementById("minutos");

    const segundosElemento =
        document.getElementById("segundos");


    /* =========================
       SI YA TERMINÓ
    ========================= */

    if (diferencia <= 0) {

        if (diasElemento)
            diasElemento.textContent = "00";

        if (horasElemento)
            horasElemento.textContent = "00";

        if (minutosElemento)
            minutosElemento.textContent = "00";

        if (segundosElemento)
            segundosElemento.textContent = "00";

        return;

    }


    /* =========================
       CÁLCULOS
    ========================= */

    const dias =
        Math.floor(
            diferencia /
            (1000 * 60 * 60 * 24)
        );


    diferencia =
        diferencia %
        (1000 * 60 * 60 * 24);


    const horas =
        Math.floor(
            diferencia /
            (1000 * 60 * 60)
        );


    diferencia =
        diferencia %
        (1000 * 60 * 60);


    const minutos =
        Math.floor(
            diferencia /
            (1000 * 60)
        );


    diferencia =
        diferencia %
        (1000 * 60);


    const segundos =
        Math.floor(
            diferencia /
            1000
        );


    /* =========================
       MOSTRAR
    ========================= */

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