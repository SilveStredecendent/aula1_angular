# Gohita (Projeto de Estudos)

> Aplicação front-end desenvolvida para fins de estudo, aplicando conceitos de Angular, TypeScript e componentização.

## Sobre o Projeto

Este é um **projeto de estudos** focado em aplicar conceitos de desenvolvimento front-end com Angular.

O projeto está em constante evolução. Novas funcionalidades são implementadas progressivamente, acompanhando o avanço dos estudos. O objetivo principal é servir como um "playground" para testar e consolidar o aprendizado de forma prática.

## Features (Planejadas ou em Implementação)

As funcionalidades abaixo são implementadas ou planejadas conforme os tópicos de estudo são introduzidos:

* [x] Configuração de ambiente com Dev Containers (Codespaces)
* [x] Criação e estilização de componentes
* [x] Implementação de Roteamento (Angular Router)
* [ ] Data Binding (One-way e Two-way)
* [x] Uso de Diretivas (`*ngIf`, `*ngFor`)
* [x] Criação de Serviços (Services)
* [ ] Injeção de Dependências
* [ ] Consumo de APIs externas (com `HttpClientModule`)
* [ ] Formulários (Template-Driven ou Reactive Forms)
* [ ] Testes unitários

## Tecnologias Principais

* **Framework:** Angular
* **Linguagem:** TypeScript
* **Estilização:** SCSS / CSS
* **Ambiente:** GitHub Codespaces / Dev Containers (Docker)
* **Gerenciador de Pacotes:** NPM
* **Ferramentas (VS Code):** Prettier, ESLint

## Como Rodar o Projeto (Ambiente de Desenvolvimento)

Este projeto é configurado para ser executado dentro de um **Dev Container** (GitHub Codespaces ou VS Code Local). Isso garante que todo o ambiente (Node.js, Angular CLI e extensões) seja configurado automaticamente.

### Opção 1: GitHub Codespaces (Recomendado)

1.  Na página principal do repositório, clique em **"\<\> Code"** > **"Codespaces"**.
2.  Clique em **"Create codespace on main"**.
3.  O ambiente será criado e o comando `npm install` será executado automaticamente (via `postCreateCommand`).

### Opção 2: VS Code Local (Requer Docker)

1.  Clone o repositório e abra a pasta no VS Code.
2.  Tenha o [Docker Desktop](https://www.docker.com/products/docker-desktop/) rodando.
3.  O VS Code detectará a pasta `.devcontainer` e perguntará se você quer **"Reopen in Container"**. Clique sim.

---

### Iniciando a Aplicação

Após o contêiner carregar, abra o terminal do VS Code e execute:

```bash
ng serve