var intentos = 0;
var numeroAdivinanza = 7;
var intentosLista = [];

function verificarNumero() {
  var numeroUsuario = document.getElementById('numeroInput').value;
  var resultadoDiv = document.getElementById('output');
  resultadoDiv.innerHTML = '';

  // Verificar si es un número
  if (isNaN(numeroUsuario) || numeroUsuario === "") {
    resultadoDiv.innerHTML = 'Por favor, ingresa un número válido.';
    return;
  }

  // Convertir el valor a un número entero
  numeroUsuario = parseInt(numeroUsuario, 10);

  // Incrementar el contador de intentos
  intentos++;

  // Verificar si el número ingresado está en el rango del 1 al 100
  if (numeroUsuario >= 1 && numeroUsuario <= 100) {
    // Guardar el intento actual en la lista
    intentosLista.push(numeroUsuario);

    // Verificar si el número ingresado es correcto
    if (numeroUsuario === numeroAdivinanza) {
      resultadoDiv.innerHTML = '¡Felicidades! ¡Adivinaste el número en ' + intentos + ' intentos!';
      mostrarIntentos();
    } else {
      resultadoDiv.innerHTML = 'Número incorrecto. Intenta de nuevo.';
    }
  } else {
    resultadoDiv.innerHTML = 'Número incorrecto. Por favor, intenta con un número del 1 al 100.';
  }
}

function mostrarIntentos() {
  var resultadoDiv = document.getElementById('output');
  resultadoDiv.innerHTML += '<p>Tus intentos fueron: ' + intentosLista.join(', ') + '</p>';
}
