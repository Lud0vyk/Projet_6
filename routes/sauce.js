// routes/sauce.js

// création d'un router
const express = require('express');
const router = express.Router();

// importation du middleware d'autentification
const auth = require('../middleware/auth');
// importation du middleware multer
const multer = require('../middleware/multer-config');

// importation du sauceControllers
const sauceCtrl = require('../controllers/sauce');

//importation du controller like.js
const like = require('../controllers/like');


// route /api/stuff pour aller chercher les objets en base de données
router.get('/', auth, sauceCtrl.getAllSauce);
// route POST pour envoyer des objets et fonction middleware
router.post('/', auth, multer, sauceCtrl.createSauce);
// route pour afficher un seul objet grâce à l'id dans la requête du frontend
router.get('/:id', auth, sauceCtrl.getOneSauce);
// route PUT pour modifier l'objet
router.put('/:id', auth, multer, sauceCtrl.modifySauce);
// route DELETE pour supprimer un objet
router.delete('/:id', auth, sauceCtrl.deleteSauce);
// route pour les likes et les dislikes
router.post('/:id/like', auth, like.likeFromUser);




module.exports = router;