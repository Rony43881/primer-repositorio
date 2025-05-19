function calcularPago() {
  const horas = parseFloat(document.getElementById("hours").value);
  const tipoAuto = document.getElementById("car-type").value;
  const resultado = document.getElementById("resultado");
  if (isNaN(horas) || horas <= 0 || !tipoAuto) {
    resultado.textContent = "Por favor, complete todos los campos correctamente.";
    return;
  }

  let tarifaPorHora;
  switch (tipoAuto) {
    case "chico":
      tarifaPorHora = 20.0;
      break;
    case "camioneta":
      tarifaPorHora = 30.0;
      break;
    case "camion":
      tarifaPorHora = 40.0;
      break;
    default:
      resultado.textContent = "Tipo de auto no válido.";
      return;
  }
  const total = horas * tarifaPorHora;
  resultado.textContent = `Total a pagar: $${total.toFixed(2)} MXN`;
}