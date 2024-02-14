const express = require("express");
const router = express.Router();
const restaurantcouty  = require("../controllers/restaurant-controller");

router.post("/restaurant", restaurantcouty.restaurant);
router.get("/get", restaurantcouty.getAllRestaurant);

module.exports = router;