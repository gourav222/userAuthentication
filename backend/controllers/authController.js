import { user } from "../models/users.js";
import { handleError } from "../utils/errorHandler.js";
import sendToken from "../utils/jwtTokenAuthentication.js";

export const registerUser = async (req, res) => {
  try {
    const userData = await user.create(req.body);
    sendToken(userData, 201, res);
  } catch (error) {
    const errorMessage = await handleError(error);
    res.status(400).send(errorMessage);
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password)
      res.status(400).send("Please enter the email and password");

    const users = await user.findOne({ email }).select("+password");

    if (!users) res.status(400).send("Please enter the email and password");

    const isPasswordMatched = await users.comparePassword(password);

    if (!isPasswordMatched)
      res.status(400).send("Please enter the email and password");

    sendToken(users, 200, res);
  } catch (error) {
    res.status(400).send(error);
  }
};
