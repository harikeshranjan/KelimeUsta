import { Schema, model } from "mongoose";

type VocabT = {
  word: string;
  meaning: string;
  type: string;
  example: string;
  exampleMeaning: string;
}

const vocabSchema = new Schema({
  word: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  meaning: {
    type: String,
    required: true,
    trim: true,
  },
  type: {
    type: String,
    required: true,
    trim: true,
  },
  example: {
    type: String,
    required: true,
    trim: true,
  },
  exampleMeaning: {
    type: String,
    required: true,
    trim: true,
  },
}, {
  timestamps: true,
})

const vocabsModel = model<VocabT>("Vocab", vocabSchema);

export default vocabsModel;