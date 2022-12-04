// 5. Faça um algoritmo que pergunte a distância que um passageiro
// deseja percorrer em Km. Calcule o preço da passagem, cobrando
// R$0.50 por Km para viagens até 200Km e R$0.45 para viagens mais
// longas.

let distanciaKm = parseInt(prompt("Quantos Km voce deseja percorrer? "));
let precoPassagem = 0;

if( distanciaKm <= 200 ){

    precoPassagem = distanciaKm * 0.50;
    
    console.log('O preço da passagem sera de: ' + precoPassagem);


}else if( distanciaKm > 200 ){

    precoPassagem = distanciaKm * 0.45;

    console.log('O preço da passagem sera de: ' + precoPassagem);

}