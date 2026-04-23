// app.js - Nuestra aplicación ultra simple

// Función que suma dos números
function sumar(a, b) {
  return a + b;
}

// Mensaje de bienvenida
function saludo() {
  return "Hola Mundo";
}

// Exportamos las funciones para que el test las pueda usar
module.exports = { sumar, saludo };