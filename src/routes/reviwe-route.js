const express = require("express");
const router = express.Router();
const reviwecouty  = require("../controllers/reviwe-controller");

router.post("/reviwe", reviwecouty.review);
router.get("/get", reviwecouty.getAllReviwe);

module.exports = router;