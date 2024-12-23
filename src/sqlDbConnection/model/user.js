import mongoose from "mongoose";

const loginModel  = new mongoose.Schema({
    name: String,
    password: String
});

export const User = mongoose.models.users || mongoose.model("users", loginModel);