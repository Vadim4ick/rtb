import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import colors from "colors";
import cors from "cors";
import path from "path";

//Config
import { connectDb } from "./config/db.js";

//middleware
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";

// Routes
import userRoutes from "./routes/userRoutes.js";
import exercisesRoutes from "./routes/exerciseRoutes.js";
import workoutRoutes from "./routes/workoutRoutes.js";

connectDb();

dotenv.config();

const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json());
app.use(cors());

const __dirname = path.resolve();
app.use("/uploads", express.static(path.join(__dirname, "/uploads/")));

app.use("/api/users", userRoutes);
app.use("/api/exercises", exercisesRoutes);
app.use("/api/workouts", workoutRoutes);

app.use(errorHandler);
app.use(notFound);

const PORT = process.env.PORT || 2000;

app.listen(PORT, (req, res) => {
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  );
});
