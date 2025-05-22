const alunos = ['Bia', 'Carlos', 'Ana', 'Maria']

//push()
alunos.push('Marcos');
alunos.push('Antonio', 'Clara')

//Retornando a função push()
console.log(alunos.push())
console.log(alunos.push('Antonela', 'José')) //Retornando e adicionando

// unshift() Adiciona no indice 0 e move os outros
alunos.shift("Lucas")

//pop() remove ultimo indice
let ultimo = alunos.pop() //Pode ser só alunos.pop()

//shift() remove o indice 0
alunis.shift()