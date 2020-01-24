let numeroJogador, numeroComputador;

numeroComputador = Math.floor(Math.random() * 10);

numeroJogador = prompt("Tente adivinhar um número de 0 a 10");

if(numeroComputador == numeroJogador){
    document.write("Você ganhou!!");
    document.write("<br>")
    document.write("<img src='triste.png'>")
    
}else{
    document.write("Você perdeu!!");
    document.write("<br>")
    document.write("SEU OTARIO!!");
    document.write("<img src='feliz.png'>")

}
console.log(numeroComputador);


/* Math.floor(Math.random() * 10) O codigo math.floor é utilizado para tirar as casas decimais de um número) */