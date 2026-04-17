# 🚀 Fleet Management System

Este repositório contém a solução para o desafio técnico de gerenciamento de veículos. O projeto foi desenvolvido com uma arquitetura moderna, focada em separação de responsabilidades, escalabilidade e uma experiência de usuário (UX) intuitiva.

## 🏗️ Arquitetura do Projeto

O ecossistema é dividido em duas frentes principais:

1.  **Backend (Node.js):** Uma API RESTful que gerencia o ciclo de vida dos dados dos veículos, utilizando persistência em sistema de arquivos (JSON) e seguindo padrões de Service Layer.
2.  **Frontend (Angular 16+):** Uma Single Page Application (SPA) robusta, utilizando componentes autônomos (Standalone) e uma interface baseada em Dashboard.

### Tecnologias Utilizadas
- **Runtime:** Node.js v21.7.3
- **Linguagem:** TypeScript / JavaScript
- **Framework Front-end:** Angular 17 (Standalone Components)
- **Framework Back-end:** Express.js
- **Estilização:** Tailwind CSS (Design Moderno)
- **Testes:** Mocha/Chai (Back) e Jasmine/Karma (Front)

---

## 🛠️ Decisões Técnicas e Boas Práticas

### 1. Separação de Responsabilidades (SoC)
O projeto foi estruturado para evitar o acoplamento. No backend, os **Controllers** lidam com as rotas e o protocolo HTTP, enquanto os **Services** concentram a lógica de manipulação de dados. No frontend, utilizamos o padrão de **Core/Features/Shared** para organizar o código de forma modular.

### 2. Validação e Integridade de Dados
Para garantir que o banco de dados (JSON) não receba informações corrompidas, foram implementados:
- **Reactive Forms:** Validações em tempo real no frontend.
- **Máscaras e Limites:** Filtros para Placa (Mercosul), Chassi (17 caracteres) e Renavam (11 dígitos).
- **Tratamento no Backend:** Endpoints preparados para validar a existência dos recursos antes de atualizações ou deleções.

### 3. Experiência do Usuário (UX)
O layout foi construído para ser limpo e profissional, utilizando **Tailwind CSS**. A interface conta com feedbacks visuais de erro, estados de carregamento (Spinner) e estados vazios quando não há veículos cadastrados.

---

## 🚀 Como Executar o Projeto

Certifique-se de estar utilizando o **Node.js v21.7.3**.

### Passo 1: Backend
```bash
cd backend
npm install
npm start
```
A API estará rodando em http://localhost:3000

Passo 2: Frontend
```bash
cd frontend
npm install
ng serve
```

Acesse a aplicação em http://localhost:4200

🧪 Testes Automatizados
Ambos os projetos possuem suítes de testes para garantir que as operações de CRUD funcionem corretamente:

No Backend:
```bash
npm test
```

No Frontend:
```bash
ng test
```

📂 Estrutura de Diretórios
```bash
├── backend/    
└── frontend/   
```
