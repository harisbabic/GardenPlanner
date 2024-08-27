// server/src/index.js

const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const routes = require('./routes');
const winston = require('winston');
const expressWinston = require('express-winston');

dotenv.config();

const app = express();

app.use(helmet());
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: 'server/src/logs/combined.log' }),
    ],
});

app.use(expressWinston.logger({
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: 'server/src/logs/combined.log' }),
    ],
    format: winston.format.combine(
        winston.format.colorize(),
        winston.format.json()
    ),
}));

// Ensure the correct prefix is used here
app.use('/api', routes);

const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
    logger.info(`Server is running on port ${PORT}`);
});

module.exports = { app, server };
