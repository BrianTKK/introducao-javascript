let dataAtual = new Date();
console.log(dataAtual);

// data do mes
let dataMes = dataAtual.getDate();
if (dataMes < 10) {
	dataMes = '0' + dataMes;
}
console.log(dataMes);

// dia da semana
let dataDia = dataAtual.getDay();
console.log(dataDia);

// colocando o dia da semana por extenso
switch (dataDia) {
	case 0:
		console.log('Domingo');
		break;

	case 1:
		console.log('Segunda-feira');
		break;

	case 2:
		console.log('Terça-feira');
		break;

	case 3:
		console.log('Quarta-feira');
		break;

	case 4:
		console.log('Quinta-feira');
		break;

	case 5:
		console.log('Sexta-feira');
		break;

	default:
		console.log('Sábado');
}

// mes
let mesAtual = dataAtual.getMonth() + 1; // Janeiro é 0
if (mesAtual < 10) {
	mesAtual = '0' + mesAtual;
}
console.log(mesAtual);

// pegando o ano
anoAtual = dataAtual.getFullYear();
console.log(anoAtual);

// pegando a hora
let horaAtual = dataAtual.getHours();
horaAtual = horaAtual < 10 ? '0' + horaAtual : horaAtual;
console.log(horaAtual);

// pegando minutos
let minutoAtual = dataAtual.getMinutes();
minutoAtual = minutoAtual < 10 ? '0' + minutoAtual : minutoAtual;
console.log(minutoAtual);

// pegando segundos
let segundoAtual = dataAtual.getSeconds();
segundoAtual = segundoAtual < 10 ? '0' + segundoAtual : segundoAtual;
console.log(segundoAtual);

// montando a data
console.log(
	`Data atual: ${dataMes}/${mesAtual}/${anoAtual} ${horaAtual}:${minutoAtual}:${segundoAtual}`
);
