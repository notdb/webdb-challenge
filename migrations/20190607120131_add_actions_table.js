exports.up = function(knex, Promise) {
  return knex.schema.createTable("action", function(table) {
    table.increments();
    table.string("description", 255);
    table.string("notes", 255);
    table.boolean("flag");
    table
      .integer("project_id")
      .notNullable()
      .references("id")
      .inTable("project");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("project");
};
