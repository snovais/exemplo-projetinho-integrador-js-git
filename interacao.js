// Seleciona todos os botões dos cards e os elementos dos cards
const botoesCards = document.querySelectorAll('.btn-card');
const botaoLimpar = document.querySelector('#btn-limpar');

// Variável global para armazenar o serviço que o usuário escolheu
let servicoSelecionado = "";

// Adiciona o evento de clique para cada botão usando forEach
botoesCards.forEach((botao) => {
    botao.addEventListener('click', function() {
        
        // Descobre qual é o card pai deste botão específico
        const cardPai = botao.parentElement;
        // Pega o texto do título (h3) deste card
        const tituloServico = cardPai.querySelector('h3').innerText;

        // Se o card já estava selecionado, desmarca ele
        if(cardPai.classList.contains('selecionado-ativo')) {
            cardPai.classList.remove('selecionado-ativo');
            botao.classList.remove('botao-selecionado');
            botao.innerText = "Selecionar";
            servicoSelecionado = "";
        } else {
            // Primeiro, limpa qualquer outra seleção existente (permite apenas uma escolha)
            resetarSelecoes();

            // Aplica as novas cores e classes de seleção
            cardPai.classList.add('selecionado-ativo');
            botao.classList.add('botao-selecionado');
            botao.innerText = "Selecionado ✔️";
            
            // Guarda o nome do serviço selecionado na variável global
            servicoSelecionado = tituloServico;
        }
    });
});

// Função interna para limpar as classes visuais de todos os cards
function resetarSelecoes() {
    botoesCards.forEach((b) => {
        b.parentElement.classList.remove('selecionado-ativo');
        b.classList.remove('botao-selecionado');
        b.innerText = "Selecionar";
    });
    servicoSelecionado = "";
}

// Configura o botão do cabeçalho para limpar tudo quando clicado
botaoLimpar.addEventListener('click', resetarSelecoes);
