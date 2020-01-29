const express = require('express');
const router = express.Router();
const Ingredient = require('../models/ingredient');

// POST: /api/ingredient/filter
router.post('/filter', async (req, res) => {
    return res.status(501);
});

module.exports = router;
