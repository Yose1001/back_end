const express = require("express");
const router = express.Router();
const playmentecouty  = require("../controllers/playment-controller");

router.post("/playmente", playmentecouty.playmente);

module.exports = router;