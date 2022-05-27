cd backend

nodemon server



git init                                     // puis un fichier .gitignore contenant node_modules
npm init                                     // server.js
npm install -g nodemon                       // server
npm install express
npm install mongoose                         // bdd
npm install mongoose-unique-validator        // sécurité bdd
npm install bcrypt                           // sécurité mdp
npm install jsonwebtoken                     // sécurité session

npm install helmet --save                    // pour la sécurité (pas encore installé le faire à la fin et supprimer ce com)


/* si besoin */
npm install --save dotenv