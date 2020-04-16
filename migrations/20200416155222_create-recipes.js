
exports.up = function(knex) {
  return (
      knex.schema
        .createTable('recipes', tbl => {
            tbl.string('id').primary();
            tbl.string('name', 255).notNullable().unique();
        })
        .createTable('steps', tbl => {
            tbl.string('id', 255).primary();
            tbl.string('step_order').notNullable();
            // foreign key:
            tbl
                .string('recipe_id')
                .notNullable()
                .references('id')
                .inTable('recipes')
                .onDelete("RESTRICT")
                .onUpdate("CASCADE");
            tbl.string('description').notNullable();
        })
        .createTable('quantity', tbl => {
            tbl.string('id', 255).primary();
            tbl
                .string('ingredient_id')
                .notNullable()
                .references('id')
                .inTable('ingredients')
                .onDelete('RESTRICT')
                .onUpdate('CASCADE')
            tbl.float('quantity').notNullable()
            tbl.string('unit').notNullable()
            tbl
                .string('steps_id')
                .notNullable()
                .references('id')
                .inTable('steps')
                .onDelete('RESTRICT')
                .onUpdate('CASCADE')
        })
        .createTable('ingredients', tbl => {
            tbl.string('id', 255).primary();
            tbl.string('name').notNullable().unique();
        })
  )
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists("recipes")
    .dropTableIfExists("steps")
    .dropTableIfExists("quantity")
    .dropTableIfExists("ingredients")
};
