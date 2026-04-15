# 🚀 Projeto InovaWeb — Página Bootstrap

A **InovaWeb** precisa de uma landing page moderna e responsiva 
para apresentar seus serviços ao mercado. Você foi designado 
para criar essa página usando **Bootstrap 5**.

A página deve funcionar perfeitamente em **mobile, tablet e desktop**.

---

## 📋 Objetivos de Aprendizado

Ao final, você dominará:
✅ Incluir Bootstrap via CDN  
✅ Usar o sistema de grid (container, row, col)  
✅ Aplicar breakpoints para responsividade  
✅ Usar componentes prontos: navbar, cards e botões  
✅ Aplicar classes utilitárias de espaçamento e cor  

---

## 🏗️ Estrutura da Página

Sua página deve ter exatamente estas seções, nesta ordem:

| # | Seção | Componente Bootstrap |
|---|---|---|
| 1 | Navegação | Navbar responsiva |
| 2 | Hero | Jumbotron com grid |
| 3 | Serviços | Cards em grid |
| 4 | Rodapé | Footer simples |

---

## 🎮 Desafios do Projeto

### **Desafio 1: Configuração inicial**

- [✅] Crie o arquivo `inovaweb-bootstrap.html`  
- [ ] Inclua o CSS do Bootstrap 5 no `<head>` via CDN  
- [ ] Inclua o JS do Bootstrap antes do `</body>` via CDN  
- [ ] Abra no Live Server e confirme que o Bootstrap carregou  

> **Dica:** Digite `btn` no body e aplique a classe `btn btn-primary` 
> em um botão. Se ele ficar azul e estilizado, o Bootstrap está funcionando.

---

### **Desafio 2: Navbar Responsiva**

Crie uma navbar que:

- [✅] Tenha o nome **InovaWeb** como marca (navbar-brand)  
- [✅] Tenha fundo azul escuro (`bg-primary` ou `bg-dark`)  
- [✅] Tenha 3 links: Home, Serviços, Contato  
- [✅] Colapse em um menu hambúrguer no mobile  
- [✅] Os links fiquem alinhados à direita no desktop  

> **Dica:** Use `navbar-expand-lg` para colapsar abaixo de 992px  
> e `ms-auto` na `<ul>` para empurrar os links para a direita.

---

### **Desafio 3: Seção Hero**

Crie uma seção de destaque que:

- [✅] Tenha fundo colorido ou gradiente  
- [✅] Tenha um título grande com a classe `display-4`  
- [✅] Tenha um subtítulo com a classe `lead`  
- [✅] Tenha um botão de call-to-action (`btn btn-light` ou similar)  
- [✅] O conteúdo fique centralizado (`text-center`)  
- [✅] Tenha espaçamento interno generoso (`py-5`)  

> **Dica:** Use `class="container py-5 text-center"` como wrapper  
> e `class="bg-primary text-white"` na section para o fundo azul.

---

### **Desafio 4: Seção de Serviços com Cards**

Crie uma seção com **3 cards de serviços** que:

- [✅] No mobile: fiquem empilhados (col-12)  
- [✅] No tablet: fiquem em 2 colunas (col-md-6)  
- [✅] No desktop: fiquem em 3 colunas lado a lado (col-lg-4)  
- [✅] Cada card tenha: título, descrição e botão "Saiba mais"  
- [✅] Os cards tenham a mesma altura (use `h-100` no card)  
- [✅] Tenha espaçamento entre os cards (use `g-4` na row)  

**Conteúdo sugerido para os cards:**

| Card | Título | Descrição |
|---|---|---|
| 1 | Desenvolvimento Web | Sites modernos e responsivos para sua empresa |
| 2 | Design com IA | Layouts e imagens gerados com inteligência artificial |
| 3 | Consultoria Digital | Estratégia de presença digital para seu negócio |

> **Dica:** A estrutura base de um card Bootstrap é:  
> `<div class="card h-100"><div class="card-body">...</div></div>`

---

### **Desafio 5: Rodapé**

Crie um footer que:

- [✅ ] Tenha fundo escuro (`bg-dark text-white`)  
- [✅ ] Tenha o texto de copyright centralizado  
- [✅ ] Tenha padding vertical adequado (`py-3`)  

---

## 🏆 Desafio Extra
Adicione **uma dessas melhorias** na sua página:

- [✅] **Badge** no card mais popular: 
`<span class="badge bg-warning text-dark">Popular</span>`  
- [✅] **Ícones Bootstrap:** inclua a biblioteca de ícones do Bootstrap 
e adicione um ícone em cada card  
- [✅] **CSS customizado:** crie um `style.css` externo e sobrescreva 
a cor primária do Bootstrap com a paleta da InovaWeb definida na Aula 3  

---

## ✅ Critérios de Entrega

Sua página será avaliada nos seguintes pontos:

| Critério | Pontos |
|---|---|
| Bootstrap incluído corretamente via CDN | ✅ |
| Navbar responsiva com hambúrguer no mobile | ✅ |
| Grid com breakpoints funcionando | ✅ |
| 3 cards de serviços com layout responsivo | ✅ |
| Footer presente | ✅ |
| Página abre sem erros no Live Server | ✅ |
