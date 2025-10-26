import express from "express";
import Book from "../models/bookModel.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const book = await Book.create(req.body);
    res.status(201).json(book);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/", async (req, res) => {
  const books = await Book.find().populate("author");
  res.json(books);
});

export default router;
