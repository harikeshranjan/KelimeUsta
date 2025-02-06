import { Schema, model } from "mongoose";

interface FlashcardReport {
  word: string;
  type: string;
}

const flashcardReportSchema = new Schema({
  word: {
    type: String,
    required: true,
    trim: true,
  },
  type: {
    type: String,
    required: true,
    trim: true,
  },
}, {
  timestamps: true,
})

const flashcardReportModel = model<FlashcardReport>("FlashcardReport", flashcardReportSchema);

export default flashcardReportModel;