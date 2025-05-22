const numeros = [4, 10, -4, 6, 24, 50, 12, 0, -1];

// sort() Ordenar Array de forma crescente

numeros.sort();
console.log(numeros);

// splice()
numeros.splice(0, 4, -5, -7, -3, -2);

// slice()
const subArray = numeros.slice(3,7);

// concat()
const array1 = [1, 2];
const array2 = [3, 4];
const array3 = [5, 6];

const novoArray = array1.concat(array2, array3);

console.log(novoArray)