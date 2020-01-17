/* nessa parte, vai aparecer algumas janelas com mensagem abaixo */
// um sinal de = é atribuição e dois sinal de = é igualdade

console.log("Recado parar o desenvolvedor");

let nome  , idade;
nome = 'Guilherme';
idade = '20';

console.log("Nome: " + nome);
console.log("Idade: " +  idade);


/* OPERADORES ARITMÉTICOS */ 

console.log("10+2=" + (10 + 2 ));
console.log("10-2=" + (10 - 2 ));
console.log("10x2=" + (10 * 2 ));
console.log("10/2=" +(10 / 2 ));
console.log("10%2=" +   

/* OPERADORES RELACIONAIS */

console.log("10 é maior que 2=" + (10 > 2 )); //maior
console.log("10 é menor que 2=" +  (10 < 2 )); //menor
console.log("10 é igual a 2=" + (10 == 2 )); //igual
console.log("10 é diferente a 2=" + (10 != 2 )); //diferente
console.log("10 é maior ou igual a 2=" + (10 >= 2 )); //maior ou igual
console.log("10 é menor ou igual a 2=" + (10 <= 2 )); //menor ou igual

/* OPERADORES LOGICOS */

console.log("10 é maior que 2 e 5 é igual a 5" + ( (10 > 2 )  && (5 == 5) )); // Operador E
console.log("10 é menor que 2 e 5 é igual a 5" + ( (10 > 2 )  || (5 == 5) )); //Operador OU
console.log("5 é igual a 5" + ( (5 == 5 ) )); //Operador NÃO

/*Essa codigo serve para o usuario digitar o valor */
let numero1 = prompt("Informe um número");
let numero2 = prompt("Informe outro número");

numero1= parseFloat(numero1)
numero2= parseFloat(numero2)

console.log("Gustavo seu número é " + (numero1 + numero2));

console.log(typeof(numero1));    
console.log(typeof(numero2));

let total = numero1 + numero2;
 console.log(total);
 

 
 let nota1= 7;
 let nota2= 8.5;
 let nota3= 4.5;
 let nota4= 6;
 let media=(nota1 + nota2 + nota3 + nota4) / 4;
 console.log("A média do João é " + media);