import http from "http";

// Create a local server to receive data from
const server = http.createServer((req, res) => {
  res.write('Hola mundo');
  res.end();
  
  
});

server.listen(8000);

console.log("Escuchando en el puerto 8080");