const usuario = prompt('Digite seu nome: ');
const senha = prompt('Digite sua senha: ');

if (usuario === 'admin' && senha === '1234') {
	console.log('Login efetuado com sucesso');

	const numeroProduto = Math.floor(Math.random() * 4) + 1;
	let nomeProduto;

	switch (numeroProduto) {
		case 1:
			nomeProduto = 'Notebook';
			break;
		case 2:
			nomeProduto = 'Tablet';
			break;
		case 3:
			nomeProduto = 'Celular';
			break;
		case 4:
			nomeProduto = 'Videogame';
			break;
		default:
			console.log('Produto não encontrado');
	}
	console.log(`Produto selecionado: ${nomeProduto}`);

	let precoProduto = Math.ceil(Math.random() * 5000);
	while (precoProduto < 1000) {
		precoProduto = Math.ceil(Math.random() * 5000);
	}
	console.log(`Preço do produto: R$ ${precoProduto}`);

	let precoFrete = 0;
	if (precoProduto < 1100) {
		precoFrete = 35;
	}

	const percentualDesconto = Math.floor(Math.random() * 10) + 1;

	const desconto = (precoProduto * percentualDesconto) / 100;

	let precoFinal = precoProduto - desconto + precoFrete;

	console.log(`Desconto: R$ ${desconto.toFixed(2)} (${percentualDesconto}%)`);
	console.log(`Frete: R$ ${precoFrete}`);
	console.log(`Preço final: R$ ${precoFinal.toFixed(2)}`);
	console.log('Obrigado por comprar conosco!');
} else {
	console.log('Usuário ou senha inválidos');
}
