let nome = prompt("Digite o nome do(a) aluno(a)");
let nota1 = prompt("Digite a primeira nota do bimestre do aluno");
let nota2 = prompt("Digite a segunda nota do bimestre do aluno");
let nota3 = prompt("Digite a terceira nota do bimestre do aluno");
let nota4 = prompt("Digite a quarta nota do bimestre do aluno");

/* document.write("Aluno(a): " + nome)
document.write("1º Bimestre :" + nota1)
document.write("2º Bimestre :" + nota2)
document.write("3º Bimestre :" + nota3)
document.write("4º Bimestre :" + nota4) */
 
let media=(nota1 * 1 + nota2 * 2 + nota3 * 3 + nota4 * 4 ) / 10; 
document.write("A média do aluno(a) é " + media);

if (media>=7)
{
    document.write("<br> Aluno(a) " + nome + " foi APROVADO!")
}
else {
    document.write("<br> Aluno(a) " + nome + " foi REPROVADO!")
}







