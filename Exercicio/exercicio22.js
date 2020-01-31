let numero, valor, total=0, media;

numero = prompt("Quanto números de serie você quer?")

while (numero <=0) {
    alert("num menor ou igual a zero")
    numero = prompt("Quanto números de serie você quer?")
}



for(let i=1; i<=numero; i++){
    valor=prompt("Digite um número de série")
    total =  parseInt(valor) + numero
   

}



media = total / numero;
document.write("A média é : " + media);