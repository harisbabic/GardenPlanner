const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const routes = require('./routes');
const winston = require('winston');
const expressWinston = require('express-winston');

// Load environment variables from .env file
dotenv.config();

const app = express();

// Middleware for security and logging
app.use(helmet());
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

// Add request logging with Winston
app.use(expressWinston.logger({
  transports: [
    new winston.transports.File({ filename: 'server/src/logs/combined.log' })
  ],
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.json()
  )
}));

// Ensure that routes are being correctly used:
app.use(routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    winston.info(`Server is running on port ${PORT}`);
});

module.exports = app;
