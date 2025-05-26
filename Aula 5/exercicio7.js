function filtrarDevedores(dividas) {
    const devedores = dividas.filter(function(divida) {
        return divida > 80.00;
    });
    return devedores;
}

const dividas = [95.90, 180.50, 22.99, 105.99, 30.50];
const devedores = filtrarDevedores(dividas);
console.log(devedores);

const dividas2 = [10.00, 70.00, 79.99, 80.00];
const devedores2 = filtrarDevedores(dividas2);
console.log(devedores2);