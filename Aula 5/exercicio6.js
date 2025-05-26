function converterMoeda(precosDolares) {
    const precoReais = precosDolares.map(function(preco) {
        return preco * 5;
    });
    return precoReais;
}

const precosDolares = [10, 20, 30];
precoReais = converterMoeda(precosDolares);
console.log(precoReais);

const precosDolares2 = [5, 15, 25];
precoReais2 = converterMoeda(precosDolares2);
console.log(precoReais2);