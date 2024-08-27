// server/src/routes/plantRoutes.js

const express = require('express');
const router = express.Router();
const PlantController = require('../controllers/PlantController');

// Ensure that the route is defined like this:
router.get('/plants', PlantController.getPlants);

module.exports = router;
