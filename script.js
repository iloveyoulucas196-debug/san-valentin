const nombre = "Luchito"; 

const mensajes = [
    `Te amaré toda la vida, ${nombre} 💖`,
    `Eres mi lugar seguro`,
    `Contigo todo es mejor`,
    `Eres mi persona favorita`
];

function cambiarMensaje() {
    const mensaje = document.getElementById("mensaje");
    const random = Math.floor(Math.random() * mensajes.length);
    mensaje.textContent = mensajes[random];
}

const hoy = new Date();
const dia = hoy.getDate();
const mes = hoy.getMonth(); // enero = 0, febrero = 1

if (true) {
    document.getElementById("titulo").textContent =
        `Feliz San Valentín mi amor💘`;

    document.getElementById("mensaje").textContent =
        "Hoy sí, este regalo es para tí";

    document.getElementById("boton").style.display = "inline-block";
}
