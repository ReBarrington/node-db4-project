
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('steps').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        {step_order: '1', recipe_id: '1', description: 'Mix together:'},
        {step_order: '2', recipe_id: '1', description: 'Bake for 30min'},
        {step_order: '1', recipe_id: '2', description: 'Chop:'},
        {step_order: '2', recipe_id: '2', description: 'Put ingredients in large pot.'},
        {step_order: '3', recipe_id: '2', description: 'Keep on medium heat for 1 hour, stirring occasionally.'},
        {step_order: '1', recipe_id: '3', description: 'Heat pan to medium high.'},
        {step_order: '2', recipe_id: '3', description: 'Add toppings:'},
      ]);
    });
};
