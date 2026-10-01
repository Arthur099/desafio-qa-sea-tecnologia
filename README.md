# Desafio QA — SEA Tecnologia

Projeto de automação de testes desenvolvido como parte do desafio prático para a posição de **Analista de Testes (QA)**.

A automação foi desenvolvida utilizando **Cypress** e tem como objetivo validar funcionalidades da aplicação disponibilizada para o desafio.

## Tecnologias utilizadas

- Cypress
- JavaScript
- Node.js
- Git
- GitHub

## Aplicação testada

Aplicação disponibilizada pela SEA Tecnologia:

https://analista-teste.seatecnologia.com.br/

## Estrutura do projeto

```text
automacao-sea/
├── cypress/
│   ├── e2e/
│   │   └── funcionarios.cy.js
│   ├── fixtures/
│   └── support/
├── .gitignore
├── cypress.config.js
├── package.json
└── package-lock.json
```

## Cenário automatizado

### Cadastro de funcionário ativo

O teste automatizado realiza o seguinte fluxo:

1. Acessa a aplicação.
2. Abre a tela de cadastro de funcionário.
3. Define o funcionário como ativo.
4. Preenche os dados necessários.
5. Salva o cadastro.
6. Retorna à listagem de funcionários.
7. Valida se o funcionário cadastrado está visível na listagem.

A validação final utiliza uma asserção do Cypress para confirmar que o funcionário foi apresentado na interface após o cadastro.

Exemplo:

```javascript
cy.contains('automação 01')
  .should('be.visible')
```

## Como executar o projeto

### Pré-requisitos

É necessário possuir:

- Node.js
- npm
- Git

### Instalação

Clone o repositório:

```bash
git clone https://github.com/Arthur099/desafio-qa-sea-tecnologia.git
```

Entre na pasta:

```bash
cd desafio-qa-sea-tecnologia
```

Instale as dependências:

```bash
npm install
```

## Executando os testes

Para abrir a interface do Cypress:

```bash
npx cypress open
```

Depois:

1. Selecione **E2E Testing**.
2. Escolha o navegador.
3. Execute o arquivo `funcionarios.cy.js`.

Também é possível executar os testes diretamente pelo terminal:

```bash
npx cypress run
```

## Validações realizadas

Durante a exploração e execução dos testes foram observados cenários relacionados a:

- Cadastro de funcionário.
- Campos obrigatórios.
- Status ativo/inativo.
- Utilização de EPI.
- Filtro de funcionários ativos.
- Listagem de funcionários.
- Integração entre interface Web e API.
- Persistência dos dados cadastrados.

## Autor

Projeto desenvolvido para o desafio prático de QA da SEA Tecnologia.