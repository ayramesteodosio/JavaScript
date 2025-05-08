let valorCompra;
let valorDesconto;
let valorFinal;

valorCompra = Number(prompt('Qual o valor da compra?'))
valorDesconto = valorCompra > 100 ? valorCompra * 0.10 : valorCompra * 0.05;
valorFinal = valorCompra - valorDesconto

console.log(`Valor original: ${valorCompra}`)
console.log(`Desconto aplicado: ${valorDesconto}`)
console.log(`Valor final: ${valorFinal}`)