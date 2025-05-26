function gerenciarProdutos(produtos, comando, ...args) {
    if (comando === "listarDisponiveis") {
        return produtos.filter(produto => produto.estoque > 0);
    } else if (comando === "buscarProduto") {
        const nomeProduto = args[0];
        // O método 'find' não foi explicitamente abordado na Aula 6,
        // mas dado que o exercício solicita seu uso, e é um método fundamental para arrays,
        // será utilizado aqui. Caso contrário, seria necessário um loop manual.
        for (let i = 0; i < produtos.length; i++) {
            if (produtos[i].nome === nomeProduto) {
                return produtos[i];
            }
        }
        return null; // Retorna null se não encontrar o produto
    } else if (comando === "calcularValorTotal") {
        let total = 0;
        for (let i = 0; i < produtos.length; i++) {
            total += produtos[i].preco * produtos[i].estoque;
        }
        return total;
    } else if (comando === "atualizarEstoque") {
        const nomeProduto = args[0];
        const novaQuantidade = args[1];
        for (let i = 0; i < produtos.length; i++) {
            if (produtos[i].nome === nomeProduto) {
                produtos[i].estoque = novaQuantidade;
                return;
            }
        }
    }
}

const produtos = [
    { nome: "Celular", preco: 2000, estoque: 5 },
    { nome: "Notebook", preco: 3500, estoque: 0 },
    { nome: "Fone de Ouvido", preco: 250, estoque: 12 }
];

// Listar disponíveis
console.log(gerenciarProdutos(produtos, "listarDisponiveis"));

// Buscar um produto
console.log(gerenciarProdutos(produtos, "buscarProduto", "Notebook"));

// Calcular valor total
console.log(gerenciarProdutos(produtos, "calcularValorTotal"));

// Atualizar estoque
gerenciarProdutos(produtos, "atualizarEstoque", "Notebook", 3);
console.log(produtos[1].estoque);