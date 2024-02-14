const createError = require("../utils/createError");
const prisma = require("../config/prisma");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const userService = require("../services/user-service");

exports.register = async (req, res, next) => {
  try {
    const {
      firstName,
      lastName,
      email,
      phone,
      username,
      password,
      roleId,
      status
    } = req.body;
    console.log('log1',req.body);
    const newDate = new Date

    if (!email || !password) {
      return createError(400, "Email and password are required");
    }

    if (typeof email !== "string" || typeof password !== "string") {
      return createError(400, "Email or password is invalid");
    }

    const isUserExist = await userService.getUserByEmail(email);

    if (isUserExist) {
      return createError(400, "User already exist");
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    req.body.password = hashedPassword 
    console.log('log2',req.body);
    // await userService.createUser(email, hashedPassword);
    await userService.createUser(      
      firstName,
      lastName,
      email,
      phone,
      username,
      password,
      roleId,
      newDate,
      newDate,
      status,);

    res.json({ message: "register success" });
  } catch (err) {
    next(err);
  }
};

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return createError(400, "Email and password are required");
    }

    if (typeof email !== "string" || typeof password !== "string") {
      return createError(400, "Email or password is invalid");
    }

    const isUserExist = await userService.getUserByEmail(email);
    console.log(isUserExist);
    if (!isUserExist) {
      return createError(400, "Email or password is invalid");
    }

    const isPasswordMatch = bcrypt.compare(password, isUserExist.password);

    if (!isPasswordMatch) {
      return createError(400, "Email or password is invalid");
    }

    const now = new Date
    const exp = now.setHours(now.getHours()+2) 
    const token = jwt.sign({ id: isUserExist.id, roleId:isUserExist.roleId }, process.env.JWT_SECRET, { 
      expiresIn: exp,
    });

    res.json({ token });
  } catch (err) {
    next(err);
  }
};

