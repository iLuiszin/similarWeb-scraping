# Projeto de Scraping e Armazenamento de Dados SimilarWeb

### Índice

<ul>
  <a href="#descrição"><li>Descrição</li></a>
  <a href="#instalação"><li>Instalação</li></a>
  <a href="#configure-o-arquivo-env"><li>Configure o arquivo .env</li></a>
  <a href="#criação-do-banco-de-dados"><li>Criação do Banco de Dados</li></a>
  <a href="#testes"><li>Testes</li></a>
  <a href="#estrutura-do-projeto"><li>Estrutura do Projeto</li></a>
</ul>

### Descrição

Este projeto consiste na criação de uma API em Node.js que realiza scraping de dados do site SimilarWeb e armazena essas informações em um banco de dados MongoDB. A aplicação utiliza o framework Express para a construção da API, o Mongoose para interação com o MongoDB, Jest para testes e Docker Compose para facilitar a configuração do ambiente.

### Instalação

##### Clone o repositório:

```
$ git clone https://github.com/iLuiszin/similarWeb-scraping.git
```

##### Acesse a pasta criada:

```
$ cd similarWeb-scraping
```

##### Instale as dependências:

```
$ npm install
```

---

### Configure o arquivo .env

```
Crie um arquivo `.env` na raiz do projeto e copie o conteúdo do arquivo `.env.example` para ele.
```

### Criação do Banco de Dados

##### Caso queira utilizar o docker compose:

```
$ docker compose up -d
```

---

### Execução da Aplicação

##### Inicie o projeto:

```
$ npm start
```

##### Acesse a documentação da API:

```
http://localhost:3000/api-docs
```

---

### Testes

##### Inicie o projeto:

```
$ npm test
```

---

### Estrutura do projeto

##### Tecnologias Utilizadas

<div style="display: inline_block"><br>

[![My Skills](https://skillicons.dev/icons?i=nodejs,express,mongodb,javascript,docker,jest)](https://skillicons.dev)

</div>

##### IDE Utilizada

<div>

[![My Skills](https://skillicons.dev/icons?i=vscode)](https://skillicons.dev)

</div>
