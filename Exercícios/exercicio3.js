let nome = prompt("Informe o nome do vendedor");
let codigo = prompt("Informe o codigo do produto");
let preco = prompt("Informe o preço da peça");
let quantidade = prompt("Informe a quantidade");

console.log("Vendedor: " + nome)
console.log("Código do produto: " + codigo)
console.log("Valor do produto: $" + preco)
console.log("Número de produtos vendidos: " + quantidade)

total = preco * quantidade
comissao = total * 0.05;
console.log(total)
console.log("A comissao do vendedor é " + comissao)

