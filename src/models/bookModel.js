import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  synopsis: { type: String, required: true },
  year: { type: Number, required: true },
  author: { type: mongoose.Schema.Types.ObjectId, ref: "Authors", required: true },
  isAvailable: { type: Boolean, default: true },
  expectedReturnDate: { type: Date, default: null },
});

export default mongoose.model("Books", bookSchema);
