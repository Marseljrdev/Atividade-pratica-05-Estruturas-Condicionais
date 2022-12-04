// 1. Faça um algoritmo que leia a idade de vários alunos de uma turma.
// O programa vai parar quando for digitada a idade 999. No final,
// mostre quantos alunos existem na turma e qual é a média de idade
// do grupo.



var idadeAlunos = [];
var idade = 0;
var alunos = 0;
var soma = 0;
var mediaIdade = 0;



 while(idade !== 999){

    idade = parseInt(prompt('Digite sua idade ou digite "999" para sair: '));
    idadeAlunos.push(idade);

    
}

// alunos = idadeAlunos.length - 1;
let removeItem = idadeAlunos.pop();
alunos = idadeAlunos.length;

for( let i in idadeAlunos ){
    soma += idadeAlunos[i];
} 

mediaIdade = soma/idadeAlunos.length;


console.log(`A quantidade de alunos é de: ${alunos}`);
console.log(`A media de idade é de: ${mediaIdade.toFixed(2)}`); 








/* while(true) {

    let num = parseInt(prompt('Digite sua idade ou "999" para encerrar: '));

    if(num !== 999){
        idade += num;
        alunos++
        
    }else {
        break
    }


}

mediaIdade = idade/alunos;

console.log(alunos);
console.log(mediaIdade); */