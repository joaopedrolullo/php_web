Este projeto consiste em criar um painel admistrativo utilizando a linguagem React com NodeJS.
Nele você pode cadastrar usuários, clientes, endereços e vincular os enderços aos clientes.

Para executar este projeto, faça os seguintes passos:

1 - Faça o clone do projeto;
2 - Instale o NodeJs versão v12.19.0 ou superior
3 - Instale as dependências do projeto com o npm/yarn
4 - Caso tenha optado pelo yarn, após as dependências instaladas, execute os comandos:
  - Na pasta backend, execute os comandos: 
    - Execute as migrations para criar o banco de dados: yarn typeorm migration:run
    - Execute o servidor: yarn dev
    
  - Na pasta web, execute o comando: yarn start
5 - Usuário e senha padrões:
  - Login: ADMIN
  - Senha: 1234
