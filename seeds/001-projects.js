exports.seed = function(knex, Promise) {
  return knex("project").insert([
    { name: "A", description: "Test project name", flag: false },
    { name: "B", description: "Test project name one two three", flag: false },
    { name: "C", description: "project name", flag: false },
    { name: "D", description: "Test proe", flag: false },
    { name: "E", description: "Test name", flag: false }
  ]);
};
