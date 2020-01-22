var router = require('express').Router();

// import routes
var users = require('./routes/users');

router.use('/api/v1/users', users);

module.exports = router;
