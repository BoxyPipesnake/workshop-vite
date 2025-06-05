import './style.css';

const numeroSecreto = Math.floor(Math.random() * 100) + 1;
const inputNumero = document.getElementById('numero');
const botonAdivinar = document.getElementById('adivinar');
const mensaje = document.getElementById('mensaje');
let intentos = 0;
const MAXIMO_INTENTOS = 10;

botonAdivinar.addEventListener('click', () => {
    // Verificar si se superó el límite de intentos
    if (intentos >= MAXIMO_INTENTOS) {
        mensaje.textContent = `¡Perdiste! El número era ${numeroSecreto}. La página se reiniciará...`;
        setTimeout(() => location.reload(), 3000);
        return;
    }

    const numeroJugador = parseInt(inputNumero.value);
    intentos++;

    if (isNaN(numeroJugador) || numeroJugador < 1 || numeroJugador > 100) {
        mensaje.textContent = 'Por favor, ingresa un número válido entre 1 y 100.';
        intentos--; // No contar este intento inválido
    } else if (numeroJugador === numeroSecreto) {
        mensaje.textContent = `¡Felicidades! ¡Adivinaste el número en ${intentos} intentos!`;
        setTimeout(() => location.reload(), 3000);
    } else if (numeroJugador < numeroSecreto) {
        mensaje.textContent = `El número es más alto. (Intento ${intentos}/${MAXIMO_INTENTOS})`;
    } else {
        mensaje.textContent = `El número es más bajo. (Intento ${intentos}/${MAXIMO_INTENTOS})`;
    }

    // Mostrar mensaje cuando quede 1 último intento
    if (intentos === MAXIMO_INTENTOS - 1) {
        mensaje.textContent += " ¡Último intento!";
    }
});