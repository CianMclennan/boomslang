const express = require("express");
const validateId = require("../middleware/validateId");
const Screen = require("../models/screen");

const router = express.Router();

router.get("/:id", validateId, async (req, res) => {
	const { params: { id: screen_id } } = req;
	const [screen] = await Screen.find({ screen_id });
	if (!screen) return res.status(404).send();
	res.send(screen);
});

router.post("/:id", async (req, res) => {
	if (!req.body.title) return res.status(400).send("Title is required.");

	const screen = new Screen({ title: req.body.title });
	await screen.save();
	res.status(201).send(screen);
});

router.delete("/:id", async (req, res) => {
	const screen = await Screen.findByIdAndDelete(req.params.id);
  
	if (!screen)
	  return res.status(404).send("The screen with the given ID was not found.");
  
	res.status(204).send();
});

module.exports = router;