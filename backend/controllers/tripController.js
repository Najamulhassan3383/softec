
import User from "../models/userModel.js";
import Trip from "../models/tripModel.js"; 
import asyncHandler from "../middleware/asyncHandler.js";


// Create a new trip
export const createTrip = asyncHandler(async (req, res) => {
  const trip = new Trip({
    user: req.user._id,
    location: req.body.location,
    startDate: req.body.startDate,
    endDate: req.body.endDate,
    description: req.body.description,
  });

  const createdTrip = await trip.save();
  res.status(201).json(createdTrip);
});

// Get all trips
export const getTrips = asyncHandler(async (req, res) => {
  const trips = await Trip.find({});
  res.json(trips);
});

// Get a trip by id
export const getTripById = async (req, res) => {
  const trip = await Trip.findById(req.params.id);

  if (trip) {
    res.json(trip);
  } else {
    res.status(404).json({ message: 'Trip not found' });
  }
};

// Update a trip
export const updateTrip = async (req, res) => {
  const { location, startDate, endDate, description } = req.body;

  const trip = await Trip.findById(req.params.id);

  if (trip) {
    trip.location = location;
    trip.startDate = startDate;
    trip.endDate = endDate;
    trip.description = description;

    const updatedTrip = await trip.save();
    res.json(updatedTrip);
  } else {
    res.status(404).json({ message: 'Trip not found' });
  }
};

// Delete a trip
export const deleteTrip = async (req, res) => {
  const trip = await Trip.findById(req.params.id);

  if (trip) {
    await trip.remove();
    res.json({ message: 'Trip removed' });
  } else {
    res.status(404).json({ message: 'Trip not found' });
  }
};
