var fs = require('fs');

fs.appendFile('novoArquivo.txt', 'Aqui se insere o texto do arquivo!', function (err) {
  if (err) throw err;
  console.log('Salvo!');
});