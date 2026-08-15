/* =========================================================
   DATOS DE LOS JUGADORES
========================================================= */

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


/* =========================================================
   MODAL DE JUGADORES
========================================================= */

function abrirJugador(id) {

    const jugador = jugadores[id];

    if (!jugador) {
        return;
    }

    const modal = document.getElementById("jugadorModal");

    const imagen = document.getElementById("jugadorImagen");
    const posicion = document.getElementById("jugadorPosicion");
    const nombre = document.getElementById("jugadorNombre");
    const descripcion = document.getElementById("jugadorDescripcion");
    const instagram = document.getElementById("jugadorInstagram");

    imagen.src = jugador.foto;
    imagen.alt = jugador.nombre;

    posicion.textContent = jugador.posicion;
    nombre.textContent = jugador.nombre;
    descripcion.textContent = jugador.descripcion;

    if (jugador.instagram) {

        instagram.href = jugador.instagram;
        instagram.style.display = "inline-block";

    } else {

        instagram.removeAttribute("href");
        instagram.style.display = "none";

    }

    modal.classList.add("activo");

    document.body.style.overflow = "hidden";
}


function cerrarJugador() {

    const modal = document.getElementById("jugadorModal");

    modal.classList.remove("activo");

    document.body.style.overflow = "";

}


/* Cerrar modal haciendo clic fuera */

document.addEventListener("click", function(event) {

    const modal = document.getElementById("jugadorModal");

    if (
        event.target === modal
    ) {
        cerrarJugador();
    }

});


/* Cerrar modal con ESC */

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {
        cerrarJugador();
    }

});


/* =========================================================
   FOTOS DE LAS TARJETAS
========================================================= */

document.addEventListener("DOMContentLoaded", function() {

    const tarjetas = document.querySelectorAll(".player-card");

    tarjetas.forEach(function(tarjeta) {

        const id = tarjeta.dataset.player;

        const jugador = jugadores[id];

        if (!jugador) {
            return;
        }

        const foto = tarjeta.querySelector(".player-photo");

        if (foto) {

            foto.src = jugador.foto;
            foto.alt = jugador.nombre;

        }

    });

});


/* =========================================================
   BARRA DE PROGRESO DEL SORTEO
========================================================= */

function actualizarSorteo() {

    const actual = 6807;
    const meta = 10000;

    const porcentaje = (actual / meta) * 100;
    const faltante = meta - actual;

    const numeroActual = document.getElementById("numeroActual");
    const porcentajeElemento = document.getElementById("porcentaje");
    const cantidadFaltante = document.getElementById("cantidadFaltante");
    const barra = document.getElementById("barraProgreso");

    if (numeroActual) {
        numeroActual.textContent = actual.toLocaleString("es-MX");
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
        barra.style.width = porcentaje + "%";
    }

}

actualizarSorteo();


/* =========================================================
   CONTADOR DEL SORTEO
========================================================= */

function actualizarContador() {

    const fechaFinal = new Date(
        "2026-09-14T23:59:59"
    ).getTime();

    const ahora = new Date().getTime();

    const diferencia = fechaFinal - ahora;

    const dias = document.getElementById("dias");
    const horas = document.getElementById("horas");
    const minutos = document.getElementById("minutos");
    const segundos = document.getElementById("segundos");

    if (diferencia <= 0) {

        if (dias) dias.textContent = "00";
        if (horas) horas.textContent = "00";
        if (minutos) minutos.textContent = "00";
        if (segundos) segundos.textContent = "00";

        return;
    }

    const diasNumero =
        Math.floor(diferencia / (1000 * 60 * 60 * 24));

    const horasNumero =
        Math.floor(
            (diferencia % (1000 * 60 * 60 * 24)) /
            (1000 * 60 * 60)
        );

    const minutosNumero =
        Math.floor(
            (diferencia % (1000 * 60 * 60)) /
            (1000 * 60)
        );

    const segundosNumero =
        Math.floor(
            (diferencia % (1000 * 60)) /
            1000
        );

    if (dias) {
        dias.textContent =
            String(diasNumero).padStart(2, "0");
    }

    if (horas) {
        horas.textContent =
            String(horasNumero).padStart(2, "0");
    }

    if (minutos) {
        minutos.textContent =
            String(minutosNumero).padStart(2, "0");
    }

    if (segundos) {
        segundos.textContent =
            String(segundosNumero).padStart(2, "0");
    }

}

actualizarContador();

setInterval(actualizarContador, 1000);


/* =========================================================
   ACCESO PRIVADO
========================================================= */

const CONTRASENA =
    "q4029o3402934¿01934¿20194¿31293¿211923'92130'192'30";


function verificarAcceso(event) {

    event.preventDefault();

    const input =
        document.getElementById("contrasenaAcceso");

    const mensaje =
        document.getElementById("mensajeAcceso");

    if (!input || !mensaje) {
        return;
    }

    const contraseñaIntroducida =
        input.value;

    if (contraseñaIntroducida === CONTRASENA) {

        mensaje.textContent =
            "ACCESO COMPLETADO";

        mensaje.style.color = "#ff4fa3";

        input.value = "";

    } else {

        mensaje.textContent =
            "ACCESO DENEGADO";

        mensaje.style.color = "#ff4fa3";

        input.value = "";

    }

}