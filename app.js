function sumar(a, b) {
  return a - b; // 🐛 Bug intencional: cambiamos + por -
}

function saludo() {
  return "Hola Mundo";
}

module.exports = { sumar, saludo };