// app.js

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
// pour la sécurité
const helmet = require("helmet");


const path = require('path');
const sauceRoutes = require('./routes/sauce');
const userRoutes = require('./routes/user');

/* Utilisation du fichier .env pour stocker les données permettant de se connecter à la base de données
qui ne seront pas envoyées sur github */
require('dotenv').config();


// connexion à la base de données mongodb
mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.znzps.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,

{ useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

const app = express();
app.use(helmet());

// cors
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use(bodyParser.json());

app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/api/sauces', sauceRoutes);
app.use('/api/auth', userRoutes);

module.exports = app;
