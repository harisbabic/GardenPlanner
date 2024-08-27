// server/src/routes/index.js

const express = require('express');
const router = express.Router();
const plantRoutes = require('./plantRoutes');

// Use the plant routes with a base path
router.use('/api', plantRoutes);

module.exports = router;
