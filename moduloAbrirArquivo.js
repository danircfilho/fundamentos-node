var fs = require('fs');

fs.open('novoArquivo2.txt', 'w', function (err, file) {
  if (err) throw err;
  console.log('Salvo!');
});

/* Recebe um segundo argumento 'w' (write) que é para criar o arquivo caso não exista */