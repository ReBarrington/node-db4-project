
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {name: 'Chocolate Chip Cookies'},
        {name: 'Broccoli Cheese Soup'},
        {name: 'Mushroom Swiss Burgers'}
      ]);
    });
};
