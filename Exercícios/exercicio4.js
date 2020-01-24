let nome = prompt("Informe o nome do(a) aluno(a)");
let nota1 = prompt("Informe a primeira nota");
let nota2 = prompt("Informe a segunda nota");
let nota3 = prompt("Informe a terceira nota");
let nota4 = prompt("Informe a quarta nota");

console.log(nome);
console.log(nota1);
console.log(nota2);
console.log(nota3);
console.log(nota4);

nota1= parseFloat(nota1);
nota2= parseFloat(nota2);
nota3= parseFloat(nota3);
nota4= parseFloat(nota4);

let media=(nota1 + nota2 + nota3 + nota4) / 4; 
console.log("A média do aluno(a) é " + media);
