var fs = require('fs');

fs.unlink('novoArquivo5copy.txt', function (err) {
  if (err) throw err;
  console.log('Arquivo deletado!');
});