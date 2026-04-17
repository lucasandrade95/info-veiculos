# 🎨 Fleet Manager - Frontend

Interface administrativa de alto desempenho desenvolvida para o gerenciamento de frotas da **InfoSistemas**. Este projeto foca em uma experiência de usuário (UX) fluida, código limpo e arquitetura escalável.

## 🛠️ Stack Tecnológica
- **Framework:** Angular 17
- **Estilização:** Tailwind CSS (Interface Moderna e Responsiva)
- **Gerenciamento de Formulários:** Reactive Forms com Validações Customizadas
- **Ambiente de Build:** Node.js v21.7.3
- **Testes:** Jasmine & Karma

## 🚀 Diferenciais Técnicos (Padrão Sênior)
- **Standalone Components:** Implementação seguindo as últimas recomendações do Angular, eliminando a complexidade de NgModules e otimizando o carregamento.
- **Lazy Loading:** Rotas configuradas para carregamento sob demanda, garantindo que o bundle inicial seja leve.
- **Arquitetura de Pastas:** Divisão clara entre `Core` (serviços e modelos globais), `Features` (lógica de negócio) e `Shared` (componentes reutilizáveis).
- **UX & Data Integrity:** - Máscaras visuais para placas (Padrão Mercosul).
  - Limites estritos de caracteres para Chassi (17) e Renavam (11).
  - Validações em tempo real com feedback visual para o usuário.
  - Bloqueio de submissão de formulários inválidos.

## 📂 Estrutura de Diretórios
```text
src/app/
├── core/           # Singleton services, modelos e guards de rota.
├── features/       # Módulos de negócio isolados (ex: veiculos-list).
├── shared/         # Componentes e utilitários globais (Navbar, Spinner).
├── app.routes.ts   # Definição de rotas com carregamento tardio.
└── app.config.ts   # Provedores globais da aplicação Standalone.
```
🏁 Como Executar o Projeto
Pré-requisitos: Certifique-se de estar usando o Node v21.7.3.

Instalar Dependências:

```bash
npm install
```

Rodar em Desenvolvimento:

```bash
ng serve
```

Acesse a aplicação em: http://localhost:4200

🧪 Suíte de Testes
Para rodar os testes unitários dos componentes e garantir a qualidade do código:

```bash
ng test
```
