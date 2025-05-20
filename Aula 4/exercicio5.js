const calcularDesconto = (preco, porcentagemDesconto) => {
    return preco - (preco * (porcentagemDesconto / 100));
};

while (confirm("Deseja calcular o desconto de outro produto?")) {
    let preco = Number(prompt("Informe o preço do produto:"));
    let desconto = Number(prompt("Informe a porcentagem de desconto:"));

    if (isNaN(preco) || isNaN(desconto)) {
        alert("Valores inválidos!");
    } else {
        let final = calcularDesconto(preco, desconto);
        alert(`Valor com desconto: R$ ${final.toFixed(2)}`);
    }
}