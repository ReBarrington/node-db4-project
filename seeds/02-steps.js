
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('steps').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        {id: 1, step_order: '1', recipe_id: '1', description: 'Mix together:'},
        {id: 2, step_order: '2', recipe_id: '1', description: 'Bake for 30min'},
        {id: 3, step_order: '1', recipe_id: '2', description: 'Chop:'},
        {id: 4, step_order: '2', recipe_id: '2', description: 'Put ingredients in large pot.'},
        {id: 5, step_order: '3', recipe_id: '2', description: 'Keep on medium heat for 1 hour, stirring occasionally.'},
        {id: 6, step_order: '1', recipe_id: '3', description: 'Heat pan to medium high.'},
        {id: 7, step_order: '2', recipe_id: '3', description: 'Add toppings:'},
      ]);
    });
};
