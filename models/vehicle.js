import mongoose from "mongoose";

const vehicleSchema = new mongoose.Schema({
  type: { type: String, required: true },
  availability: { type: Boolean, required: true },
  price: { type: Number, required: true },
});

export default mongoose.model("Vehicle", vehicleSchema);
