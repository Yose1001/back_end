const prisma = require("../config/prisma");

exports.createReservation = async (
  bookingTable,
  bookingDate,
  status,
  update,
  userId,
  playmentId,
  restaurantId
) => {
  try {
    const Reservation = await prisma.reservation.create({
      data: {
        bookingTable,
        bookingDate,
        status,
        update,
        userId,
        playmentId,
        restaurantId,
      },
    });
    return Reservation;
  } catch (error) {
    throw new Error(`Error creating booking: ${error.message}`);
  }
};

exports.getallReservation = () => {
  return prisma.reservation.findMany({
    include:{
      User: true,
      Playment: true,
      Restaurant: true,
      typetables: true,
    }
  });
};
