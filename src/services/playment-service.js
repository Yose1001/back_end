const prisma = require("../config/prisma");

exports.createPlayment = (price, create_at, sleept, userId) => {
  return prisma.playment.create({
    data: {
      price,
      create_at,
      sleept,
      userId,
    },
  });
};
