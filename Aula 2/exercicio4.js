let estoque;
let removerEstoque;
let estoqueAtualizado;

estoque = Number(prompt('Quanto tem no estoque?'));
removerEstoque = Number(prompt('Quanto deseja retirar do estoque?'));
estoqueAtualizado = estoque >= removerEstoque ? alert(`Estoque atualizado: ${(estoque - removerEstoque)}`) 
                    : alert('Operação inválida: quantidade insuficiente no estoque.');