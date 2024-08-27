// server/src/routes/plantRoutes.js

const express = require('express');
const router = express.Router();
const PlantController = require('../controllers/PlantController');

// Correctly define the POST route for creating a plant
router.post('/plants', PlantController.createPlant);
router.get('/plants', PlantController.getPlants);

module.exports = router;
