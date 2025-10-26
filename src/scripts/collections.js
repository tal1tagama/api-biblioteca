import mongoose from "mongoose";
import dotenv from "dotenv";
import connectDB from "../config/db.js";
import Author from "../models/authorModel.js";
import User from "../models/userModel.js";
import Book from "../models/bookModel.js";
import Loan from "../models/loanModel.js";

dotenv.config();

await connectDB();

await Author.deleteMany({});
await User.deleteMany({});
await Book.deleteMany({});
await Loan.deleteMany({});

console.log("🧹 Todas as coleções foram excluídas e recriadas vazias.");

await mongoose.connection.close();
