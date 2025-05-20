function executarComAtraso(mensagem, callback) {
    setTimeout(function () {
        alert(mensagem);
        callback();
    }, 2000);
}

function saudacaoFinal() {
    alert("Até logo!");
}

executarComAtraso("Carregando conteúdo...", saudacaoFinal);
