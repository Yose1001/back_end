const express = require("express");
const router = express.Router();
const reservationcouty  = require("../controllers/booking-controller");

router.post("/booking", reservationcouty.reservation);
router.get("/get", reservationcouty.getAllReservation);

module.exports = router;