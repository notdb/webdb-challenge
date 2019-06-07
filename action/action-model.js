const knex = require("knex");

const knexConfig = require("../knexfile.js");

const db = knex(knexConfig.development);

module.exports = {
  findActions,
  addAction
};

function findActions() {
  return db("action");
}

function addAction(action) {
  return db("action").insert(action);
}
