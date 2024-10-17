function adicionar() {
    var tarefas = document.getElementById("tarefas");
    var inputTarefa = document.getElementById("tarefa").value;
    if (!inputTarefa.trim()) {
        alert("Por favor, insira uma tarefa.");
        return;
    }
    var tarefa = document.createElement("div");
    tarefa.className = "tar";
    tarefa.innerHTML = inputTarefa;
    var remover = document.createElement("button");
    remover.innerHTML = 'Remover';
    remover.className = "botao";
    remover.onclick = function () {
        tarefa.remove();
        if (tarefas.children.length === 0) {
            tarefas.style.border = "none";
        }
    };
    tarefa.appendChild(remover);
    tarefas.appendChild(tarefa);
    document.getElementById("tarefa").value = "";
    tarefas.style.border = "solid 1px black";
}
