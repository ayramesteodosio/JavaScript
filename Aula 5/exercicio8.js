function calcularTotalVendas(vendas) {
    const totalVendas = vendas.reduce(function(acumulador, valorAtual) {
        return acumulador + valorAtual;
    }, 0);
    return totalVendas;
}

const vendas = [150, 200, 100, 50];
let totalVendas = calcularTotalVendas(vendas);
console.log(totalVendas);

const vendas2 = [10, 20, 30];
let totalVendas2 = calcularTotalVendas(vendas2);
console.log(totalVendas2);