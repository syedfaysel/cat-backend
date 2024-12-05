import mongoose from "mongoose";

const adoptionSchema = new mongoose.Schema({
  cat: { type: mongoose.Schema.Types.ObjectId, ref: "Cat", required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  shelterOwner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  status: {
    type: String,
    enum: ["pending", "approved", "rejected"],
    default: "pending",
  },
  message: { type: String }, // User's message for adoption
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Adoption", adoptionSchema);
