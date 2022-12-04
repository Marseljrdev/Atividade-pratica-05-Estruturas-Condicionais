// 2. Desenvolva um aplicativo que leia o salário e o sexo de vários
// funcionários. No final, mostre o total de salários pagos aos homens e
// o total pago às mulheres. O programa vai perguntar ao usuário se
// ele quer continuar ou não sempre que ler os dados de um
// funcionário.



let salario = 0;
let salarioHomem = 0;
let salarioMulher = 0;
let respostaPergunta = 's';
let sexo = '';

while( respostaPergunta === 's'){

    sexo = prompt('Qual seu sexo: [M/F]');
    sexo.toLowerCase();

    if( sexo === 'm' || sexo === 'M' ){

        salario = Number.parseFloat(prompt('Digite seu salario'));
        
        salarioHomem += salario;

    }else if( sexo === 'f' || sexo === 'F' ){

        salario = Number.parseFloat(prompt('Digite seu salario'));
        salarioMulher += salario;
    }else{
        alert('Operaçao invalida, por favor repita!');
    }

    respostaPergunta = prompt("Deseja continuar? [S/N]");
    respostaPergunta.toLowerCase();

}


document.write(`Salarito total dos homens foi de: R$${salarioHomem} <br>`);
document.write(`Salario total das mulheres foi de: R$${salarioMulher}`);















// var resposta, salario, salario_homens, salario_mulheres, sexo;
/* salario_homens = 0;
salario_mulheres = 0;
resposta = "s";

while (resposta === "s") {
  sexo = prompt("Digite o sexo [M/F]: ");
  sexo.toLocaleLowerCase();

  if (sexo === "m") {
    salario = Number.parseFloat(prompt("Digite o salario: R$ "));
    salario_homens = salario + salario_homens;
  } else {
    if (sexo === "f") {
      salario = Number.parseFloat(prompt("Digite o salario: R$ "));
      salario_mulheres = salario + salario_mulheres;
    } else {
      console.log("Opcao invalida");
    }
  }

  resposta = prompt("Deseja continuar [S/N]? ").toLocaleLowerCase();
}

console.log("\nTotal Salario Homens: R$" + salario_homens);
console.log("\nTotal Salario Mulheres: R$" + salario_mulheres);

 */