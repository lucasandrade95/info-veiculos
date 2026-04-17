# 🚀 Veículos API - Backend

Este é o serviço de API REST para o sistema de gerenciamento de frota da InfoSistemas. Desenvolvido com foco em simplicidade, robustez e separação de responsabilidades.

## 🛠️ Tecnologias e Versões
- **Runtime:** Node.js v21.7.3
- **Framework:** Express.js
- **Testes:** Mocha, Chai e Supertest
- **Persistência:** File System (JSON)

## 🏗️ Arquitetura
O projeto segue o padrão de camadas para facilitar a manutenção:
- **Models:** Definição da estrutura de dados.
- **Services:** Lógica de negócio e manipulação de I/O (JSON).
- **Controllers:** Orquestração de requisições e respostas HTTP.
- **Routes:** Definição dos endpoints REST.

## 🏁 Como Inicializar

1. Entre no diretório:
   ```bash
   cd backend
   ```
Instale as dependências:

  ```bash
    npm install
  ```
Inicie o servidor:
  ```bash
  npm start
  ```
O servidor estará disponível em: http://localhost:3000

🧪 Testes Automatizados
Para garantir a integridade do CRUD, execute os testes unitários e de integração:

```bash
npm test
```

📝 Endpoints Principais
GET /api/veiculos - Lista todos os veículos.

POST /api/veiculos - Cadastra um novo veículo.

PUT /api/veiculos/:id - Atualiza dados de um veículo existente.

DELETE /api/veiculos/:id - Remove um veículo da base.
