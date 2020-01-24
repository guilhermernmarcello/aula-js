let diaSemana, dia
diaSemana = prompt ("escolha o dia da semana: \n1-Domingo\n2-Segunda \n3-Terça \n4-Quarta \n5-Quinta \n6-Sexta \n7-Sabado")
switch(diaSemana){
case "1":
    dia="Domingo"
    break
case "2":
    dia="Segunda"
    break
case "3":
    dia="Terca"
    break
case "4":
    dia="Quarta"
    break
case "5":
    dia="Quinta"
    break
case "6":
    dia="Sexta"
    break
case "7":
    dia="Sabado"
    break    
}

document.write("O dia da semana escolhido foi " + dia)

let nome, idade
    let repetir = "sim";

    while(repetir == "sim"){
    nome = prompt("Informe o seu nome")
    idade = prompt("Informe a sua idade")
    resposta = (idade >=18) ? "Maior" : "Menor"
    document.write("<br><br>Olá " + nome + ", você é " + resposta + " de idade.");

    repetir = prompt("Deseja repetir? sim ou não?")
} 