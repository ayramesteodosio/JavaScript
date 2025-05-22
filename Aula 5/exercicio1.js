function gerenciarTarefas(tarefas, acao, novaTarefa) {
    switch (acao) {
        case "adicionarInicio":
            tarefas.unshift(novaTarefa);
            console.log(`Tarefa "${novaTarefa}" adicionada no início.`);
            break;
        case "adicionarFim":
            tarefas.push(novaTarefa);
            console.log(`Tarefa "${novaTarefa}" adicionada no final.`);
            break;
        case "removerInicio":
            let removidaInicio = tarefas.shift();
            console.log(`Tarefa "${removidaInicio}" removida do início.`);
            break;
        case "removerFim":
            let removidaFim = tarefas.pop();
            console.log(`Tarefa "${removidaFim}" removida do final.`);
            break;
        default:
            console.log("Ação inválida.");
    }
    console.log("Lista atual de tarefas:", tarefas);
}

const tarefas = ["Estudar", "Treinar", "Ler"];

gerenciarTarefas(tarefas, "adicionarInicio", "Tomar Café da manhã");