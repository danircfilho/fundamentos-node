var fs = require('fs');

fs.rename('arquivo.txt', 'novoarquivorenomeado.txt', function (err) {
  if (err) throw err;
  console.log('Arquivo renomeado!');
});