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
