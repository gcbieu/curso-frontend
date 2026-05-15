// ============================================================
// BATALHA NAVAL — InovaWeb Games
// ============================================================
//
// O computador esconde 3 navios num tabuleiro 5x5.
// O jogador tenta afundar todos clicando nas células.
// O jogo termina quando todos os navios forem encontrados.
//
// O HTML e o CSS já estão prontos.
// Sua tarefa é implementar a lógica do jogo neste arquivo.
//
// Trabalhe de cima para baixo — cada bloco depende do anterior.
// Teste no console antes de passar para o próximo.
// ============================================================


// ------------------------------------------------------------
// COMO O TABULEIRO FUNCIONA
// ------------------------------------------------------------
//
// O tabuleiro é uma MATRIZ — um array que contém outros arrays.
// Cada posicao guarda um numero com um significado:
//
//   0 = Água (célula vazia)
//   1 = Navio (escondido do jogador)
//   2 = Acerto (navio atingido)
//   3 = Erro (água atingida)
//
// Exemplo de tabuleiro 5x5:
//
//   [0, 0, 1, 0, 0]   <- linha 0 (navio na coluna 2)
//   [0, 0, 0, 0, 1]   <- linha 1 (navio na coluna 4)
//   [0, 0, 0, 0, 0]   <- linha 2
//   [1, 0, 0, 0, 0]   <- linha 3 (navio na coluna 0)
//   [0, 0, 0, 0, 0]   <- linha 4
//
// Para acessar uma célula: tabuleiro[linha][coluna]
// Exemplo: tabuleiro[0][2] retorna 1 (navio)
// ------------------------------------------------------------


// ------------------------------------------------------------
// VARIÁVEIS GLOBAIS DO JOGO
// ------------------------------------------------------------
// Estas variáveis guardam o estado do jogo inteiro.
// São acessadas por todas as funções abaixo.

//array
let tabuleiro = [];
let naviosRestantes = 3;
let tentativas = 0;
let jogoAtivo = true;

const elTabuleiro = document.querySelector('#tabuleiro')
const elMensagem = document.querySelector('#mensagem')
const elTentativas = document.querySelector('#tentativas')
const btnReiniciar = document.querySelector('#btn-reiniciar')

// ------------------------------------------------------------
// REFERÊNCIAS AO DOM
// ------------------------------------------------------------
// Declare aqui os elementos do DOM que você vai usar para
// criar/atualizar o tabuleiro, mostrar mensagens e contar tentativas.




// ============================================================
// DESAFIO 1 — criarTabuleiro(tamanho)
// ============================================================
//
// Implemente a função criarTabuleiro(tamanho) que retorna
// uma matriz quadrada preenchida com zeros.
//
// Para um tabuleiro 5x5, o resultado deve ser:
//   [
//     [0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0]
//   ]
//
// COMO FAZER:
//   1. Crie um array vazio para guardar as linhas
//   2. Use um loop `for` externo para criar cada linha (0 ate tamanho)
//   3. Dentro do loop externo, crie um array vazio para a linha
//   4. Use um loop `for` interno para adicionar zeros com push(0)
//   5. Ao terminar a linha, adicione-a ao array principal com push
//   6. Retorne o array principal ao final
//
// TESTE:
//   console.log(criarTabuleiro(5));
//   Deve exibir um array com 5 arrays de 5 zeros cada.
// ============================================================
function numAleatorio() {
  return Math.floor(Math.random() * 5)
}
function posicionarNavios(tabuleiro) {
  const nNavios = 3
  for (let i = 0; i < nNavios; i++) {
    let linha = numAleatorio()
    let coluna = numAleatorio()
    while (tabuleiro[linha][coluna] === 1) {
      linha = numAleatorio()
      coluna = numAleatorio()
    }
    tabuleiro[linha][coluna]
  }
}

function criarTabuleiro() {
  for (let i = 0; i < 5; i++) {
    const linha = [];
    for (let j = 0; j < 5; j++) {
      linha.push(0);
    }
    tabuleiro.push(linha);
  }
}


// ============================================================
// DESAFIO 2 — posicionarNavios()
// ============================================================
//
// Implemente a função posicionarNavios() que RECEBE o tabuleiro
// e marca 3 posições fixas com o valor 1 (navio).
//
// Escolha 3 posições quaisquer e marque diretamente:
//   tabuleiro[linha][coluna] = 1;
//
// As 3 posições não podem ser iguais.
//
// TESTE:
//   const tab = criarTabuleiro(5);
//   posicionarNavios(tab);
//   console.log(tab);
//   Deve exibir a matriz com exatamente 3 posições marcadas com 1.
// ============================================================
function posicionarNavios() {
  tabuleiro[0][2] = 1;
  tabuleiro[1][4] = 1;
  tabuleiro[3][0] = 1;
}


// ============================================================
// DESAFIO 3 — atirar(tabuleiro, linha, coluna)
// ============================================================
//
// Implemente a função atirar() que processa um tiro do jogador.
// Por enquanto, teste chamando a funcao diretamente no console.
// O DOM vem depois.
//
// A funcao deve:
//
//   Se a célula já foi atingida (valor 2 ou 3):
//     - Exibir "Posição já atingida!" no console
//     - Não contar tentativa, não alterar nada
//
//   Se for navio (valor 1):
//     - Alterar o valor da celula para 2
//     - Reduzir naviosRestantes em 1
//     - Incrementar tentativas em 1
//     - Exibir "Acerto!" no console
//
//   Se for água (valor 0):
//     - Alterar o valor da célula para 3
//     - Incrementar tentativas em 1
//     - Exibir "Água!" no console
//
//   Após qualquer tiro válido:
//     - Verificar se naviosRestantes chegou a 0
//     - Se sim, exibir mensagem de vitoria no console
//
// TESTE:
//   const tab = criarTabuleiro(5);
//   posicionarNavios(tab);
//   console.log('Antes:', tab);
//   atirar(tab, 0, 0);
//   atirar(tab, 0, 0); // ja atingida
//   atirar(tab, 2, 2);
//   console.log('Depois:', tab);
//   console.log('Tentativas:', tentativas);

//  SE (posição é igual a 1) ENTÃO {
//  mude posição para 2;
//  subtraia 1 de navios;
//  some 1 em tentativas;
//  mostre "Acerto!";
//  }
// ============================================================

function atirar(linha, coluna) {
  const pos = tabuleiro[linha][coluna]

  if (pos === 2 || pos === 3) return console.log('posição já atingida!')
  if (pos === 1) {
    tabuleiro[linha][coluna] = 2
    naviosRestantes--
    tentativas++
    console.log("Acertou!")
  } else if (pos === 0) {
    tabuleiro[linha][coluna] = 3
    tentativas++
    console.log("Água!")
  }
  if (naviosRestantes === 0) {
    console.log("Você venceu!")
  }
}


// ============================================================
// DESAFIO 4 — renderizarTabuleiro()
// ============================================================
//
// Implemente a função renderizarTabuleiro() que lê
// a matriz e constrói o tabuleiro visualmente na tela
// usando o DOM.
//
// A função deve:
//
//   1. Limpar o conteudo atual do #tabuleiro:
//      elTabuleiro.innerHTML = '';
//
//   2. Percorrer a matriz com dois loops for aninhados
//      (loop externo para linhas, interno para colunas)
//
//   3. Para cada célula, criar um <div> com createElement
//
//   4. Adicionar a classe correta conforme o valor:
//      - Valor 2: classList.add('acerto')
//      - Valor 3: classList.add('erro')
//      - Valor 0 ou 1: nenhuma classe (o jogador não vê o navio)
//
//   5. Guardar a posição no elemento para usar no clique:
//      celula.dataset.linha  = linha;
//      celula.dataset.coluna = coluna;
//
//   6. Adicionar o <div> ao elTabuleiro com appendChild
//
// TESTE:
//   Chame renderizarTabuleiro(tabuleiro) dentro de iniciarJogo.
//   Abra no Live Server e confirme que o tabuleiro aparece na tela.
// ============================================================

function renderizarTabuleiro() {
  elTabuleiro.innerHTML = ''

  for (let linha = 0; linha < tabuleiro.length; linha++) {
    for (let coluna = 0; coluna < tabuleiro[linha].length; coluna++) {
      const celula = document.createElement('div');
      const valor = tabuleiro[linha][coluna];

      celula.dataset.linha = linha
      celula.dataset.coluna = coluna

      if (valor === 2) {
        celula.classList.add('acerto');
      }
      else if (valor === 3) {
        celula.classList.add('erro');
      }
      celula.addEventListener('click', function () {
        if (!jogoAtivo) return;

        const l = Number(celula.dataset.linha);
        const c = Number(celula.dataset.coluna);

        atirar(l, c);
        renderizarTabuleiro();
      });
      elTabuleiro.appendChild(celula);
    }
  }
}

// ============================================================
// DESAFIO 5 — eventos de clique nas celulas
// ============================================================
//
// Dentro de renderizarTabuleiro(), apos criar cada celula,
// adicione um evento de clique que processa o tiro.
//
// O evento deve:
//
//   1. Verificar se jogoAtivo é true — se não, ignorar o clique
//
//   2. Ler a posição da célula clicada:
//      const l = Number(celula.dataset.linha);
//      const c = Number(celula.dataset.coluna);
//
//   3. Chamar atirar(tabuleiro, l, c)
//
//   4. Chamar renderizarTabuleiro(tabuleiro) para atualizar a tela
//
//   5. Atualizar elMensagem.textContent com o resultado do tiro
//      (use uma variavel auxiliar dentro de atirar() para
//       guardar a mensagem e exibi-la aqui, ou exiba direto)
//
//   6. Atualizar elTentativas.textContent com o número de tentativas
//
// Adicione este bloco de addEventListener logo apos criar
// e configurar o <div> da celula, ainda dentro do loop.
// ============================================================








// ============================================================
// DESAFIO 6 — iniciarJogo()
// ============================================================
//
// Crie uma função que inicializa (ou reinicia) o jogo do zero.
//
// A funcao deve:
//   - Criar um novo tabuleiro com criarTabuleiro(5)
//   - Posicionar os navios com posicionarNavios()
//   - Definir naviosRestantes = 3
//   - Definir tentativas = 0
//   - Definir jogoAtivo = true
//   - Limpar o texto de elMensagem
//   - Atualizar elTentativas com "Tentativas: 0"
//   - Chamar renderizarTabuleiro() para exibir o tabuleiro na tela
//
// Esta função é chamada no início do jogo e ao clicar em Reiniciar.
// ============================================================


function iniciarJogo() {
  tabuleiro = [];
  criarTabuleiro();
  naviosRestantes = 3;
  tentativas = 0;
  jogoAtivo = true;

  posicionarNavios();

  elMensagem.textContent = 'Clique uma celula para atirar'
  elTentativas.textContent = 'Tentativas: 0'

  renderizarTabuleiro();
}


// ------------------------------------------------------------
// EVENTOS
// ------------------------------------------------------------

btnReiniciar.addEventListener('click', function () {
  iniciarJogo()
});


// ------------------------------------------------------------
// INICIO DO JOGO
// ------------------------------------------------------------
// Esta linha inicia o jogo quando a página carrega.
// Nao altere.

iniciarJogo();


// ============================================================
// DESAFIO EXTRA — Navios aleatorios
// ============================================================
//
// Se terminar antes do fim da aula, crie uma nova versao
// de posicionarNavios que usa Math.random() para sortear
// as posições em vez de usá-las fixas.
//
// Math.random() gera um decimal entre 0 e 1.
// Math.floor(Math.random() * 5) gera um inteiro entre 0 e 4.
//
// A nova funcao deve:
//   - Receber o tabuleiro e a quantidade de navios
//   - Sortear linha e coluna aleatórias
//   - Verificar se a posição já tem navio antes de marcar
//   - Repetir até posicionar todos os navios sem sobreposição
//
// Chame posicionarNaviosAleatorio(tabuleiro, 3) dentro de
// iniciarJogo() no lugar de posicionarNavios().
// ============================================================

//function posicionarNaviosAleatorio(tabuleiro, quantidade) {
   // return Math.floor(Math.random() *5)
