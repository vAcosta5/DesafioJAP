// Code Challenge
// IMPORTANTE: En todo momento deberás estar compartiendo la pantalla y tener el micrófono abierto.


// Para este Code Challenge te desafíamos a:

// 1) Investigar cómo realizar una solicitud HTTP utilizando la función fetch(), tal como venimos haciendo en el proyecto, pero esta vez usando  el método POST.

// 2) Realiza una página web en donde deberás crear un formulario de registro con los campos "Nombre", "Apellido" y "Fecha de Nacimiento".

// 3) Implementa el código JS para que la información del formulario pueda enviarse en formato JSON al siguiente endpoint => https://jsonplaceholder.typicode.com/users.

// 4) Si el código está correcto, el servidor responderá al fetch con la información que le has enviado. Saca captura de pantalla que prueba que estás recibiendo la respuesta del servidor.

// 5) Publica en el foro de entrega de la actividad la captura de pantalla y el link del proyecto.

// Notas:

// jsonplaceholder.typicode.com es un fake API que no guarda realmente la información.

const btnEnviar = document.getElementById("btnEnviar")
const divMostrar = document.getElementById("aMostrar")

btnEnviar.addEventListener('click', function(event){
    event.preventDefault();
    const nombreDado = document.getElementById("txtNombre")
    const apellidoDado = document.getElementById("txtApellido")
    const fechaNacimientoDada = document.getElementById("txtFechaNacimiento")

    const dataDada = {
        nombre: nombreDado.value,
        apellido: apellidoDado.value,
        fechanacimiento: fechaNacimientoDada.value,
    }

    fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dataDada),
        })
        .then((response) => response.json())
        .then((data) => {
            divMostrar.innerHTML= JSON.stringify(data)
        })
        .catch((error) => {
            divMostrar.innerHTML= error.message
        });
})
