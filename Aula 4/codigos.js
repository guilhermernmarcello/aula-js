let diaSemana, dia 
diaSemana = prompt("Escolha o dia da semana: \n1-Domingo\n2-Segunda\n3-Terça\n4-Quarta\n5-Quinta\n6-Sexta\n7-Sabado")
switch(diaSemana){
    case "1":
        dia= "Domingo"
        break
    case "2":
        dia= "Segunda"
        break
    case "3":
        dia= "Terça"
        break
    case "4":
        dia= "Quarta"
        break
    case "5":
        dia= "Quinta"
        break
    case "6":
        dia= "Sexta"
        break
    case "7":
        dia= "Sabado"
        break
        default:
        dia= "Resposta invalida"
    break
}

document.write("O dia da semana escolhido foi " + dia)

let nome, idade

nome = prompt("Informe seu nome")
idade = prompt("Informe sua idade")

if(idade >= 18){
    resposta = "maior"
}else{
    resposta = "menor "
}

/*resposta = (idade>=18) ? "Maior" : "Menor"
É a mesma coisa que o if porem mais curto, e nao é muito usado, só pessoas com mais experiencia usam assim*/

document.write("<br><br>Olá " + nome + ", você é " + resposta + " de idade.")

let repetir = "sim"
while(repetir == "sim"){
    nome = prompt("Informe seu nome")
    idade = prompt("Informe sua idade")
    resposta = (idade>=18) ? "Maior" : "Menor"
    document.write("<br><br>Olá " + nome + ", você é " + resposta + " de idade.")
    repetir = prompt("Deseja repetir ? Sim ou Não ?")
}
