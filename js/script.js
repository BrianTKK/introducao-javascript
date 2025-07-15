// pedir ao usuario a digitação do numero 7
let numero = Number(prompt('Digite o numero 7'));

while (numero !== 7) {
	numero = Number(
		prompt('Número inválido. Por favor, digite o número 7 novamente:')
	);
}

console.log(`O número digitado foi: ${numero}`);
