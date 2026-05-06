const numeroConta = '001'
let titular = "Gabriel Oliveira"
let saldo = 1000
let contaAtiva = true
let statusConta
const historico = [];

console.log("══════════════════════════════════") 
console.log("        EXTRATO DA CONTA  ")
console.log("══════════════════════════════════")

function verExtrato(){
    if(contaAtiva){
        statusConta = "Ativa"
    } else {
        statusConta = "Inativa"
    }


console.log(`Conta: ${numeroConta}`)
console.log(`Titular: ${titular}`)
console.log(`Saldo: R$ ${saldo.toFixed(2)}`)

console.log("──────────────────────────────────")}

function depositar(valor){
    if(valor > 0){
        saldo = saldo + valor
        historico.push(`depósito: R$ ${valor} | Saldo: R$ ${saldo}`)
        //console.log( `Depósito de R$ ${valor.toFixed(2)} | Saldo: R$ ${saldo.toFixed(2)}`);
        for(let i = 1; i < historico.length; i++){
            console.log(`${i}. ${historico[i]}`);
        }
    } else {
        console.log("\nValor inválido para depósito!");
    }
}

function sacar(valor){
    if(valor > 0 && valor <= saldo && contaAtiva){
        saldo = saldo - valor
        historico.push(`Saque de R$ ${valor} | Saldo: R$ ${saldo}`)
    } else {
    console.log("\nValor inválido para saque ou conta inativa!");
}
}

function verResumo(){
    let nDepositos = 0 
    let nSaques = 0 
    let qtdTransacoes = 0 

    for (let i = 0; i <historico.length; i++){
        if(historico[i].includes("Depósitos")){
            nDepositos++
        } else {
            nSaques++
        }
        qtdTransacoes++
    }

    console.log("\nRESUMO DA CONTA")
    console.log("──────────────────────────────────")
    console.log(`Depósitos realizados: ${nDepositos}`)
    console.log(`Saques realizados: ${nSaques}`)
    console.log(`Transações totais: ${qtdTransacoes}`)

}

verExtrato()
depositar(500)
sacar(200)
depositar(300)
sacar(100)
depositar(200)
sacar(9999)
console.log(historico);
console.log(historico.length);
console.log(historico[0]);

console.log("──────────────────────────────────")
console.log(`Saldo atual: R$ ${saldo.toFixed(2)}`)
console.log("══════════════════════════════════\n");

verResumo()


