# CypressWEB

## Estrutura do Projeto


Este projeto é um exemplo de aplicação desenvolvida em Cypress + JS. Ele demonstra a implementação de testes automatizados de interface e serve como um guia para entender como estruturar e organizar o código para projetos similares.

## Funcionalidades

- **Side Menu**: Contém testes e validações da funcionalidade do Menu Lateral do site da [OrangeHRM](https://opensource-demo.orangehrmlive.com/) 

## Estrutura do Projeto

```plaintext
├── cypress.config.js
├── cypress
    ├── e2e
    │   └── spec.cy.js
    ├── fixtures
    │   └── example.json
    └── support
    │   ├── commands.js
    │   └── e2e.js
├── node_modules
├── package-lock.json
├── package.json
└── README.md
```


## Requisitos Básicos

### Node.js (Obrigatório)
Cypress é executado com **Node.js**, então você precisa tê-lo instalado.
- **Versão recomendada:** Node.js 18 ou superior  
- Para verificar se já está instalado:
  ```sh
  node -v
  ```
- Se precisar instalar, baixe em: [https://nodejs.org](https://nodejs.org)

### NPM ou Yarn (Gerenciador de Pacotes)
- O **NPM** já vem junto com o Node.js, mas se quiser usar o **Yarn**, instale com:
  ```sh
  npm install -g yarn
  ```
- Para verificar a versão do NPM:
  ```sh
  npm -v
  ```

## Instalação do Cypress
Se você já tem **Node.js** e **NPM/Yarn**, agora pode instalar o Cypress.

### Opção 1: Usando NPM
```sh
npm install cypress --save-dev
```

### Opção 2: Usando Yarn
```sh
yarn add cypress --dev
```
Isso instala o Cypress como uma **dependência de desenvolvimento** dentro do seu projeto.

## Rodando o Cypress
Após a instalação, você pode rodar o Cypress no modo gráfico:
```sh
npx cypress open
```

Ou rodar os testes direto no terminal (modo headless):
```sh
npx cypress run
```

## 🔥 Resumo Rápido
| Requisito  | Comando |
|------------|----------|
| **Node.js** | `node -v` |
| **NPM** | `npm -v` |
| **Instalar Cypress** | `npm install cypress --save-dev` |
| **Abrir Cypress** | `npx cypress open` |
| **Rodar testes (headless)** | `npx cypress run` |

Com isso, seu ambiente estará pronto para rodar testes no **Cypress! 🚀**

