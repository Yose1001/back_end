const prisma = require("../config/prisma");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const typetableService = require("../services/typetable-services");

exports.typetable = async (req, res, next) => {
  try {
    const { type_name, price, reservationId } = req.body;
    console.log(req.body);
    const typetable = await typetableService.createTypetable(type_name, price, reservationId);
    return res.status(200).json({ success: true, typetable: typetable });
  } catch (error) {
    console.error("Error creating typetable:", error);
    res.status(500).json({ success: false, error: "Internal server error" });
  }
};