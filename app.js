import express from "express";
import cookieParser from "cookie-parser";
import { PORT } from "./config/env.js";
import userRouter from "./routes/user.routes.js";
import authRouter from "./routes/auth.routes.js";
import subscriptionRouter from "./routes/subscription.routes.js";
import connectDB from "./database/mongodb.js";
import errorMiddleware from "./middleware/error.middleware.js";

// Initialize express
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Routes
app.use("/api/v1/users", userRouter);
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/subscriptions", subscriptionRouter);

// Error handling middleware
app.use(errorMiddleware);

// Default route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Connect to database
async function connectToDataBase() {
    await connectDB();
}

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
  connectToDataBase();
});


export default app;