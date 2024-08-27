// server/src/routes/index.js

const express = require('express');
const router = express.Router();
const plantRoutes = require('./plantRoutes');

// Ensure that the plant routes are being used correctly:
router.use(plantRoutes);

module.exports = router;
