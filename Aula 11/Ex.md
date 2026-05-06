===========================PROJETO=====================================

# Projeto: Sistema Bancário v2.0 — Banco InovaWeb

O Banco InovaWeb evoluiu! Agora o sistema precisa de
**memória** — guardar cada transação e gerar relatórios.

Você vai expandir o `banco.js` da aula anterior
adicionando histórico e loops.


---

## Objetivos de Aprendizado

Ao final, você dominará:

- Criação e manipulação de arrays
- Percorrer arrays com `for...of` e `for` clássico  
- Usar `while` para controle de fluxo com condição  
- Integrar arrays e loops em funções existentes  

---

## Ponto de Partida

Seu `banco.js` da aula anterior deve ter:
- Variáveis da conta (`numeroConta`, `titular`, `saldo`, `contaAtiva`)
- Funções: `depositar()`, `sacar()`, `verExtrato()`, `bloquearConta()`

Adicione agora uma linha nova junto às variáveis da conta:

```javascript
const historico = []; // lista vazia que vai guardar cada transação
```

---

## Desafios

### Desafio 1 — Registrando Transações no Histórico

Cada vez que um depósito ou saque for realizado com sucesso,
o sistema deve guardar uma descrição dessa operação no `historico`.

Cada registro é simplesmente uma **string** descritiva:

```javascript
// Exemplos de como os registros ficam no array:
"Depósito: R$ 500.00 | Saldo: R$ 1500.00"
"Saque: R$ 200.00 | Saldo: R$ 1300.00"
```

Atualize as funções `depositar()` e `sacar()` para que,
após alterar o saldo com sucesso, adicionem uma string
descritiva ao `historico` com `push`.

- [ ] `depositar()` adiciona uma string ao `historico` após atualizar o saldo
- [ ] `sacar()` adiciona uma string ao `historico` após atualizar o saldo
- [ ] Operações inválidas NÃO são registradas

**Teste:**
```javascript
depositar(500);
sacar(200);
depositar(300);
console.log(historico);        // deve mostrar 3 strings
console.log(historico.length); // 3
console.log(historico[0]);     // 'Depósito: R$ 500.00 | Saldo: R$ 1500.00'
```

> **Dica de IA:** Peça ao Copilot para sugerir
> como montar a string descritiva usando template literal.
> Leia o código gerado e entenda cada parte
> antes de aceitar.

---

### Desafio 2 — Extrato com Loop

Atualize a função `verExtrato()` para percorrer
o `historico` e exibir cada transação.

- [ ] Use `for` ou `for...of` para percorrer o histórico
- [ ] Exibe cada transação numerada (1, 2, 3...)
- [ ] Se o histórico estiver vazio, exibe mensagem adequada
- [ ] Exibe apenas as **últimas 5** transações

**Saída esperada:**
```
══════════════════════════════════
         EXTRATO DA CONTA
══════════════════════════════════
Conta:   001
Titular: João Silva
──────────────────────────────────
1. Depósito: R$ 500.00 | Saldo: R$ 1500.00
2. Saque: R$ 200.00 | Saldo: R$ 1300.00
3. Depósito: R$ 300.00 | Saldo: R$ 1600.00
──────────────────────────────────
Saldo atual: R$ 1600.00
══════════════════════════════════
```

---

### Desafio 3 — Resumo com Loop e Condicionais

Crie a função `verResumo()` que percorre o histórico,
conta e soma cada tipo de transação.

- [ ] Percorre o `historico` com `for` ou `for...of`
- [ ] Identifica se a transação é depósito ou saque
- [ ] Conta a quantidade de cada tipo
- [ ] Exibe: quantidade de depósitos e de saques
- [ ] Exibe: número total de transações

**Saída esperada:**
```
RESUMO DA CONTA
──────────────────────────────────
Depósitos realizados: 2
Saques realizados:    1
Transações totais:    3
──────────────────────────────────
```

---

### Desafio 4 — Simulação com while

Crie a função `simularTentativasSaque(valor, maxTentativas)`
que simula um usuário tentando sacar um valor alto,
reduzindo em 20% a cada tentativa falha.

- [ ] Usa `while` com duas condições:
      tentativas restantes > 0 **E** valor > saldo
- [ ] A cada tentativa falha, exibe mensagem e reduz o valor em 20%
- [ ] Se encontrar um valor válido dentro do limite, realiza o saque
- [ ] Se esgotar as tentativas sem sucesso, exibe mensagem final

**Teste:**
```javascript
simularTentativasSaque(5000, 4);
```

**Saída esperada (com saldo de R$ 1600):**
```
🔄 Tentativa 1: R$ 5000.00 — saldo insuficiente
🔄 Tentativa 2: R$ 4000.00 — saldo insuficiente
🔄 Tentativa 3: R$ 3200.00 — saldo insuficiente
🔄 Tentativa 4: R$ 2560.00 — saldo insuficiente
❌ Tentativas esgotadas. Saque não realizado.
```

> **Dica de IA:** Descreva o problema em português
> antes de pedir código ao Copilot:
> *"Quero um while que roda enquanto tentativas > 0
> e valor > saldo, reduzindo o valor em 20% a cada volta"*

---

### Desafio 5 — Simulação Completa

Execute todas as funções em sequência e confirme
que o sistema funciona de ponta a ponta:

```javascript
verExtrato();                    // extrato inicial (vazio)
depositar(1000);
depositar(500);
sacar(200);
depositar(300);
sacar(100);
depositar(200);
sacar(9999);                     // deve falhar
verExtrato();                    // mostra últimas 5
verResumo();                     // mostra estatísticas
simularTentativasSaque(5000, 3); // simulação while
verExtrato();                    // extrato final
```

- [ ] Todas as funções executam sem erro
- [ ] O saldo final está matematicamente correto
- [ ] O extrato mostra apenas as últimas 5 transações
- [ ] O resumo bate com as operações realizadas

---

## 🏆 Desafio Extra — Busca no Histórico

Crie a função `buscarTransacoes(tipo)` que recebe
`'Depósito'` ou `'Saque'` e exibe todas as
transações daquele tipo.

- [ ] Percorre o `historico` com `for` ou `for...of`
- [ ] Usa `includes()` para filtrar pelo tipo recebido
- [ ] Exibe cada transação encontrada numerada
- [ ] Se nenhuma for encontrada, exibe mensagem adequada

**Teste:**
```javascript
buscarTransacoes('Saque');
buscarTransacoes('Depósito');
buscarTransacoes('Pix'); // nenhuma encontrada
```

---

## ✅ Critérios de Entrega

| Critério | |
|---|---|
| `historico` sendo preenchido nas operações válidas | ✅ |
| Extrato exibe transações numeradas com `for...of` | ✅ |
| `verResumo()` usa loop e condicionais | ✅ |
| `simularTentativasSaque()` usa `while` | ✅ |
| Simulação completa roda sem erros | ✅ |
| Saldo final matematicamente correto | ✅ |

---

## 💡 Dicas Gerais de IA

- **Um desafio por vez** — não cole o README inteiro
- Se travar, descreva o problema em português para a IA:
  *"Quero percorrer um array de strings e contar
  quantas contêm a palavra Depósito"*
- Use `console.log(historico)` para inspecionar
  o array a qualquer momento
- Leia todo código gerado pela IA antes de aceitar —
  se não entender uma linha, pergunte o que ela faz