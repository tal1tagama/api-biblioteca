import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import authorRoutes from "./routes/authorRoutes.js";
import bookRoutes from "./routes/bookRoutes.js";
import loanRoutes from "./routes/loanRoutes.js";

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.use("/users", userRoutes);
app.use("/authors", authorRoutes);
app.use("/books", bookRoutes);
app.use("/loans", loanRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`🚀 Servidor rodando na porta ${PORT}`));
