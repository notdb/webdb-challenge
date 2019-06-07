const knex = require("knex");
const router = require("express").Router();

const Action = require("./action-model.js");

const knexConfig = require("../knexfile.js");

const db = knex(knexConfig.development);

router.get("/", async (req, res) => {
  try {
    const action = await Action.findActions();
    res.status(200).json(action);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/", async (req, res) => {
  try {
    const [id] = await Action.addAction(req.body, "id");
    const action = await db("action")
      .where({ id })
      .first();
    res.status(201).json(action);
  } catch (error) {
    const message = error[error.errno] || "We ran into an error";
    res.status(500).json({ message, error });
  }
});

module.exports = router;
