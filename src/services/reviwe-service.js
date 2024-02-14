const prisma = require("../config/prisma");

exports.createReviwe = (rate, comment, create_at, userId, restaurantId) => {
  return prisma.review.create({
    data: {
      rate,
      comment,
      create_at,
      userId,
      restaurantId,
    },
  });
};

exports.getallReviwe = () => {
  return prisma.review.findMany({
    include:{
        users:true,
        Restaurant:true
    }
  });
};
