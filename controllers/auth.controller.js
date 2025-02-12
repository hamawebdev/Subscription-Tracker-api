import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import User from "../models/user.model.js";
import { JWT_SECRET, JWT_EXPIRES_IN } from "../config/env.js";

export const signUp = async (req, res, next) => {
    // Create a new session to handle transactions in MongoDB 
    // session are used to handle transactions in MongoDB

    const session = await mongoose.startSession();
    session.startTransaction();

    try {
        // Extract name, email, and password from req.body
        const { name, email, password } = req.body;

        //check if user exists
        const existingUser = await User.findOne({ email });

        if(existingUser) {
            const error = new Error("User already exists");
            error.statusCode = 409;
            throw error;
        }

        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create a new user
        const newUsers = new User({ name, email, password: hashedPassword }, { session });

        // create token
        const token = jwt.sign({ id: newUsers[0]._id }, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });

        // 
        res.status(201).json(
            {
                success: true,
                message: "User created successfully",
                data: {
                    token,
                    users: newUsers[0]
                }
            }
        );


    } catch (error) {
        await session.abortTransaction();
        session.endSession();
        next(error);
    }
};


// export const signIn = async (req, res, next) => {};

// export const signOut = async (req, res, next) => {};
