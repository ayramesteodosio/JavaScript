const notas = [9, 7.5, 8, 6.5, 3, 10];

function calcularMedia(notas) {
    const notasOrdenadas = notas.sort((a, b) => b - a);
    
    const tresMelhores = notasOrdenadas.slice(0, 3);

    const soma = tresMelhores.reduce((acumulador, nota) => acumulador + nota, 0);
    return soma / tresMelhores.length;
}

let mediaTresMelhores = calcularMedia(notas);

console.log(mediaTresMelhores);