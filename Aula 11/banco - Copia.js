const numeroConta = 1
let titular = "Gabriel Oliveira"
let saldo = 8000000
let contaAtiva = true
let statusConta

console.log(" ======= Banco Inovabank ======= ");

function verExtrato(){
    if(contaAtiva){
        statusConta = "Ativa"
    } else {
        statusConta = "Inativa"
    }


console.log(`Conta: ${numeroConta}`)
console.log(`Titular: ${titular}`)
console.log(`Saldo: R$ ${saldo.toFixed(2)}`);
console.log(`Status: ${statusConta}`);
}
function depositar(valor){
    if(valor > 0){
        saldo = saldo + valor
        console.log(`\nDepósito de R$ ${valor.toFixed(2)} realizado com sucesso!`);
    } else {
        console.log("\nValor inválido para depósito!");
    }
    console.log(`Novo saldo: R$ ${saldo.toFixed(2)}`);
}

function sacar(valor){
    if(valor > 0 && valor <= saldo && contaAtiva){
        saldo -= valor
        console.log(`\nSaque de R$ ${valor.toFixed(2)} realizado com sucesso!`);
    } else {
    console.log("\nValor inválido para saque ou conta inativa!");
}
console.log(`Novo saldo: R$ ${saldo.toFixed(2)}`);
}

function bloquearConta(){
    if(contaAtiva){
        contaAtiva = false
        console.log("\nConta bloqueada com sucesso!");
    } else {
        console.log("\nConta já está bloqueada!");
    }
}

verExtrato()
depositar(500)
sacar(200)
verExtrato()
bloquearConta()
bloquearConta()


console.log(" ======= Fim do Relatório ======= ");

