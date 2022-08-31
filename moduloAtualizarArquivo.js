/* Atualiza após a última palavra - appendFile */
var fs = require('fs');

fs.appendFile('novoArquivo4.txt', ' Novo texto atualizado após a flecha....', function (err) {
  if (err) throw err;
  console.log('Atualizado!');
});

/* Atualiza sobrescrevendo o texto existe - writeFile */
var fs = require('fs');

fs.writeFile('novoArquivo5.txt', 'Este é o novo texto', function (err) {
  if (err) throw err;
  console.log('Reescrito!');
});