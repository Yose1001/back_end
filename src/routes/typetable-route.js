const express = require("express");
const router = express.Router();
const typetablecouty  = require("../controllers/typetable-controller");

router.post("/typetable", typetablecouty.typetable);

module.exports = router;