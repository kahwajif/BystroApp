require('dotenv').config();

const config = require('config');
const express = require ('express');
const app = express ();
const mongoose = require('mongoose');

const databaseConnection = config.get('database.connection');
mongoose.connect(databaseConnection, {useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to database...'));

app.use(express.json());

const foodsRouter = require('./routes/foods');

app.use('/bystroApp', foodsRouter); //URL

//use port if its already set, otherwise use 3000
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}...`));
