import express from "express";
import Author from "../models/authorModel.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const existing = await Author.findOne({ name: req.body.name });
    if (existing) return res.status(400).json({ error: "Autor já cadastrado" });
    const author = await Author.create(req.body);
    res.status(201).json(author);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/", async (req, res) => {
  const authors = await Author.find();
  res.json(authors);
});

export default router;
