import express from "express";
import User from "../models/userModel.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const existing = await User.findOne({ name: req.body.name });
    if (existing) return res.status(400).json({ error: "Usuário já existe" });
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

export default router;
