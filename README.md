# Sistema de Gestão de Entregas e Logística

[![Node.js](https://img.shields.io/badge/Node.js-22%2B-green.svg?logo=node.js)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-4.x-black.svg?logo=express)](https://expressjs.com/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6%2B-yellow.svg?logo=javascript)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-14%2B-blue.svg?logo=postgresql)](https://www.postgresql.org/)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

---

## Visão Geral

O **Sistema de Gestão de Entregas e Logística** é uma API backend desenvolvida para auxiliar empresas de logística no controle, organização e acompanhamento de entregas e motoristas.

A solução foi projetada com foco em **organização, escalabilidade e boas práticas de desenvolvimento**, oferecendo uma base sólida para evolução futura do sistema.

---

## 🎯 Objetivo do Sistema

- Centralizar o gerenciamento de entregas
- Organizar informações de motoristas
- Reduzir erros operacionais
- Facilitar o acompanhamento do fluxo logístico
- Servir como base para expansão futura

---

## 👥 Equipe de Desenvolvimento

Projeto desenvolvido por:

- **Gabriel Luiz**
- **Lucas Leal**
- **Rafael Mendes**
- **Vinícius Abreu**

Disciplina:  
**Desenvolvimento de Software com Formação BackEnd – JavaScript com Node.js + Express**

---

## 🏢 Público-Alvo

- Empresas de logística
- Transportadoras
- Empresas de distribuição
- Negócios que realizam entregas

---

## ⚙️ Tecnologias Utilizadas

- Node.js
- Express.js
- JavaScript (ES6+)
- API REST
- PostgreSQL
- Sequelize ORM
- dotenv
- nodemon
- Git e GitHub

---

## 🧱 Arquitetura do Sistema

O sistema segue uma **arquitetura em camadas**, promovendo separação de responsabilidades e facilitando manutenção e escalabilidade.

**Camadas principais:**
- Routes – Definição das rotas
- Controllers – Controle das requisições
- Services – Regras de negócio
- Models – Estrutura dos dados

---

## 📁 Estrutura do Projeto

```bash
Sistema_Entrega_Logistica/
├── config/
├── migrations/
├── models/
├── src/
│   ├── controllers/
│   ├── routes/
│   ├── services/
│   └── utils/
├── server.js
├── package.json
├── .env
└── README.md
```

---

📡 Funcionalidades

- Cadastro de clientes
- Cadastro de motoristas
- Cadastro de entregas
- Consulta de dados
- Organização do fluxo logístico
- API seguindo padrão REST

---

🔗 Documentação da API (Exemplos)

| Método | Endpoint    | Descrição          |
| ------ | ----------- | ------------------ |
| GET    | /clientes   | Lista clientes     |
| POST   | /clientes   | Cadastra cliente   |
| GET    | /motoristas | Lista motoristas   |
| POST   | /motoristas | Cadastra motorista |
| GET    | /entregas   | Lista entregas     |
| POST   | /entregas   | Cadastra entrega   |

---

⚙️ Configuração do Ambiente

Siga os passos abaixo para configurar o ambiente local de desenvolvimento.

📥 Clonar o repositório
git clone https://github.com/seu-usuario/Sistema_Entrega_Logistica.git
cd Sistema_Entrega_Logistica

---

📦 Instalar as dependências

Certifique-se de ter o Node.js (versão 18+) instalado.

npm install

---

🔑 Configurar variáveis de ambiente

Crie o arquivo .env a partir do exemplo fornecido:

cp .env.example .env

---

No Windows, caso o comando cp não funcione:
copy .env.example .env
Edite o arquivo .env e configure as credenciais do banco de dados e porta da aplicação.

---

🗄️ Banco de Dados e Migrações

Certifique-se de que o PostgreSQL esteja em execução.
Execute as migrações para criar as tabelas no banco de dados:

npx sequelize-cli db:migrate

---

▶️ Iniciar o servidor

npm start

Ou, em ambiente de desenvolvimento:

npm run dev

A aplicação estará disponível em:

http://localhost:3000

---

🚀 Implantação (Opcional)

Plataformas recomendadas:

Render

Railway

AWS

---

📄 Configuração de Deploy

Defina as variáveis de ambiente diretamente na plataforma de hospedagem:

PORT

DB_HOST

DB_USER

DB_PASSWORD

DB_NAME

DB_PORT

NODE_ENV=production

---

▶️ Executar migrações em produção
npx sequelize-cli db:migrate

---

🔄 CI/CD (Opcional)

O projeto pode ser integrado a pipelines de CI/CD utilizando GitHub Actions, permitindo:

Execução automática de testes

Build da aplicação

Deploy contínuo
