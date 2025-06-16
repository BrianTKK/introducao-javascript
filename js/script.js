let frase = 'Javascript é uma linguagem de programação incrível!';
console.log(frase);

// retorna o tamanho da sting
console.log(frase.length);

// precorrendo a string
console.log(frase[0]);
console.log(frase[11]);

// letras maiusculas
console.log(frase.toUpperCase());

// letras minusculas
console.log(frase.toLowerCase());

// percorrengo com método
console.log(frase.charAt(40));

// buscar algo a string - inicio 
console.log(frase.indexOf('u'));

// buscar algo a string - pelo fim
console.log(frase.lastIndexOf('u'));

// Verificar se existe
console.log(frase.includes('ling'));

// Juntando strings
console.log(frase.concat(' E é muito usada no front-end!'));

// Substituindo caracteres
console.log(frase.replace('a', '@'));
// Substituindo caracteres
console.log(frase.replaceAll('a', '@'));

// parte do string
console.log(frase.substring(4, 40));
console.log(frase.slice(4, 40));

// separando a String 
console.log(frase.split('a'));
console.log(frase.split(''));
console.log(frase.split(' '));

// retirando espaços do inicio ou final da string
console.log(frase.trim());

// verificando se a string começa com uma cadeia de caracteres
console.log(frase.startsWith('Javascript'));

// verificando se a string termina com uma cadeia de caracteres
console.log(frase.endsWith('incrível!'));