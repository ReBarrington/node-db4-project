
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('quantity').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('quantity').insert([
        {id: 1, ingredient_id: '1', quantity: '4', unit: 'cups', steps_id: '1'},
        {id: 2, ingredient_id: '2', quantity: '2', unit: 'cups', steps_id: '1'},
        {id: 3, ingredient_id: '3', quantity: '10', unit: 'grams', steps_id: '1'},
        {id: 4, ingredient_id: '4', quantity: '2', unit: 'lbs', steps_id: '1'},
        {id: 5, ingredient_id: '5', quantity: '2', unit: 'lbs', steps_id: '1'},
        {id: 6, ingredient_id: '6', quantity: '1', unit: 'lb', steps_id: '1'},
        {id: 7, ingredient_id: '7', quantity: '2.5', unit: 'lbs', steps_id: '1'},
        {id: 8, ingredient_id: '8', quantity: '3', unit: 'slices', steps_id: '2'},
        {id: 9, ingredient_id: '5', quantity: '1', unit: 'slice', steps_id: '2'},
        {id: 10, ingredient_id: '9', quantity: '3', unit: 'leaves', steps_id: '2'}
      ]);
    });
};
