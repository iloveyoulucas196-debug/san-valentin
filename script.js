const mensajes = [
    "Te amo siempre",
    "Eres mi hogar",
    "Contigo siempre",
    "Eres el amor de mi vida"
];

function cambiarMensaje() {
    const mensaje = document.getElementById("mensaje");
    const random = Math.floor(Math.random() * mensajes.length);
    mensaje.textContent = mensajes[random];
}
