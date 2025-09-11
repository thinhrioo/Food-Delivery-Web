import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected successfully");
  } catch (err) {
    console.error(`MongoDB connection error: ${err.message}`);
    // Thoát tiến trình nếu kết nối thất bại
    process.exit(1);
  }
};

export default connectDB;