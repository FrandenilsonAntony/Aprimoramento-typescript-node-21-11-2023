import {server} from './server/Server';

server.listen(process.env.PORT || 3333, () => {
  console.log(`Aplicativo rodando na porta: ${process.env.PORT || 3333}`);
});