
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('quantity').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('quantity').insert([
        {ingredient_id: '1', quantity: '4', unit: 'cups', steps_id: '1'},
        {ingredient_id: '2', quantity: '2', unit: 'cups', steps_id: '1'},
        {ingredient_id: '3', quantity: '1', unit: ' ', steps_id: '1'},
        {ingredient_id: '4', quantity: '5', unit: ' ', steps_id: '1'},
        {ingredient_id: '5', quantity: '2', unit: 'lbs', steps_id: '1'},
        {ingredient_id: '6', quantity: '1', unit: 'lb', steps_id: '1'},
        {ingredient_id: '7', quantity: '2.5', unit: 'lbs', steps_id: '1'},
        {ingredient_id: '8', quantity: '3', unit: ' ', steps_id: '2'},
        {ingredient_id: '5', quantity: '1', unit: 'slice', steps_id: '2'},
        {ingredient_id: '9', quantity: '3', unit: 'leaves', steps_id: '2'}


      ]);
    });
};
