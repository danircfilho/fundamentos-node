var fs = require('fs');

fs.writeFile('novoArquivo3.txt', 'Todo o texto aqui inserido substituirá o existente no arquivo, se houver. Caso contrário permanece este escrito', function (err) {
  if (err) throw err;
  console.log('Salvo!');
});

/* Este método substitui o arquivo e o conteúdo especificados, se existir. Se o arquivo não existir, um novo arquivo, contendo o conteúdo especificado será criado. */