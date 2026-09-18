

const nombreUsuario = prompt("Ingresa tu nombre:");
const anioNacimientoTexto = prompt("Ingresa tu año de nacimiento (ej. 1995):");
const montoIngresadoTexto = prompt("Ingresa un monto en dinero:");


const anioNacimiento = parseInt(anioNacimientoTexto);
const montoIngresado = parseFloat(montoIngresadoTexto);


const ANIO_ACTUAL = 2026;
let edadCalculada = ANIO_ACTUAL - anioNacimiento; // Resta
let dobleDelMonto = montoIngresado * 2;            // Multiplicación

const mensajeEdad = "Hola " + nombreUsuario + ", tienes " + edadCalculada + " años.";
const mensajeMonto = "El doble de tu monto ingresado es " + dobleDelMonto + " pesos.";


alert(mensajeEdad);
alert(mensajeMonto);

console.log("--- Resumen ---");
console.log("Nombre:", nombreUsuario);
console.log("Edad:", edadCalculada);
console.log("Doble del monto:", dobleDelMonto);