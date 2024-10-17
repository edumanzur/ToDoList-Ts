function adicionar(): void {
    const tarefas = document.getElementById("tarefas") as HTMLElement;
    const inputTarefa = (document.getElementById("tarefa") as HTMLInputElement).value;

    if (!inputTarefa.trim()) {
        alert("Por favor, insira uma tarefa.");
        return;
    }

    const tarefa = document.createElement("div");
    tarefa.className = "tar";
    tarefa.innerHTML = inputTarefa;

    const remover = document.createElement("button");
    remover.innerHTML = 'Remover';
    remover.className = "botao";
    remover.onclick = function() {
        tarefa.remove();
        if (tarefas.children.length === 0) {
            tarefas.style.border = "none";
        }
    };

    tarefa.appendChild(remover);
    tarefas.appendChild(tarefa);
    (document.getElementById("tarefa") as HTMLInputElement).value = "";
    tarefas.style.border = "solid 1px black";
}
