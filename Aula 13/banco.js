// Banco de Dados Simulado
const usuarios = [
    { 
        id: 1, 
        nome: "Gabriel Oliveira", 
        saldo: 5000, 
        conta: "0043", 
        ativa: true, 
        icone: "fa-user-ninja",
        historico: [],
        resumo: { depositos: 0, saques: 0, total: 0 }
    },
    { 
        id: 2, 
        nome: "João Silva (Teste)", 
        saldo: 1250.50, 
        conta: "0099", 
        ativa: true, 
        icone: "fa-user-tie",
        historico: [],
        resumo: { depositos: 0, saques: 0, total: 0 }
    },
    { 
        id: 3, 
        nome: "Maria Souza", 
        saldo: 15000, 
        conta: "0152", 
        ativa: true, 
        icone: "fa-user-astronaut",
        historico: [],
        resumo: { depositos: 0, saques: 0, total: 0 }
    }
];

// Estado Global
let usuarioAtual = null;
let saldoEscondido = false;

// Seletores de UI
const loadingScreen = document.getElementById('loading-screen');
const progressBar = document.getElementById('progress-bar');
const loadingText = document.getElementById('loading-text');
const initialSetup = document.getElementById('initial-setup');
const appContent = document.getElementById('app-content');
const selectInicial = document.getElementById('select-inicial');
const headerSelect = document.getElementById('header-user-select');

// --- LÓGICA DE LOADING ---

function iniciarLoading() {
    let progresso = 0;
    const intervalo = setInterval(() => {
        progresso += Math.floor(Math.random() * 10) + 1;
        
        if (progresso >= 100) {
            progresso = 100;
            clearInterval(intervalo);
            finalizarLoading();
        }
        
        progressBar.style.width = progresso + '%';
    }, 150);
}

function finalizarLoading() {
    loadingText.innerText = "Sistema Pronto!";
    initialSetup.classList.remove('hidden');
    popularSelects();
}

// --- GESTÃO DE USUÁRIOS ---

function popularSelects() {
    const options = usuarios.map(u => `<option value="${u.id}">${u.nome}</option>`).join('');
    selectInicial.innerHTML += options;
    headerSelect.innerHTML = options;
}

selectInicial.addEventListener('change', (e) => {
    entrarNoApp(Number(e.target.value));
});

headerSelect.addEventListener('change', (e) => {
    trocarUsuario(Number(e.target.value));
});

function entrarNoApp(id) {
    usuarioAtual = usuarios.find(u => u.id === id);
    loadingScreen.style.opacity = '0';
    setTimeout(() => {
        loadingScreen.classList.add('hidden');
        appContent.classList.remove('hidden');
        atualizarInterface();
    }, 500);
}

function trocarUsuario(id) {
    usuarioAtual = usuarios.find(u => u.id === id);
    exibirMensagem(`Perfil alterado para ${usuarioAtual.nome}`, 'sucesso');
    atualizarInterface();
}

// --- OPERAÇÕES BANCÁRIAS ---

function atualizarInterface() {
    if (!usuarioAtual) return;

    // Atualiza Textos
    document.getElementById('titular').textContent = usuarioAtual.nome;
    document.getElementById('numero-conta').textContent = usuarioAtual.conta;
    document.getElementById('user-icon').className = `fa-solid ${usuarioAtual.icone}`;
    
    // Atualiza Saldo
    const elSaldo = document.getElementById('saldo');
    if (saldoEscondido) {
        elSaldo.textContent = "R$ ••••••";
    } else {
        elSaldo.textContent = `R$ ${usuarioAtual.saldo.toLocaleString('pt-BR', {minimumFractionDigits: 2})}`;
    }

    // Status
    const elStatus = document.getElementById('status-conta');
    elStatus.textContent = usuarioAtual.ativa ? "Ativa" : "Bloqueada";
    elStatus.className = `status-badge ${usuarioAtual.ativa ? 'status-ativa' : 'status-bloqueada'}`;

    // Resumo
    document.getElementById('total-depositos').textContent = usuarioAtual.resumo.depositos;
    document.getElementById('total-saques').textContent = usuarioAtual.resumo.saques;
    document.getElementById('total-transacoes').textContent = usuarioAtual.resumo.total;

    // Histórico
    renderizarHistorico();
}

function depositar() {
    const input = document.getElementById('campo-valor');
    const valor = Number(input.value);

    if (!usuarioAtual.ativa) return exibirMensagem("Conta bloqueada!", "erro");
    if (valor <= 0) return exibirMensagem("Valor inválido!", "erro");

    usuarioAtual.saldo += valor;
    usuarioAtual.resumo.depositos++;
    usuarioAtual.resumo.total++;
    
    usuarioAtual.historico.unshift({
        tipo: 'Depósito',
        valor: valor,
        data: new Date().toLocaleTimeString()
    });

    input.value = '';
    exibirMensagem("Depósito realizado com sucesso!", "sucesso");
    atualizarInterface();
}

function sacar() {
    const input = document.getElementById('campo-valor');
    const valor = Number(input.value);

    if (!usuarioAtual.ativa) return exibirMensagem("Conta bloqueada!", "erro");
    if (valor <= 0) return exibirMensagem("Valor inválido!", "erro");
    if (valor > usuarioAtual.saldo) return exibirMensagem("Saldo insuficiente!", "erro");

    usuarioAtual.saldo -= valor;
    usuarioAtual.resumo.saques++;
    usuarioAtual.resumo.total++;

    usuarioAtual.historico.unshift({
        tipo: 'Saque',
        valor: valor,
        data: new Date().toLocaleTimeString()
    });

    input.value = '';
    exibirMensagem("Saque realizado!", "sucesso");
    atualizarInterface();
}

function toggleBloqueio() {
    usuarioAtual.ativa = !usuarioAtual.ativa;
    exibirMensagem(usuarioAtual.ativa ? "Conta desbloqueada" : "Conta bloqueada", "sucesso");
    atualizarInterface();
}

function toggleSaldo() {
    saldoEscondido = !saldoEscondido;
    const icone = document.getElementById('icone-olho');
    icone.className = saldoEscondido ? "fi fi-rr-eye-crossed" : "fi fi-rr-eye";
    atualizarInterface();
}

function renderizarHistorico() {
    const lista = document.getElementById('lista-historico');
    if (usuarioAtual.historico.length === 0) {
        lista.innerHTML = '<li class="historico-vazio">Nenhuma transação ainda.</li>';
        return;
    }

    lista.innerHTML = usuarioAtual.historico.map(t => `
        <li>
            <span><strong>${t.tipo}</strong> <br><small>${t.data}</small></span>
            <span style="color: ${t.tipo === 'Saque' ? '#e74c3c' : '#2ecc71'}">
                ${t.tipo === 'Saque' ? '-' : '+'} R$ ${t.valor.toFixed(2)}
            </span>
        </li>
    `).join('');
}

function exibirMensagem(texto, tipo) {
    const el = document.getElementById('mensagem');
    el.textContent = texto;
    el.className = tipo === 'sucesso' ? 'msg-sucesso' : 'msg-erro';
    el.style.display = 'block';
    el.style.padding = '10px';
    el.style.marginTop = '10px';
    el.style.borderRadius = '8px';
    el.style.textAlign = 'center';
    el.style.fontSize = '0.9rem';
    
    if(tipo === 'sucesso') {
        el.style.background = '#d1fae5';
        el.style.color = '#065f46';
    } else {
        el.style.background = '#fee2e2';
        el.style.color = '#991b1b';
    }

    setTimeout(() => { el.style.display = 'none'; }, 3000);
}

// Listeners de Botões
document.getElementById('btn-depositar').addEventListener('click', depositar);
document.getElementById('btn-sacar').addEventListener('click', sacar);
document.getElementById('btn-bloquear').addEventListener('click', toggleBloqueio);

// Iniciar app
window.onload = iniciarLoading;