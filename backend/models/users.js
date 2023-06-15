import mongoose from "mongoose";
import validator from "validator";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter the user name"],
    maxLength: [50, "Max length should exceeds more than 50 characters"],
    minLength: [3, "Please enter valid name"],
  },
  email: {
    type: String,
    required: [true, "Please enter the user mail Id"],
    unique: true,
    validate: [validator.isEmail, "Please enter valid email"],
  },
  password: {
    type: String,
    required: [true, "Please enter the valid password"],
    select: false,
    minLength: [8, "Password should at least 8 characters"],
  },
});

userSchema.pre("save", async function () {
  if (!this.isModified("password")) next();
  this.password = await bcryptjs.hash(this.password, 10);
});

userSchema.methods.getJWTToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });
};

userSchema.methods.comparePassword = async function (enterPassword) {
  return await bcryptjs.compare(enterPassword, this.password);
};

export const user = mongoose.model("User", userSchema);
