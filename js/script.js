let senha = '';
do {
	senha = prompt('Digite a senha:');
} while (senha !== 'senha123');

alert('Acesso permitido!');

let produtoEmEstoque = 10;
do {
	console.log('Ainda temos esse produto em estoque');
	console.log(`Quantidade em estoque: ${produtoEmEstoque}`);

	produtoEmEstoque--;
	if (produtoEmEstoque == 4) {
		alert('Apenas 4 produtos restantes!');
	}
} while (produtoEmEstoque > 0);
console.log('Produto esgotado!');
