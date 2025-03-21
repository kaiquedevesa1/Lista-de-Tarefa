function adicionarTarefa() {
  const inputTarefa = document.getElementById("inputTarefa");
  let tarefa = inputTarefa.value.trim(); //trim tira os espacos do comeco e do fim

  const mensagem = document.querySelector("#mensagem");

  if (inputTarefa.value === "") {
    let errorMensagem = "O campo de tarefa está vazio escreva algo";
    mensagem.textContent = errorMensagem;
    mensagem.classList.add("fail"); // Adiciona a classe corretamente
  } else {
    let sucessMensagem = "Tarefa adicionada com sucesso!";
    mensagem.textContent = sucessMensagem;
    mensagem.classList.add("sucess");
    mensagem.classList.remove("fail");

    const listaTarefas = document.getElementById("listaTarefas");
    let novaTarefa = document.createElement("li");

    novaTarefa.textContent = tarefa;
    listaTarefas.appendChild(novaTarefa);
  }

  //limpa o input do usuário
  inputTarefa.value = "";
}
