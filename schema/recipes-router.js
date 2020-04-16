const express = require('express');
const Recipes = require('./recipes-model.js');

const router = express.Router();

router.get('/', (req, res) => {
    Recipes.getRecipes()
    .then(recipes => {
        res.status(200).json(recipes)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({ message: 'Failed to get Recipes'})
    });
})

module.exports = router;