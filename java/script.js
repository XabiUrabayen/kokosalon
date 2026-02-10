document.getElementById("formContacto").addEventListener("submit", function (e) {
    e.preventDefault(); // Evita que el formulario se envíe por defecto

    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const mensaje = document.getElementById("mensaje").value;
    const fecha = document.getElementById("fecha").value;
    const sexo = document.getElementById("sexo").value;
    const formMensaje = document.getElementById("formMensaje");

    // Validación básica
    if (mensaje.length < 10) {
        formMensaje.innerText = "El mensaje debe tener al menos 10 caracteres.";
        formMensaje.classList.add("error");
        formMensaje.classList.remove("exito");
        return;
    }

    // Mostrar mensaje de éxito antes de enviar
    formMensaje.innerText = "Enviando mensaje...";
    formMensaje.classList.remove("error");
    formMensaje.classList.add("exito");

    // Enviar datos al backend
        fetch("/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ nombre, email, fecha, sexo, mensaje })
        })
        .then(response => {
            if (!response.ok) {
                throw new Error("Error al enviar los datos.");
            }
            return response.text();
        })
        .then(data => {
            formMensaje.innerText = data;
        })
        .catch(error => {
            formMensaje.innerText = "Hubo un problema al enviar el mensaje.";
        });
        });
