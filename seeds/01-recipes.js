
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {id: "1", name: 'Chocolate Chip Cookies'},
        {id: "2", name: 'Broccoli Cheese Soup'},
        {id: "3", name: 'Mushroom Swiss Burgers'}
      ]);
    });
};
