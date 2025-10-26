import mongoose from "mongoose";

const authorSchema = new mongoose.Schema({
  name: { type: String, unique: true, required: true },
  birthDate: { type: Date, required: true },
  sex: { type: String, required: true },
  writingGenre: {
    type: String,
    enum: ["Novel", "Poetry", "Fantasy", "Fiction", "Mystery", "Suspense"],
    required: true,
  },
});

export default mongoose.model("Authors", authorSchema);
