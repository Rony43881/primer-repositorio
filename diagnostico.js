function evaluar() {
    let total = 0;
    for (let i = 1; i <= 5; i++) {
        const pregunta = document.querySelector(`input[name="q${i}"]:checked`);
        if (pregunta) total += parseInt(pregunta.value);
        else {
            alert(`Por favor responde la pregunta ${i}`);
            return;
        }
    }

    let mensaje = "";
    if (total === 5) mensaje = "¡Excelente! Eres todo un experto en cómics.";
    else if (total >= 3) mensaje = "¡Bien hecho! Tienes buenos conocimientos.";
    else mensaje = "Parece que estás empezando. ¡Te invitamos a explorar nuestro catálogo!";

    document.getElementById("resultado").textContent = `Puntaje: ${total}/5 - ${mensaje}`;
    document.getElementById("btnPDF").style.display = "inline";
}

function generarPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    const texto = document.getElementById("resultado").textContent;
    doc.text("Resultados del Cuestionario - Universo Geek", 10, 10);
    doc.text(texto, 10, 20);
    doc.save("diagnostico_comics.pdf");
}
