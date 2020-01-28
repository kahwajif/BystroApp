require('dotenv').config()

const express = require ('express');
const app = express ();
const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to database...'));

app.use(express.json());

const foodsRouter = require('./routes/foods');
app.use('/food', foodsRouter);

/*
const foods = [
    { id: 1, food: "Timmeh" },
    { id: 2, food: "Chicken" },
    { id: 3, food: "Butter" },
    { id: 4, food: "Salt and Pepper" },
    { id: 5, food: "Alfredo" },
    { id: 6, food: "Mushroom" }
  ];


//defining route
app.get('/', (req, res) => {
    res.send('Hey Bystro!!');
});

app.get('/api/foods', (req, res) => {
    res.send(foods);
});

app.get('/api/foods/:id', (req, res) => {
    const food = foods.find(c => c.id === parseInt(req.params.id)); //parse string to int
    if (!food) res.status(404).send('The food with the given ID was not found.');
    res.send(food); // send food if id found
});

app.post('/api/foods', (req, res) => { //request handler goes to code block
    const food = {
        id: foods.length + 1,
        food: req.body.food
    };
    foods.push(food);
    res.send(food);
});
*/

//use port if its already set, otherwise use 3000
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}...`));
