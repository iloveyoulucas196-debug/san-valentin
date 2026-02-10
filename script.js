// 👤 Nombre
const nombre = "luchito";

// 💌 Mensajes (se mostrarán uno por uno)
const mensajes = [
    `Te amare toda la vida ${nombre} 💖`,
    `Eres mi hogar`,
    `Contigo todo es mejor`,
    `Siempre seras mi persona favorita`,
    `Te amo <3`
];

let indice = 0; // controla qué mensaje toca

function cambiarMensaje() {
    const mensaje = document.getElementById("mensaje");

    // Mostrar mensaje actual
    mensaje.textContent = mensajes[indice];
    indice++;

    // Si ya se mostraron todos los mensajes
    if (indice === mensajes.length) {
        // Ocultar el botón
        document.getElementById("boton").style.display = "none";

        // Mostrar el link a Canva
        document.getElementById("linkCanva").style.display = "inline-block";
    }
}

// 🔒 Desbloqueo por fecha
const hoy = new Date();
const dia = hoy.getDate();
const mes = hoy.getMonth(); // enero = 0, febrero = 1

if (true) {
    document.getElementById("titulo").textContent =
        `Feliz San Valentín mi amor 💘`;

    document.getElementById("mensaje").textContent =
        "Hoy sí ;)";

    document.getElementById("boton").style.display = "inline-block";
}

