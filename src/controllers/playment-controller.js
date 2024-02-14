const prisma = require("../config/prisma");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const playmentService = require("../services/playment-service");

exports.playmente = async (req, res, next) => {
  try {
    const { price, sleept, userId } = req.body;
    const newDate = new Date();
    console.log(req.body);
    const playment = await playmentService.createPlayment(
      price,
      newDate,
      sleept,
      userId
    );

    return res.status(200).json({ success: true, playment: playment });
  } catch (error) {
    console.error("Error creating playment:", error);
    res.status(500).json({ success: false, error: "Internal server error" });
  }
};
