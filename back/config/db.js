import mongoose from "mongoose";

export const connectDb = async () => {
  try {
    mongoose.set("strictQuery", false);
    // const conn = await mongoose.connect(process.env.MONGO_URI);
    const conn = await mongoose.connect("mongodb://127.0.0.1:27017/workout");

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.error(`Error: ${error.message}`.red.underline.bold);
    process.exit(1);
  }
};
