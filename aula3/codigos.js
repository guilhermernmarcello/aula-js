let nome, idade;

nome = prompt("Qual seu nome?")
idade = prompt("Qual sua idade?")
email = prompt("Qual seu e-mail?")

if(idade >= 18){
document.write("Seu nome é: <strong>" + nome + "</strong>");
document.write("<br> Sua idade é: <em>" + idade + " anos </em>");
document.write("<br> Seu e-mail é: " + email);

}else if(idade < 7){
    document.write("SAI DAQUI");
}else{
    document.write("Acesso NEGADO");
    document.write("<br>Você precisa de um responsável");
}