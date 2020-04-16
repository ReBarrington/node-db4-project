const db = require('../data/db-config.js');

// getRecipes(): should return a list of all recipes in the database.
// getShoppingList(recipe_id): should return a list of all ingredients and quantities for a given recipe
// getInstructions(recipe_id): should return a list of step by step instructions for preparing a recipe

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
}

function getRecipes() {
    return db('recipes');
}

function getShoppingList(recipe_id) {
    db('quantity')
        .select('Ingredients.name as Ingredient', 'Quantity.quantity', 'Quantity.unit')
        .join('Recipes', 'Recipes.id', 'Steps.recipe_id')
        .join('Ingredients', 'Quantity.ingredient_id', 'Ingredients.id')
        .join('Steps', 'Quantity.steps_id', 'Steps.id')
        .where('Recipes.id', recipe_id);
}

// SELECT Recipes.name as Recipe, Ingredients.name as Ingredient, Quantity.quantity, Quantity.unit
// FROM Quantity
// join Recipes on Recipes.id = Steps.recipe_id
// join Ingredients on Quantity.ingredient_id = Ingredients.id
// join Steps on Quantity.steps_id = Steps.id
// where Recipes.id = ID

function getInstructions(recipe_id) {
    db('steps')
        .where('Steps.recipe_id', recipe_id)
        .orderBy('Steps.step_order');
}