const express = require ('express');
const app = express ();

app.use(express.json());

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

//use port if its already set, otherwise use 3000
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}...`));
