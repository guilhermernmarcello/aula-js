let numero, valor, total;

numero = prompt("Quanto números de serie você quer?")
document.write(numero)

for(let i=1; i<=numero; i++){
    valor=prompt("Digite um número de série")
    total = total + valor
    parseInt(valor)
}

if(numero <=0){
    numero=prompt("O número não pode ser menor ou igual a zero! Digite um novo número de serie")
}

media = total / numero
document.write("A média é : " + media);