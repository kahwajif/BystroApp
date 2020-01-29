const mongoose = require('mongoose');
const express = require('express');
const config = require('config');

const app = express();

// configure database
const databaseConnection = config.get('database.connection');
const databaseConfiguration = config.get('database.configuration');
mongoose.connect(databaseConnection, databaseConfiguration);

const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to database...'));

// configure server settings
app.use(express.json());

// configure routes
const router = require('./routes');
app.use('/', router);

// start application
const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
    console.log(`listening on port ${port}...`)
});


// graceful shutdown
const gracefulShutdown = () => {
    console.log('Stopping database connection and application...');
    db.close(() => {
        console.log('Database connection stopped...');
    });
    server.close(() => {
        console.log('Application stopped...');
    });
}

process.on('SIGTERM', gracefulShutdown);
process.on('SIGINT', gracefulShutdown);