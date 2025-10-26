import express from "express";
import Book from "../models/bookModel.js";
import Loan from "../models/loanModel.js";
import User from "../models/userModel.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { userId, bookId } = req.body;
    const user = await User.findById(userId);
    const book = await Book.findById(bookId);

    if (!user || !book) {
      return res.status(404).json({ error: "Usuário ou livro não encontrado" });
    }

    const now = new Date();

    if (!book.isAvailable && (!book.expectedReturnDate || book.expectedReturnDate > now)) {
      return res.status(400).json({ error: "Livro indisponível para empréstimo" });
    }

    const returnDate = new Date(now);
    returnDate.setDate(returnDate.getDate() + 3);

    const loan = await Loan.create({
      user: user.name,
      book: book.title,
      loanDate: now.toISOString().split("T")[0],
      returnDate: returnDate.toISOString().split("T")[0],
    });

    book.isAvailable = false;
    book.expectedReturnDate = returnDate;
    await book.save();

    res.status(201).json({ message: "Empréstimo registrado com sucesso", loan });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
