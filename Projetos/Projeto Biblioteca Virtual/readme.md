# 🔹 Projeto 4: Biblioteca Pessoal

## 🎯 Objetivo do Projeto Desenvolver um sistema para gerenciar uma coleção de livros pessoais, permitindo controlar quais livros foram lidos e quais ainda faltam ler. Os dados devem ser armazenados no LocalStorage.

### 🔧 Funcionalidades Obrigatórias

#### 1. Adicionar novo livro à biblioteca

- Campos obrigatórios: ✔️ Título do livro ✔️ Autor ✔️ Ano de publicação ✔️ Status de leitura (Lido / Não lido - via dropdown ou checkbox)

- O livro é salvo no LocalStorage.

#### 2. Listar livros cadastrados

- Exibir os livros em cards individuais.

- Cada card deve conter: ✔️ Título ✔️ Autor ✔️ Ano ✔️ Status: Lido / Não lido

#### 3. Editar informações do livro

- Permitir alteração de qualquer campo do livro.

#### 4. Excluir livro da biblioteca

- Remover o livro selecionado da lista e do LocalStorage.

#### 5. Filtrar livros por status de leitura

-  Opção de exibir apenas livros lidos ou apenas não lidos.

#### 6. Persistência de dados via LocalStorage

-  Todos os dados salvos e carregados automaticamente do LocalStorage.

### 🖼️ Sugestão de Estrutura do Card

```
<div class="book-card">
  <h3>Título do Livro</h3>
  <p>Autor: Nome do Autor</p>
  <p>Ano: 2020</p>
  <p>Status: <span>Lido</span></p>
  <button>Editar</button>
  <button>Excluir</button>
</div>
```

### 🎨 Sugestão de Elementos da Página (HTML)

- Formulário para adicionar novo livro (Título, Autor, Ano, Status, Botão "Adicionar").

- Dropdown ou botões para filtrar livros por status (Lidos / Não Lidos).

- Área (div) onde os cards dos livros serão renderizados.

### 💡 Extras (Para alunos que quiserem ir além):

- Contador de livros lidos e não lidos.

- Barra de progresso mostrando o percentual de leitura da biblioteca.

- Imagem da capa do livro (opcional via URL).

- Exportar a biblioteca como JSON.