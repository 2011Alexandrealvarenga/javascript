document.getElementById('meuBotao').addEventListener('click', function() {
  var conteudo = document.getElementById('conteudo');
  
  // Remove a classe 'escondido' para mostrar o conteúdo
  conteudo.classList.remove('escondido');
  
  // Adiciona a classe 'visivel' para iniciar a transição de opacidade
  setTimeout(function() {
      conteudo.classList.add('visivel');
  }, 10); // Pequeno delay para garantir que a transição funcione
});