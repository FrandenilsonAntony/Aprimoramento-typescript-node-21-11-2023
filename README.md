# Aprimoramento-typescript-node-21-11-2023

Criação de CRUD de usuários, Cidades e login de acesso.

PROJETO EM TYPESCRIPT:
FERRAMENTAS: VSCODE, NODE, TYPESCRIPT, GITHUB.

Inicio:

-1. Criar pasta com nome do seu projeto.
-2. Abrir a pasta no VScode, aperte Ctrl+Shift+', no terminal(cmd) digitar: yarn init   //(!yarn, npm install --global yarn)
-3. Verifique se instalou corretamente com o comando: yarn --version
-4. Configure: nome do projeto; version; Descrição; Autor; Private: False
-5. No terminal cmd instale o Express com o comando: yarn add express
-6. Em seguida instale novas dependências e tipagem com o comando:
   yarn add -D typescript @types/express ts-node-dev                                   //(Integração de tipagem com typescript with express)
  -6.1. Na raiz do projeto crie o arquivo .gitignore antes de fazer commit no GitHub
    -6.1.1. Dentro de .gitignore digite o arquivo a ser ignorado pelo GitHub: 
      /node_modules 
-7. Crie a pasta src na raiz do projeto, e dentro da pasta crie o arquivo index.ts
  -7.1. Dentro da pasta src crie a pasta server, e dentro da server crie o arquivo Server.ts
    -7.2. Inserir código no arquivo index.ts da pasta src:
       import {server} from './server/Server';   
       server.listen(3333, () => console.log('Aplicação rodando!'));
        -7.3. Inserir código no arquivo Server.ts:
          import  express  from "express";

          const server = express();

          server.get('/', (req, res) => {
  
          return res.send('Olá, Dev'); 
          });

          export {server};
-10. No terminal rode o projeto com o comando:
  yarn ts-node-dev ./src/index.ts
-11. Abra o navegador e digite: localhost:3333 <Deverá aparecer a mensagem: Olá, Dev!>
-12. No terminal(cmd) install ESLint with comando: npx eslint --init
  -12.1 Aperte Ctrl+Shift+X, pesquise por ESLint e instale a extensão para validação  
-13. Install Editorconfig, aperte Ctrl+Shift+X, pesquise por editorconfig, e instale a extenção.
  -13.1 Na raiz of project, click Botoom rigth and click generation config
-14. Install thuderClient para testar aplicação Backend
  -14.1 Aperte Ctrl+Shift+X, pesquise por ThunderClient e instale a extenção
-15. No package.json substitua o código por:
{
  "name": "Name-do-Seu-Project",
  "version": "1.0.0",
  "main": "index.js",
  "repository": "https://",
  "author": "Frandenilson Antony (iabyantony88@gmail.com)",
  "license": "MIT",
  "private": false,
  "scripts": {
    "start": "yarn ts-node-dev ./src/index.ts"  //script adcionado para rodar o projeto com o comando: yarn start
  },
  "dependencies": {
    "express": "^4.18.2",
    "http-status-codes": "^2.3.0"
  },
  "devDependencies": {
    "@types/express": "^4.17.21",
    "@types/http-status-codes": "^1.2.0",
    "@typescript-eslint/eslint-plugin": "^6.12.0",
    "@typescript-eslint/parser": "^6.12.0",
    "eslint": "^8.54.0",
    "ts-node-dev": "^2.0.0",
    "typescript": "^5.3.2"
  }
-16. No aquivo Server.ts isira o novo código:
import  express  from 'express';
import {router} from './routes';

const server = express();

server.use(express.json());

server.use(router);

export {server}; 
  -16.1. Na pasta server crie a pasta routes e dentro dela crie o arquivo index.ts e add o código:
import {Router} from 'express';

const router = Router();


router.get('/', (_, res) => {
   
  return res.send('Olá, Dev'); 
});

router.post('/teste', (req, res) => {
  console.log(req.body);

  return res.json(req.body); 
});

export {router};
-17. Vá no terminal cmd e digite a linha de comando para instalar nova biblioteca(httpstatuscode) com o comando: yarn add http-status-codes
  -17.1. Apos concluir o passo anterior instale o complemento: yarn add -D @types/http-status-codes 
-18. Na raiz do projeto crie .env e digite o código:
  PORT=3333
  NODE_ENV=dev
  -18.1. Apos criar o .env e add o códico, vá na pasta src e no arquivo index.ts, insira o código:
     import {server} from './server/Server';
     server.listen(process.env.PORT || 3333, () => {
     console.log(`Aplicativo rodando na porta: ${process.env.PORT || 3333}`);  
     }); 
    -18.2. Vá no terminal(cmd) e instale a bliblioteca dotenv(serve para inicializar as variáveis ambiente dentro do projeto) com o comando: yarn add dotenv
-19. Vá no arquivo Server.ts e importe dontenv
  import  express  from 'express';
  import 'dotenv/config';
  
  import {router} from './routes';

  const server = express();

  server.use(express.json());

  server.use(router);

  export {server}; 
-20. Na raiz do projeto, click em .env copie e cole o arquivo, renomeie para .env.example e insira o código:
  PORT=
  NODE_ENV=dev 
  -20.1. No arquivo .gitignore, digite: .env                                      //antes do commit no GitHub
-21. Na raiz do projeto crie o arquivo teste.js, e adicione o código:             
  console.log('App run OK!');
  -21.1. Aperte Ctrl+Shift+' para abrir o terminal(cmd) e digite o comando:
    node ./teste.js                                                               //  Comando para rodar o arquivo em javascript 
      -21.2. Mensagem imprimida: App run OK!
-22. No terminal digite o código:
  yarn tsc --init
-23. No terminal instale tsconfig.jason com o comando:yarn                        // Comando cria arquivo para conversão de typescript para javascript
  yarn tsc --init 
-24. No terminal teste a apliação com o comando:
  node ./src/index.js                                                             //Busca na raiz do projeto o aquivo convertido em index.js
-25. Apos verificar, pode exclir os arquivos criados em .js
-26. No arquivo tsconfig.json procure remova as duas barras: // (descomenta) 
  "outDir": prencha com  "./build",
-27. Procure pelo: "rootDir": "./", e descomenta.
  Ficará:  "rootDir": "./src", direcionando a raiz do projeto
-28. Agora, no terminal(cmd) digite:
  yarn tsc
    -28.1 Após compilar o comando criará a Pasta build na raiz do projeto
-29. Agora, teste a aplicação com o comando:
  node ./build/index.js  
#Aplicativo rodando na porta: 5050# 
