import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
dotenv.config();
import fileupload from "express-fileupload";
import cloudinary from "cloudinary";
import connectDB from "./config/db.js";
// import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";

import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

const port = process.env.PORT || 5000;

connectDB();
cloudinary.config({ 
  cloud_name: 'dvgwyn2jv', 
  api_key: '279643717662695', 
  api_secret: 'qYplFk9zuadWVnrWE_xUDN-T104' 
});

const app = express();
const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true, // Allow credentials
};
app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/users", userRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(port, () =>
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}`)
);
