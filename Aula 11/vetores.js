// vetores (Arrays)
const listaCompras = ["Tomate", "Cebola", "Farinha"];

// Acrescenta elemento novo no final
listaCompras.push("Limão"); 

// Acrescentando na posição específica (Índice 4)
listaCompras[4] = "Açucar";

// Consultando o vetor e o tamanho (usando ponto .)
console.log(listaCompras);
console.log(listaCompras.length);

// pop remove o último elemento e o armazena na variável
let removido = listaCompras.pop();

console.log("Elemento removido:", removido);
console.log("Lista atualizada:", listaCompras);

// Loop corrigido: (começo; condição de parada; incremento)

// 1. FOR CLÁSSICO
for(let i = 0; i < listaCompras.length; i++){
    console.log(`index ${i}: ${listaCompras[i]}`);
}

//laço enquanto
let x = 4 

while(x < 10){
    console.log(x)
    x++
}
console.log("--- Invertendo ---");

// 2. PERCORRENDO AO CONTRÁRIO
// Trocamos 'const' por 'let' para permitir o i--
for(let i = listaCompras.length - 1; i >= 0; i--){
    // Usando a variável i para acessar o item da lista
    console.log(`index ${i}: ${listaCompras[i]}`);
}

//diz qual o índice de um elemento de um vetor (Array)

console.log(listaCompras.indexOf("Cebola"))

