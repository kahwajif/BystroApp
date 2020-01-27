var express = require('express');
var router = express.Router();

const names = [
  { id: 1, name: "Timmeh" },
  { id: 2, name: "Oguzhan" },
  { id: 3, name: "Feras" },
  { id: 4, name: "Brian" },
  { id: 5, name: "Giovanni" }
]

/* GET users listing. */
router.post('/', function (req, res, next) {
  console.log(req.body);

  const user = names.filter(n => n.id == req.body.id);

  res.json({ users: user });
});

module.exports = router;
