document.addEventListener('DOMContentLoaded', function () {
  const formulario = document.getElementById('meuFormulario');
  const mensagem = document.getElementById('mensagem');

  formulario.addEventListener('submit', function (event) {
    event.preventDefault(); // Impede o envio padrão

    const campoA = parseFloat(document.getElementById('campoA').value);
    const campoB = parseFloat(document.getElementById('campoB').value);

    if (isNaN(campoA) || isNaN(campoB)) {
      mensagem.textContent = "Por favor, preencha ambos os campos com números válidos.";
      mensagem.className = "mensagem erro";
      return;
    }

    if (campoB > campoA) {
      mensagem.textContent = "Formulário válido! Campo B é maior que Campo A.";
      mensagem.className = "mensagem sucesso";
    } else {
      mensagem.textContent = "Formulário inválido! Campo B deve ser maior que Campo A.";
      mensagem.className = "mensagem erro";
    }
  });
});