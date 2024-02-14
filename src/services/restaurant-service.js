const prisma = require("../config/prisma");

exports.createRestaurant = (
  restaurantName,
  address,
  phone,
  description,
  Menu,
  Review,
  reservations
) => {
  return prisma.restaurant.create({
    data: {
      restaurantName,
      address,
      phone,
      description,
      Menu,
      Review,
      reservations,
    },
  });
};

exports.getallRestaurant = () => {
  return prisma.restaurant.findMany({
    include:{
      Menu:true,
      Review:true,
      reservations:true
    }
  });
};
