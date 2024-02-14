const prisma = require("../config/prisma");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const restaurantService = require("../services/restaurant-service");

exports.restaurant = async (req, res, next) => {
  try {
    const {
      restaurantName,
      address,
      phone,
      description,
      Menu,
      Review,
      reservations,
    } = req.body;
    const newDate = new Date();
    console.log(req.body);
    const restaurant = await restaurantService.createRestaurant(
      restaurantName,
      address,
      phone,
      description,
      Menu,
      Review,
      reservations
    );
    return res.status(200).json({ success: true, restaurant: restaurant });
  } catch (error) {
    console.error("Error creating restaurant:", error);
    res.status(500).json({ success: false, error: "Internal server error" });
  }
};

exports.getAllRestaurant = async (req, res, next) => {
  try {
      const response = await restaurantService.getallRestaurant()
      return res.status(200).json({ success: true, data: response });
  } catch (error) {
      console.error("Error creating review:", error);
      res.status(400).json({ success: false, error: "Reviwe undifiled"});
  }
}