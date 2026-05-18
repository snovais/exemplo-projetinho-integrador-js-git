// Seleciona os elementos do formulário e a div de alertas
const formulario = document.querySelector('#meu-formulario');
const inputNome = document.querySelector('#nome');
const inputEmail = document.querySelector('#email');
const divAlerta = document.querySelector('#mensagem-alerta');

// Escuta o evento de envio (submit) do formulário
formulario.addEventListener('submit', function(event) {
    // Evita que a página recarregue ao clicar em enviar
    event.preventDefault();

    // Captura os valores digitados tirando espaços em branco extras
    const nomeValor = inputNome.value.trim();
    const emailValor = inputEmail.value.trim();

    // Limpa qualquer mensagem anterior antes de testar
    divAlerta.innerHTML = "";
    divAlerta.className = "";

    // Validação 1: Verificar se o campo Nome está vazio
    if (nomeValor === "") {
        divAlerta.innerText = "O preenchimento do campo Nome é obrigatório!";
        divAlerta.classList.add('erro');
        return; // Para a execução do código aqui
    }

    // Validação 2: Verificar se o campo E-mail está vazio
    if (emailValor === "") {
        divAlerta.innerText = "O preenchimento do campo E-mail é obrigatório!";
        divAlerta.classList.add('erro');
        return; 
    }

    // Validação 3: Verificar se o usuário escolheu um card (Integração com o Aluno 2)
    // A variável 'servicoSelecionado' foi declarada globalmente no outro arquivo script
    if (servicoSelecionado === "") {
        divAlerta.innerText = "Por favor, selecione pelo menos um serviço nos cards acima!";
        divAlerta.classList.add('erro');
        return;
    }

    // Se passou por todas as validações, exibe a mensagem de sucesso!
    divAlerta.innerText = `Obrigado, ${nomeValor}! Sua solicitação para "${servicoSelecionado}" foi enviada com sucesso.`;
    divAlerta.classList.add('sucesso');

    // Opcional: Limpa os campos do formulário após o sucesso
    formulario.reset();
    // Reseta os botões lá de cima chamando a função do Aluno 2
    resetarSelecoes();
}); 