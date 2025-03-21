function adicionarTarefa() {
  let inputTarefa = document.getElementById("inputTarefa");
  let tarefa = inputTarefa.value;

  if (inputTarefa.value === "") {
    let errorMensagem = "O campo de tarefa está vazio escreva algo";
    document.getElementById("mensagem").textContent = errorMensagem;
    let errorTarefa = document.createElement("");
    listaTarefas.appendChild(errorTarefa);
  } else {
    let mensagem = "Tarefa adicionada com sucesso!";
    document.getElementById("mensagem").textContent = mensagem;
    let listaTarefas = document.getElementById("listaTarefas");
    let novaTarefa = document.createElement("li");
    novaTarefa.textContent = tarefa;
    listaTarefas.appendChild(novaTarefa);
  }

  //limpa o input do usuário
  inputTarefa.value = "";
}
