// 6. Faça um programa que leia a largura e o comprimento de um
// terreno retangular, calculando e mostrando a sua área em m2. O
// programa também deve mostrar a classificação desse terreno, de
// acordo com a lista abaixo:
// Abaixo de 100m2 = TERRENO POPULAR
// Entre 100m2 e 500m2 = TERRENO MASTER
// Acima de 500m2 = TERRENO VIP

let largura = parseInt(prompt("Digite o tamanho da largura do terreno: "));
let comprimento = parseInt(prompt("Digite o tamanho do comprimento do terreno: "));

let areaTerreno = largura * comprimento;

if( areaTerreno <= 100 ){

    document.write(`TERRENO POPULAR - Tera: ${areaTerreno}m2`);

}else if( areaTerreno > 100 && areaTerreno <= 500 ){

    document.write(`TERRENO MASTER - Tera: ${areaTerreno}m2`);

}else if( areaTerreno > 500 ){

    document.write(`TERRENO VIP - Tera: ${areaTerreno}m2`);

}
