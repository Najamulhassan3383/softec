import asyncHandler from "express-async-handler"; // Update import statement
import Location from "../models/locationModel.js";

// Create Location
export const createLocation = asyncHandler(async (req, res) => {
  const location = new Location(req.body);
  try {
    if (req.file) {
      location.image = req.file.path; // Assuming req.file.path contains the path of the uploaded image
    }
    await location.save();
    res.status(201).send(location);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Get All Locations
export const getLocations = asyncHandler(async (req, res) => {
  try {
    const locations = await Location.find({});
    res.send(locations);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Get Single Location
export const getLocation = asyncHandler(async (req, res) => {
  try {
    const location = await Location.findById(req.params.id);
    if (!location) {
      return res.status(404).send();
    }
    res.send(location);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Update Location
export const updateLocation = asyncHandler(async (req, res) => {
  try {
    const location = await Location.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!location) {
      return res.status(404).send();
    }
    res.send(location);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Delete Location
export const deleteLocation = asyncHandler(async (req, res) => {
  try {
    const location = await Location.findByIdAndDelete(req.params.id);
    if (!location) {
      return res.status(404).send();
    }
    res.send(location);
  } catch (error) {
    res.status(500).send(error);
  }
});
