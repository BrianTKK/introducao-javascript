const precoProduto = 150;
const frete = 30;
let valorFinal = 0;

if (precoProduto < 150) {
	valorFinal = precoProduto + frete;
} else {
	valorFinal = precoProduto;
}

console.log(`O valor total do produto é R$ ${valorFinal.toFixed(2)}`);

let metodoPagamento = 'Pix';
if (metodoPagamento === 'Cartão de Crédito') {
    console.log('Você pode parcelar em até 12x');
}else if (metodoPagamento === 'Boleto') {
    console.log('Você terá 5% de desconto no boleto');
}else if (metodoPagamento === 'Pix') {
    console.log('Você terá 10% de desconto no Pix');
}else {
    console.log('Outro meio de pagamento');
}

let estoque = 5;
let statusEstoque = estoque > 0 ? 'Produto disponível' : 'Produto esgotado';
console.log(statusEstoque);