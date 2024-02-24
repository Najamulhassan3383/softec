import multer from "multer";

// Multer setup
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // Save uploaded images to the "uploads" folder
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname); // Rename the file with a timestamp prefix to avoid overwriting
  },
});

const upload = multer({ storage: storage });

// In your route file
import {
  createLocation,
  deleteLocation,
  updateLocation,
  getLocation,
  getLocations,
} from "../controllers/locationController.js";

router.post("/locations", upload.single("image"), createLocation); // Uploads an image for creating a location

router.get("/locations", getLocations); // Get all locations

router.get("/locations/:id", getLocation); // Get a single location by ID

router.put("/locations/:id", upload.single("image"), updateLocation); // Uploads an image for updating a location

router.delete("/locations/:id", deleteLocation); // Delete a location by ID
