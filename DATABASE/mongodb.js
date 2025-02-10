import mongoose from "mongoose";
import { DB_URI, NODE_ENV } from "../config/env.js";


if (!DB_URI) {
    throw new Error("Please define the MONGODB_URI environment variable");
}

const connectDB = async () => {
    try {
        await mongoose.connectD(DB_URI)
        console.log(`MongoDB connected: ${NODE_ENV}`);
    } catch (error) {
        console.error("Error connecting to MongoDB", error.message);
        process.exit(1);
    }
}

export default connectDB;