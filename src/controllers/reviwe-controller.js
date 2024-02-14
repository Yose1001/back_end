const prisma = require("../config/prisma");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const reviewService = require("../services/reviwe-service");

exports.review = async (req, res, next) => {
  try {
    const { rate, comment, userId, restaurantId } = req.body;
    const newDate = new Date();
    console.log(req.body);
    const review = await reviewService.createReviwe(rate, comment, newDate, userId, restaurantId);

    return res.status(200).json({ success: true, review: review });
  } catch (error) {
    console.error("Error creating review:", error);
    res.status(500).json({ success: false, error: "Internal server error" });
  }
};

exports.getAllReviwe = async (req, res, next) => {
    try {
        const response = await reviewService.getallReviwe()
        return res.status(200).json({ success: true, data: response });
    } catch (error) {
        console.error("Error creating review:", error);
        res.status(400).json({ success: false, error: "Reviwe undifiled"});
    }
}