# API – Sistema de Gestão de Entregas e Logística

Node.js • Express • PostgreSQL • Sequelize • Licença MIT

---

## Instituições de Fomento e Parceria

- Instituto Federal de Educação, Ciência e Tecnologia
- Instituto Hardware BR - HBR
- Curso: **Desenvolvimento de Software – Formação Back-End**

---

## Orientador

- **Tiago Segato**  
  - LinkedIn: https://www.https://www.linkedin.com/in/tiagosegato/
  - GitHub: https://https://github.com/tiagosegato

---

## Sumário

- Visão Geral  
- Tecnologias Utilizadas  
- Estrutura do Projeto  
- Diagrama de Banco de Dados  
- Funcionalidades  
- Documentação da API  
- Configuração do Ambiente  
- Implantação  

---

## Visão Geral

O **Sistema de Gestão de Entregas e Logística** é uma API backend desenvolvida para auxiliar empresas de logística no controle, organização e acompanhamento de entregas e motoristas.

O sistema resolve problemas comuns do setor logístico, como:
- Falta de organização no controle de entregas
- Dificuldade no acompanhamento do status das entregas
- Erros operacionais por processos manuais
- Falta de centralização das informações

O público-alvo inclui **transportadoras, empresas de logística, distribuidoras e negócios que realizam entregas**, oferecendo uma base sólida, escalável e preparada para evoluções futuras.

---

## Tecnologias Utilizadas

| Tecnologia     | Versão Recomendada | Descrição |
|---------------|-------------------|----------|
| Node.js       | >= 18             | Ambiente de execução JavaScript |
| Express.js    | ^4.x              | Framework web para APIs REST |
| PostgreSQL    | >= 14             | Banco de dados relacional |
| Sequelize     | mais recente      | ORM para Node.js |
| dotenv        | mais recente      | Gerenciamento de variáveis de ambiente |
| nodemon       | mais recente      | Reinicialização automática em desenvolvimento |
| Git / GitHub  | -                 | Versionamento e controle de código |

> 📌 **Nota:** Consulte o arquivo `package.json` para a lista completa e versões exatas das dependências.

---

## Estrutura do Projeto

```bash
Sistema_Entrega_Logistica/
├── config/
│   └── database.js
├── migrations/
├── models/
├── src/
│   ├── controllers/
│   ├── routes/
│   ├── services/
│   └── utils/
├── server.js
├── package.json
├── .env.example
└── README.md
```

---

Funcionalidades

- Cadastro de motoristas
- Listagem, atualização e exclusão de motoristas
- Cadastro de entregas
- Acompanhamento do status das entregas
- Associação de entregas a motoristas
- Organização e centralização das informações logísticas
- Estrutura preparada para autenticação e controle de permissões

---

Documentação da API

A API segue o padrão REST, utilizando requisições HTTP e respostas em formato JSON.

Principais Endpoints
Método	Endpoint	Descrição	Autenticação
GET	/motoristas	Lista todos os motoristas	Sim
POST	/motoristas	Cadastra um novo motorista	Sim
GET	/motoristas/:id	Detalha um motorista	Sim
PUT	/motoristas/:id	Atualiza um motorista	Sim
DELETE	/motoristas/:id	Remove um motorista	Sim
GET	/entregas	Lista todas as entregas	Sim
POST	/entregas	Cadastra uma entrega	Sim
PUT	/entregas/:id	Atualiza status da entrega	Sim

📌 Detalhes:
Os schemas de requisição e resposta seguem boas práticas REST e podem ser facilmente documentados com Swagger futuramente.

---

Configuração do Ambiente

Siga os passos abaixo para configurar o ambiente local.

Clonar o repositório
```bash
git clone https://github.com/seu-usuario/Sistema_Entrega_Logistica.git
cd Sistema_Entrega_Logistica
```

Instalar as dependências
```bash
npm install

```

Configurar variáveis de ambiente

```bash
cp .env.example .env

```

Edite o arquivo .env com suas credenciais:
```bash
PORT=3000
DB_HOST=localhost
DB_USER=postgres
DB_PASSWORD=senha
DB_NAME=logistica
DB_PORT=5432
```

Executar migrações e iniciar o servidor
```bash
npx sequelize-cli db:migrate
npm start
```

Ou em modo desenvolvimento:
```bash
npm run dev
```

---

Passos gerais

1. Configurar variáveis de ambiente na plataforma

2. Executar as migrações em produção:
```bash
npx sequelize-cli db:migrate
```

3.Iniciar a aplicação

---

Licença

Este projeto está licenciado sob a Licença MIT.

---

Execução automática de testes

Build da aplicação

Deploy contínuo
