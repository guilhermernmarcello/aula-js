let nomeJogador1 , nomeJogador2;
let opcaoJogador1 ,  opcaoJogador2;

nomeJogador1 = prompt("Informe o nome do jogador 1: ");
opcaoJogador1 = prompt("Olá " + nomeJogador1 + " escolha uma das opções : \n 1 - Pedra \n 2 - Papel \n 3 - Tesoura")

nomeJogador1 = prompt("Informe o nome do jogador 2: ");
opcaoJogador2 = prompt("Olá " + nomeJogador2 + " escolha uma das opções : \n 1 - Pedra \n 2 - Papel \n 3 - Tesoura")

/* Tesoura > Papel          Pedra 1
    Papel > Pedra           Papel 2 
    Pedra > Tesoura         Tesoura 3           */

if(opcaoJogador1 == opcaoJogador2){
    document.write("<img src='empate.png'> <br>")
    document.write("EMPATE");

}else if(opcaoJogador1 == 1 &&  opcaoJogador2 == 3){
    document.write("<img src='p1w2.png'> <br>")
    document.write(nomeJogador1 + " VENCEU!!<br>");
    
}else if(opcaoJogador1 == 2 &&  opcaoJogador2 == 3){
    document.write("<img src='p1w2.png'> <br>")
    document.write(nomeJogador1 + " VENCEU<br>");

}else if(opcaoJogador1 == 3 &&  opcaoJogador2 == 1){
    document.write("<img src='p1w2.png'> <br>")
    document.write(nomeJogador1 + " VENCEU<br>");

}else if(opcaoJogador2 == 1 && opcaoJogador1 == 3){
    document.write("<img src='p2w.png'> <br>")
    document.write(nomeJogador2 + " VENCEU!!<br>")

}else if(opcaoJogador2 == 2 && opcaoJogador1 == 2){
    document.write("<img src='p2w.png'> <br>")
    document.write(nomeJogador2 + " VENCEU!!<br>")

}else if(opcaoJogador2 == 3 && opcaoJogador1 == 1){
    document.write("<img src='p2w.png'> <br>")
    document.write(nomeJogador2 + " VENCEU!!<br>")
}








