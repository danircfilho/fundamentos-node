var http = require('http');
var dt = require('./criarModulo'); /* nesta importação está função atualData() */

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("Data atual: " + dt.atualData());
  res.end();
}).listen(8080);