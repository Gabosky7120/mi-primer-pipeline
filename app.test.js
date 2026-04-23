// app.test.js - Con cierre correcto del servidor

const { sumar, saludo } = require("./app");

// Prueba 1: ¿La función suma correctamente?
test("sumar(2, 3) debe retornar 5", () => {
  expect(sumar(2, 3)).toBe(5);
});

// Prueba 2: ¿El saludo es el correcto?
test('saludo() debe retornar "Hola Mundo"', () => {
  expect(saludo()).toBe("Hola Mundo");
});