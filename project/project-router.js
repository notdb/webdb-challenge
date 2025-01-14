const knex = require("knex");
const router = require("express").Router();

const Project = require("./project-model.js");

const knexConfig = require("../knexfile.js");

const db = knex(knexConfig.development);

router.get("/", async (req, res) => {
  try {
    const project = await Project.find();
    res.status(200).json(project);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const project = await Project.crustyAdd(req.params.id);
    res.status(200).json(project);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/", async (req, res) => {
  try {
    const [id] = await Project.addProject(req.body, "id");
    const project = await db("project")
      .where({ id })
      .first();
    res.status(201).json(project);
  } catch (error) {
    const message = error[error.errno] || "We ran into an error";
    res.status(500).json({ message, error });
  }
});

module.exports = router;
