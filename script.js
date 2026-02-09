document.addEventListener("DOMContentLoaded", function () {

    const yesButton = document.getElementById("yes");
    const noButton = document.getElementById("no");
    const foto = document.getElementById("foto");
    const mensaje = document.getElementById("mensaje");

    let size = 18;
    let fotoIndex = 1;

    const mensajes = [
        "¿segura? 🥺",
        "oh bonito causa 😔",
        "ya amor de verdacita pue 🥹",
        "serio pue amor ",
        "es bromita di 😌"
    ];

    let mensajeIndex = 0;

    noButton.onclick = function () {
        // crecer botón sí
        size += 6;
        yesButton.style.fontSize = size + "px";

        // cambiar mensaje
        mensaje.textContent = mensajes[mensajeIndex];
        if (mensajeIndex < mensajes.length - 1) {
            mensajeIndex++;
        }

        // cambiar foto
        fotoIndex++;
        if (fotoIndex > 4) fotoIndex = 1;
        foto.src = "fotos/foto" + fotoIndex + ".jpeg";
    };

    yesButton.onclick = function () {
        document.body.innerHTML = `
            <div style="
                height:100vh;
                display:flex;
                flex-direction:column;
                justify-content:center;
                align-items:center;
                background:#ffd6e0;
                text-align:center;
            ">
                <h1>Sabía que dirías que sí 🥰💘</h1>
                <h2>Te amo ❤️</h2>
                <img src="fotos/foto_final.jpeg" style="width:220px;border-radius:15px;">
            </div>
        `;
    };

});
