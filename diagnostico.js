function evaluar() {
    let total = 0;
    for (let i = 1; i <= 5; i++) {
        const seleccion = document.querySelector(`input[name="q${i}"]:checked`);
        if (!seleccion) {
            alert(`Por favor responde la pregunta ${i}.`);
            return;
        }
        total += parseInt(seleccion.value);
    }

    let mensaje = "";
    if (total === 5) mensaje = "🧠 ¡Excelente! Eres todo un experto en cómics.";
    else if (total >= 3) mensaje = "👍 ¡Bien hecho! Tienes buenos conocimientos.";
    else mensaje = "📚 Parece que estás empezando. ¡Te invitamos a explorar nuestro catálogo!";

    document.getElementById("resultado").textContent = `Puntaje: ${total}/5 - ${mensaje}`;
    document.getElementById("btnPDF").style.display = "inline-block";
}

function mostrarPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    doc.setFont("helvetica", "bold");
    doc.setFontSize(16);
    doc.text("🦸 Resultados del Cuestionario - Universo Geek", 10, 20);
    doc.setDrawColor(0);
    doc.line(10, 22, 200, 22);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);
    const resultado = document.getElementById("resultado").textContent;
    doc.text(resultado, 10, 35);

    doc.save("resultado_cuestionario.pdf");
}
