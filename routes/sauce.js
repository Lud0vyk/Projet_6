// routes/sauce.js

// créatiion d'un router
const express = require('express');
const router = express.Router();

// importation du middleware d'autentification
const auth = require('../middleware/auth');
// importation du middleware multer
const multer = require('../middleware/multer-config');

// importation du stuffcontrollers
const stuffCtrl = require('../controllers/sauce');


// route /api/stuff pour aller chercher les objets en base de données
router.get('/', auth, sauceCtrl.getAllStuff);
// route POST pour envoyer des objets et fonction middleware
router.post('/', auth, multer, stuffCtrl.createSauce);
// route pour afficher un seul objet grâce à l'id dans la requête du frontend
router.get('/:id', auth, stuffCtrl.getOneSauce);
// route PUT pour modifier l'objet
router.put('/:id', auth, multer, stuffCtrl.modifySauce);
// route DELETE pour supprimer un objet
router.delete('/:id', auth, stuffCtrl.deleteSauce);

module.exports = router;