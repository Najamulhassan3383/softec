import mongoose from "mongoose";

const bookingSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    trip: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Trip",
    },
    location: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Location",
    },
    startDate: {
      type: Date,
      required: true,
    },
    endDate: {
      type: Date,
      required: true,
    },
    status: {
      type: String,
      required: true,
      default: "Pending",
    },
  },
  {
    timestamps: true,
  }
);

const Booking = mongoose.model("Booking", bookingSchema);

export default Booking;
