
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {id: 1, name: 'flour'},
        {id: 2, name: 'sugar'},
        {id: 3, name: 'egg'},
        {id: 4, name: 'broccoli'},
        {id: 5, name: 'cheese'},
        {id: 6, name: 'carrots'},
        {id: 7, name: 'beef'},
        {id: 8, name: 'pickles'},
        {id: 9, name: 'lettuce'},

      ]);
    });
};
