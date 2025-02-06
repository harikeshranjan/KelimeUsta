import { Schema, model } from "mongoose";

interface Contributor {
  name: string;
  email: string;
}

const contributorSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
  },
}, {
  timestamps: true,
});

const ContributorModel = model<Contributor>("Contributor", contributorSchema);

export default ContributorModel;