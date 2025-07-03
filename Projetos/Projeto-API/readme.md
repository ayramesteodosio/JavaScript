# 🔹 Descrição Geral do Projeto
## 🎯 Objetivo: O objetivo deste projeto é desenvolver uma aplicação web que consome uma API pública RESTful e exibe os dados de forma dinâmica e organizada na interface do usuário. O foco principal é praticar a manipulação de requisições assíncronas utilizando Fetch API ou Axios, bem como o tratamento de dados recebidos (em formato JSON) e sua renderização no DOM.

### 📜 Requisitos Gerais:

#### 1. Escolha de API:

- O aluno deve escolher uma API pública da lista fornecida.

- Apenas métodos GET serão utilizados neste projeto.

#### 2. Funcionalidades obrigatórias:

- Botões para acionar diferentes requisições (ex.: Listar todos, Buscar por ID, Buscar aleatório, etc.);

- Área de exibição dos dados retornados da API;

- Renderização dos dados em elementos HTML personalizados (ex.: cards, listas, tabelas);

- Limpeza prévia da área de exibição antes de uma nova consulta (innerHTML = "").

#### 3. Manipulação de Dados:

- Tratar o JSON retornado e extrair as informações mais relevantes para exibição;

- Exibir feedback visual ao usuário em caso de erro ou requisição vazia (ex.: mensagem de erro, loading, etc.).

#### 4. Interface e Design:

- Layout organizado e responsivo;

- Uso de elementos visuais como cards, imagens, títulos, descrições;

- Utilização das classes CSS pré-definidas para manter um padrão visual.

#### 5. Código JavaScript:

- Utilização obrigatória de funções assíncronas (async/await) ou Promises;

- Manipulação do DOM para adicionar e remover elementos dinamicamente;

- Boas práticas de código: organização, indentação e comentários explicativos.

### 🏗️ Estrutura mínima esperada do projeto:

#### HTML:

- Botões de ação (GET all, GET by ID, GET random, etc.);

- Div/section para exibir os dados;

- Elementos auxiliares para mensagens de loading ou erro.

#### CSS:

- Estilo visual para os cards de exibição;

- Layout responsivo e agradável;

- Estilização dos botões e feedbacks visuais.

#### JavaScript:

- Funções separadas para cada requisição;

- Manipulação de dados JSON;

- Renderização dinâmica dos resultados;

- Tratamento de erros com mensagens apropriadas.