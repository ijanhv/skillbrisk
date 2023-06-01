import jwt from "jsonwebtoken";
import User from "../models/User.model.js";
import createError from "../utils/error.js";

export const deleteUser = async (req, res, next) => {
  const user = await User.findById(req.params.id);

  if (req.userId !== user._id.toString()) {
    return next(
      createError(403, "You are not authorized to delete this account")
    );
  }
  await User.findByIdAndDelete(req.params.id);
  res.status(200).send("User deleted");
};

export const getUser = async (req, res, next) => {
  const user = await User.findById(req.params.id);
  
  res.status(200).send(user);
};
