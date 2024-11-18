// Função para mostrar os detalhes de um projeto
function mostrarDetalhes(projetoId) {
  // Criando uma mensagem para cada projeto
  const detalhes = {
      1: "Este projeto é uma calculadora simples feita com HTML, CSS e JavaScript. Ela permite realizar operações básicas como soma, subtração, multiplicação e divisão.",
      2: "Este é um aplicativo de lista de tarefas (To-Do List). Você pode adicionar, remover e marcar as tarefas como feitas. Utiliza armazenamento local para persistir os dados.",
      3: "Neste projeto, implementamos o clássico jogo da forca. O jogador deve adivinhar uma palavra, tentando letras, antes de ficar sem tentativas.",
      4: "Um cronômetro simples que permite ao usuário iniciar, pausar e resetar o tempo. Ideal para monitorar atividades e medir intervalos.",
      5: "Este projeto utiliza uma API de conversão de moedas para converter valores entre diferentes moedas. A interface é simples e fácil de usar.",
      6: "O quiz de conhecimentos gerais consiste em uma série de perguntas de múltipla escolha. O usuário pode testar seus conhecimentos e obter uma pontuação no final.",
      7: "O formulário de contato coleta o nome, e-mail e mensagem do usuário, realizando validação em JavaScript antes de enviar os dados.",
      8: "A galeria de imagens exibe várias fotos com efeitos interativos. As imagens podem ser ampliadas ao clicar e têm efeitos de hover.",
      9: "Neste jogo, o usuário deve adivinhar um número aleatório gerado pelo computador. Ele tem um número limitado de tentativas para acertar."
  };

  // Encontrando o projeto pelo ID e mostrando os detalhes no console ou alert
  if (detalhes[projetoId]) {
      alert(detalhes[projetoId]);  // Exibe os detalhes como um alerta
  } else {
      alert("Detalhes não encontrados para este projeto.");
  }
}
