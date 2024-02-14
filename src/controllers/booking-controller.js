const prisma = require("../config/prisma");
const reservationService = require("../services/booking-service");

exports.reservation = async (req, res, next) => {
  try {
    const {
      bookingTable,
      bookingDate,
      status,
      update,
      userId,
      typetables,
      playmentId,
      restaurantId,
    } = req.body;
    console.log(req.body);
    const booking = await reservationService.createReservation(
      bookingTable,
      bookingDate,
      status,
      update,
      userId,
      typetables,
      playmentId,
      restaurantId
    );
    return res.status(200).json({ success: true, booking: booking });
  } catch (error) {
    console.error("Error creating booking:", error);
    res.status(500).json({ success: false, error: "Internal server error" });
  }
};

exports.getAllReservation = async (req, res, next) => {
  try {
      const response = await reservationService.getallReservation()
      return res.status(200).json({ success: true, data: response });
  } catch (error) {
      console.error("Error creating reservation:", error);
      res.status(400).json({ success: false, error: "Reservation undifiled"});
  }
}