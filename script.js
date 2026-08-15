/* =========================
   JUGADORES
========================= */

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

    alonso: {
        nombre: "ALONSO",
        posicion: "JUGADOR",
        descripcion: "Nuevo jugador de Chapala Pigs.",
        foto: "fotos/alonso.jpg",
        instagram: "https://www.instagram.com/alonso3palacios/"
    },

    silver: {
        nombre: "SILVER",
        posicion: "JUGADOR",
        descripcion: "Nuevo jugador de Chapala Pigs.",
        foto: "fotos/silver.jpg",
        instagram: "https://www.instagram.com/sxg_28/"
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
   CARGAR FOTOS
========================= */

function cargarFotos() {

    const tarjetas = document.querySelectorAll(".player-card");

    tarjetas.forEach(function(tarjeta) {

        const id = tarjeta.getAttribute("data-player");
        const jugador = jugadores[id];

        if (!jugador) {
            return;
        }

        const imagen = tarjeta.querySelector(".player-photo");

        if (!imagen) {
            return;
        }

        imagen.src = jugador.foto + "?v=3";
        imagen.alt = jugador.nombre;

    });

}


/* =========================
   ABRIR JUGADOR
========================= */

function abrirJugador(id) {

    const jugador = jugadores[id];

    if (!jugador) {
        return;
    }

    const modal = document.getElementById("jugadorModal");
    const imagen = document.getElementById("jugadorImagen");
    const nombre = document.getElementById("jugadorNombre");
    const posicion = document.getElementById("jugadorPosicion");
    const descripcion = document.getElementById("jugadorDescripcion");
    const instagram = document.getElementById("jugadorInstagram");

    if (
        !modal ||
        !imagen ||
        !nombre ||
        !posicion ||
        !descripcion ||
        !instagram
    ) {
        return;
    }

    imagen.src = jugador.foto + "?v=3";
    imagen.alt = jugador.nombre;

    nombre.textContent = jugador.nombre;
    posicion.textContent = jugador.posicion;
    descripcion.textContent = jugador.descripcion;


    if (jugador.instagram !== "") {

        instagram.href = jugador.instagram;
        instagram.style.display = "inline-block";

    } else {

        instagram.removeAttribute("href");
        instagram.style.display = "none";

    }


    modal.classList.add("activo");

    document.body.style.overflow = "hidden";

}


/* =========================
   CERRAR JUGADOR
========================= */

function cerrarJugador() {

    const modal = document.getElementById("jugadorModal");

    if (!modal) {
        return;
    }

    modal.classList.remove("activo");

    document.body.style.overflow = "";

}


/* =========================
   CLIC FUERA DEL MODAL
========================= */

document.addEventListener("click", function(event) {

    const modal = document.getElementById("jugadorModal");

    if (!modal) {
        return;
    }

    if (event.target === modal) {
        cerrarJugador();
    }

});


/* =========================
   ESC PARA CERRAR
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

    const actual = 6702;
    const objetivo = 10000;

    const porcentaje = (actual / objetivo) * 100;
    const faltante = objetivo - actual;


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

    /*
     * 14 de septiembre de 2026
     * 23:59:59
     * Zona horaria de México (-06:00)
     */

    const fechaObjetivo =
        new Date(
            "2026-09-14T23:59:59-06:00"
        ).getTime();


    const ahora = Date.now();

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


    /* =========================
       TERMINÓ EL CONTADOR
    ========================== */

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
       CALCULAR TIEMPO
    ========================== */

    const totalSegundos =
        Math.floor(diferencia / 1000);


    const dias =
        Math.floor(
            totalSegundos / 86400
        );


    const horas =
        Math.floor(
            (totalSegundos % 86400) / 3600
        );


    const minutos =
        Math.floor(
            (totalSegundos % 3600) / 60
        );


    const segundos =
        totalSegundos % 60;


    /* =========================
       MOSTRAR
    ========================== */

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
   INICIAR PÁGINA
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