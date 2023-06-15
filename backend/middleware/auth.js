import { user } from "../models/users";
import jwt from "jsonwebtoken";

//This function is for the protected routes as kind of middleware functions.
exports.isAuthenticatonUser = async (req, res, next) => {
  const { token } = req.cookies;

  if (!token) throw "Please Login to access this resource";

  const decodeData = jwt.verify(token, process.env.JWT_SECRET);

  req.user = await user.findById(decodeData.id);

  next();
};
