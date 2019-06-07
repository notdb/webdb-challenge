const knex = require("knex");

const knexConfig = require("../knexfile.js");

const db = knex(knexConfig.development);

module.exports = {
  find,
  getProjectById,
  getActionsById,
  crustyAdd
};

function find() {
  return db("project");
}

function getProjectById(id) {
  return db("project")
    .select(["*"])
    .from("project")
    .where("project.id", "=", id)
    .first();
}

function getActionsById(id) {
  return db("action")
    .select("action.id", "action.description", "action.notes", "action.flag")
    .from("action")
    .where("action.project_id", "=", id);
}

async function crustyAdd(id) {
  let a = await getProjectById(id);
  let b = await getActionsById(id);
  return {
    ...a,
    actions: b
  };
}
