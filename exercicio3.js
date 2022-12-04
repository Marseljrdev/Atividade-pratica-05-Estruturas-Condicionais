// 3. Crie um algoritmo que leia o valor inicial da contagem, o valor final e
// o incremento, mostrando em seguida todos os valores no intervalo:
// Ex:
// Digite o primeiro Valor: 3
// Digite o último Valor: 10
// Digite o incremento: 2
// Contagem: 3 5 7 9 Acabou!


let valorPrimeiro = Number.parseInt(prompt("Digite o primeiro valor: "));
let valorUltimo = Number.parseInt(prompt("Digite o ultimo valor: "));
let valorIncremento = Number.parseInt(prompt("Digite o valor do incremento: "));
let contagem = 0;


for(valorPrimeiro; valorPrimeiro <= valorUltimo; valorPrimeiro++){


        contagem += valorIncremento;
    
        console.log(contagem);




}