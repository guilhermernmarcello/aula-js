let cliente, resposta;

document.write("<h2> Clientes </h2>");
document.write("<ul>");
resposta = true;
/* o comando while apenas executa se for TRUE, se não ele não executa */

while(resposta){
    cliente = prompt("Nome do cliente");
    document.write("<li>" + cliente + "</li>")
    resposta = confirm("Cadastrar outro cliente: sim ou não?") /* confirme*/
}

document.write("</ul>");




let contador = 1
while(contador <= 10){
    document.write("Número: " + contador);

    if(contador == 5){
        document.write(" Aqui é a metade")
    }
    document.write("<br>")
    contador++;
}


/* contador = contator +1 (forma maior de se escrever)
   contator++ (mesma coisa porem menor)

   contador = contator -1 (forma maior de se escrever)
   contator-- (mesma coisa porem menor) */
