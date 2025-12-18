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

---

📡 Funcionalidades

Cadastro de clientes

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

