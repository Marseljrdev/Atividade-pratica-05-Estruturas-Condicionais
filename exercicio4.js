// 4. Numa promoção exclusiva para o Dia da Mulher, uma loja quer dar
// descontos para todos, mas especialmente para mulheres. Faça um
// programa que leia nome, sexo e o valor das compras do cliente e
// calcule o preço com desconto. Sabendo que:

// a. Homens ganham 5% de desconto
// b. Mulheres ganham 13% de desconto

let nome = prompt("Digite seu nome: ");
let sexo = prompt("Digite o seu sexo: [M/F]");
let valorCompra = Number.parseFloat(prompt("Digite o valor da compra: "));

let valorDesconto = 0;


if(sexo === 'm' || sexo === 'M'){

    valorDesconto = valorCompra - ((valorCompra / 100) * 6);

    document.write(`A compra de ${nome} no valor de R$${valorCompra}, com 5% de desconto ficou por R$${valorDesconto.toFixed(2)}`);

}else if( sexo === 'f' || sexo === 'F' ){

    valorDesconto = valorCompra - ((valorCompra / 100) * 13);

    document.write(`A compra de ${nome} no valor de R$${valorCompra},00 com 13% de desconto ficou por R$${valorDesconto.toFixed(2)},00`);

}

