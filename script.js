// 👤 Nombre
const nombre = "luchito";

// 💌 Mensajes (uno por click)
const mensajes = [
  `Te amaré eternamente 💖`,
    `Eres mi hogar`,
    `Contigo todo es si`,
    `Siempre serás mi persona favorita, te amo💘`

];

let indice = 0;
let primerClick = true;

function cambiarMensaje() {
    const mensaje = document.getElementById("mensaje");

    // 🟣 Primer click: ocultar video y mostrar foto 1
    if (primerClick) {
        document.getElementById("videoIntro").style.display = "none";
        document.body.style.backgroundImage = "url('fondo1.jpg')";
        primerClick = false;
    }

    // Mostrar mensaje actual
    mensaje.textContent = mensajes[indice];
    indice++;

    // 🟣 Al terminar todos los mensajes
    if (indice === mensajes.length) {
        document.getElementById("boton").style.display = "none";
        document.getElementById("linkCanva").style.display = "inline-block";

        // Mostrar foto final
        document.body.style.backgroundImage = "url('fondo2.jpg')";
    }
}

// 🔒 Desbloqueo por fecha
const hoy = new Date();
const dia = hoy.getDate();
const mes = hoy.getMonth(); // enero = 0, febrero = 1

if (true)
{
    document.getElementById("titulo").textContent =
        `Feliz San Valentín mi amor 💘`;

    document.getElementById("mensaje").textContent =
        "Antes de empezar… mirá esto 💖";

    document.getElementById("boton").style.display = "inline-block";
}







