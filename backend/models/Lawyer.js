import mongoose from "mongoose";

const LawyerSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    id_card: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

export default mongoose.model("Lawyer", LawyerSchema);