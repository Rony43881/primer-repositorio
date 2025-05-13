document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('formPregunta').addEventListener('submit', function(e) {
        e.preventDefault();
        const nombre = document.getElementById('nombreUsuario').value.trim();
        const pregunta = document.getElementById('pregunta').value.trim();

        if (nombre && pregunta) {
            const contenedor = document.createElement('div');
            contenedor.className = 'pregunta-publicada';
            contenedor.innerHTML = `<strong>${nombre} pregunta:</strong><p>${pregunta}</p>`;
            document.getElementById('listaPreguntas').prepend(contenedor);
            this.reset();
        } else {
            alert("Por favor, completa todos los campos.");
        }
    });
});