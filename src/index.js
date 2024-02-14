require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const authRoute = require("./routes/auth-route");
const reviweRoute = require("./routes/reviwe-route");
const bookingcouty = require("./routes/booking-route");
const typetablecouty = require("./routes/typetable-route")
const restaurantcouty = require("./routes/restaurant-route")
const playmentecouty = require("./routes/playment-route")

app.use(cors());
app.use(express.json());

app.use("/auth", authRoute);
app.use("/reviwe", reviweRoute);
app.use("/booking", bookingcouty);
app.use("/typetable", typetablecouty);
app.use("/restaurant", restaurantcouty);
app.use("/playmente", playmentecouty);

const port = process.env.PORT;
app.listen(port, () => {
  console.log("Server run on port" + " " + port);
});
