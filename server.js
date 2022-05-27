// server.js

// Importation du package HTTP de node.js pour avoir les outils de crétion de serveur
const http = require('http');
// Importation de l'application app.js
const app = require('./app');
/* voir si besoin
// Importation du package pour utiliser des variables d'environement
const dotenv = require('dotenv');
const dotResult = dotenv.config();
*/

const normalizePort = val => {
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    return val;
  }
  if (port >= 0) {
    return port;
  }
  return false;
};

// paramétrage du port avec la méthode set d'Express
const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

const errorHandler = error => {
  if (error.syscall !== 'listen') {
    throw error;
  }
  const address = server.address();
  const bind = typeof address === 'string' ? 'pipe ' + address : 'port: ' + port;
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges.');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use.');
      process.exit(1);
      break;
    default:
      throw error;
  }
};

/* La méthode createserver() qui a pour argument la fonction 
 qui sera appelé à chaque requête reçu par le serveur */
const server = http.createServer(app);

server.on('error', errorHandler);
server.on('listening', () => {
  const address = server.address();
  const bind = typeof address === 'string' ? 'pipe ' + address : 'port ' + port;
  console.log('Listening on ' + bind);
});

// le serveur écoute les requêtes sur le port
server.listen(port);
