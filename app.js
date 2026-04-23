// app.js - Con servidor web incluido

const http = require("http");

function sumar(a, b) {
  return a + b;
}

function saludo() {
  return "Hola Mundo";
}

// Servidor web que escucha peticiones
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });

  if (req.url === "/sumar") {
    res.end(JSON.stringify({ resultado: sumar(2, 3) }));
  } else {
    res.end(JSON.stringify({ mensaje: saludo() }));
  }
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});

module.exports = { sumar, saludo };