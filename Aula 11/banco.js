const numeroConta = '001';
let titular = "Gabriel Oliveira";
let saldo = 1000;
let contaAtiva = true;
let statusConta;
const historico = [];
let activeSession = true;

// Seletores
const elSaldo = document.querySelector('#saldo');
const elMensagem = document.querySelector('#mensagem');
const btnDepositar = document.querySelector('#btn-depositar');
const btnSacar = document.querySelector('#btn-sacar');
const btnBloquear = document.querySelector('#btn-bloquear');
const elTotalDepositos = document.querySelector('#total-depositos');
const elTotalSaques = document.querySelector('#total-saques');
const elTotalTransacoes = document.querySelector('#total-transacoes');
const iconeOlho = document.querySelector('#icone-olho');
let saldoEscondido = false;

// --- Eventos ---
btnDepositar.addEventListener('click', () => {
    const campValor = document.querySelector('#campo-valor');
    depositar(Number(campValor.value));
});

btnSacar.addEventListener('click', () => {
    const campValor = document.querySelector('#campo-valor');
    sacar(Number(campValor.value));
});

btnBloquear.addEventListener('click', bloquearConta);

// --- Funções ---

function toggleSaldo() {
    if (!saldoEscondido) {
        elSaldo.textContent = "••••••";
        if(iconeOlho) {
            iconeOlho.classList.replace('fi-rr-eye', 'fi-rr-eye-crossed');
        }
        saldoEscondido = true;
    } else {
        atualizarSaldo();
        if(iconeOlho) {
            iconeOlho.classList.replace('fi-rr-eye-crossed', 'fi-rr-eye');
        }
        saldoEscondido = false;
    }
}

function atualizarSaldo() {
    if (!saldoEscondido) {
        elSaldo.textContent = `R$ ${saldo.toFixed(2)}`;
    }
}

function depositar(valor) {
    if (!contaAtiva) {
        exibirMensagem('Conta bloqueada. Não é possível realizar depósito.', 'erro');
        return;
    }
    if (valor > 0) {
        saldo += valor;
        historico.push(`Depósito: R$ ${valor.toFixed(2)}`);
        atualizarSaldo();
        exibirMensagem(`Depósito de R$ ${valor.toFixed(2)} realizado!`, 'sucesso');
    }
}

function sacar(valor) {
    if (!contaAtiva || valor > saldo) {
        exibirMensagem('Saldo insuficiente ou conta inativa!', 'erro');
        return;
    }
    if (valor > 0) {
        saldo -= valor;
        historico.push(`Saque: R$ ${valor.toFixed(2)}`);
        atualizarSaldo();
        exibirMensagem(`Saque de R$ ${valor.toFixed(2)} realizado!`, 'sucesso');
    }
}

function exibirMensagem(texto, tipo) {
    elMensagem.textContent = texto;
    elMensagem.style.display = 'block';
    elMensagem.className = tipo === 'sucesso' ? 'msg-sucesso' : 'msg-erro';
}

function bloquearConta() {
    contaAtiva = !contaAtiva;
    btnBloquear.textContent = contaAtiva ? '🔒 Bloquear conta' : '🔓 Desbloquear conta';
    exibirMensagem(contaAtiva ? "Conta desbloqueada!" : "Conta bloqueada!", 'sucesso');
}

function verResumo(){
    let totalDepositos = 0
    let TotalSaques = 0
    let TotalTransacoes = 0

    for (const transacao of historico){
        if (transacao.include('Depósitos')){
            totalDepositos++;
        } else if (transacao.include('Saque')){
            TotalSaques++
        }
        TotalTransacoes++
    }

    elTotalDepositos.textContent = totalDepositos
    elTotalSaques.textContent = TotalSaques
    elTotalTransacoes.textContent = elTotalTransacoes
}