import mongoose from "mongoose";

const reservationSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  vehicleId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Vehicle",
    required: true,
  },
  reservationDate: { type: Date, required: true },
  returnDate: { type: Date, required: true },
});

export default mongoose.model("Reservation", reservationSchema);
