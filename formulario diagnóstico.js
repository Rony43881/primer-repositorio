const respuestasCorrectas = ["PlayStation 2", "Super Mario 64", "Epic Games"];
let puntuaciones = [];

function evaluar() {
  const form = document.forms['quizForm'];
  puntuaciones = [];
  let total = 0;

  for (let i = 1; i <= 3; i++) {
    const respuesta = form[`q${i}`].value;
    const correcta = respuestasCorrectas[i - 1];
    if (respuesta === correcta) {
      puntuaciones.push(1);
      total++;
    } else {
      puntuaciones.push(0);
    }
  }

  document.getElementById('resultado').innerText = `Obtuviste ${total} de 3 puntos.`;
  mostrarGrafico();
}

function mostrarGrafico() {
  const ctx = document.getElementById('graficoResultados').getContext('2d');
  if (window.myChart) {
    window.myChart.destroy();
  }
  window.myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Pregunta 1', 'Pregunta 2', 'Pregunta 3'],
      datasets: [{
        label: 'Puntos obtenidos',
        data: puntuaciones,
        backgroundColor: ['green', 'green', 'green']
      }]
    },
    options: {
      scales: {
        y: { beginAtZero: true, max: 1 }
      }
    }
  });
}

function generarPDF() {
  const { jsPDF } = window.jspdf;
  const pdf = new jsPDF();

  pdf.setFontSize(18);
  pdf.text("Resultados del Diagnóstico de Videojuegos", 15, 20);

  for (let i = 0; i < puntuaciones.length; i++) {
    pdf.setFontSize(12);
    pdf.text(`Pregunta ${i + 1}: ${puntuaciones[i] === 1 ? 'Correcta' : 'Incorrecta'}`, 15, 40 + i * 10);
  }

  pdf.text(`Puntaje total: ${puntuaciones.reduce((a, b) => a + b, 0)} de 3`, 15, 80);

  pdf.save("diagnostico_videojuegos.pdf");
}
