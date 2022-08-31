var http = require('http');

//criar um objeto servidor:
http.createServer(function (req, res) {  
  res.writeHead(200, {'Content-Type': 'text/html'}); 
  res.write('Hello World!'); //escreve uma resposta para o cliente
  res.end(); //termina a resposta
}).listen(8080); //o objeto servidor escuta na porta 8080

/* Notas */

// Para resposta em HTML incluir o cabeçalho: res.writeHead(200, {'Content-Type': 'text/html'});
