const Auther = require("../models/Auther");

// GET ALL
module.exports.getAllAuthers = async (req, res) => {
  try {
    const authers = await Auther.find();
    res.status(200).json(authers);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET ONE
module.exports.getAutherById = async (req, res) => {
  try {
    const auther = await Auther.findById(req.params.id);
    if (!auther) {
      return res.status(404).json({ error: "Auther not found" });
    }
    res.status(200).json(auther);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// CREATE
module.exports.createAuther = async (req, res) => {
  try {
    const auther = await Auther.create(req.body);
    res.status(201).json(auther);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// UPDATE
module.exports.updateAuther = async (req, res) => {
  try {
    const auther = await Auther.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!auther) {
      return res.status(404).json({ error: "Auther not found" });
    }
    res.status(200).json(auther);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// DELETE
module.exports.deleteAuther = async (req, res) => {
  try {
    const auther = await Auther.findByIdAndDelete(req.params.id);
    if (!auther) {
      return res.status(404).json({ error: "Auther not found" });
    }
    res.status(200).json(auther);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
