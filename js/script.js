const regiao = 'sul';
let valorFrete = 0;

switch (regiao) {
    case 'sudeste':
        valorFrete = 35.00;
        break;
    case 'nordeste':
        valorFrete = 45.00;
        break;
    case 'sul':
        valorFrete = 30.00;
        break;
    default:
        valorFrete = 50.00;
}

console.log(`Região: ${regiao}`);
console.log(`Valor do frete: R$ ${valorFrete.toFixed(2)}`);

